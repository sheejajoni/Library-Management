import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Preview from '../../layout/Preview';
import classNames from 'classnames';
import { css } from 'glamor'
import { Button, IconButton, TextField,Select,FormControl,MenuItem,InputLabel} from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import {PostData} from '../../services/PostData/PostData';
//import Select1 from 'react-select';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

 class RegisterUser extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         userid:'',
          users:[],
            name:'',
          show:false,          
          postalcode :'',
          country :'',
          state:'',
          city:'',
          street: '',
          phone: '',
          redirectToReferrer: false,
          refresh:'',
          fields:{},
          errors:{},
          redirectToReferrerU: false,
            
        };
        this.getUsers = this.getUsers.bind(this);
       this.handleChange = this.handleChange.bind(this);
       this.handleChangeDate = this.handleChangeDate.bind(this);
       this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeValues = this.removeValues.bind(this);
     
      }
     
     
     
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
      
     
    
      onChange(e){
        this.setState({[e.target.name]:e.target.value});
    
      }
      
       getUsers(user) {

        this.setState(userid: user.userid});
          
        this.setState({name: user.firstName});
        
        this.setState({phone: user.phone});
               
        this.setState({street:user.address.street});
        this.setState({city:user.address.city});
        this.setState({postalcode:user.address.postalcode});
        this.setState({state:user.address.state});
        this.setState({country:user.address.country});
    
      }
     
    
      register() {
        if (this.validateForm()){
          var uid = localStorage.getItem('userid');
        var sid = localStorage.getItem('sessionId');
        const adress = {street:this.state.street,postalcode:this.state.postalcode,city:this.state.city,state:this.state.state,country:this.state.country};
        const s = { userId: uid,
           name:this.state.name,
           phone:this.state.phone,
        address:adress,
      };
      var self =this;
    
         axios.post("http://localhost/registeruser", s,{
           headers: 
               {Authorization : sid},
           }
   
       )
           .then((res) => {
             let responseJson = res.data;
             console.log("valll"+responseJson);
             if(responseJson.message.successMessage ==="Registered Successfully.")
            {
             
              toast.configure();
              // toast("Invalid Login !");
              toast("Successfully Registered", {
               position: toast.POSITION.TOP_RIGHT,
               className: css({
                   background: " #0693e3",
                   color:"#F0FFF0"
               })
           });
           self.setState({redirectToReferrer:true});
           }
            else 
            {
               
               toast.configure();
              // toast("Invalid Login !");
              toast("Already exist. Please register a new user", {
               position: toast.POSITION.TOP_RIGHT,
               className: css({
                   background: " #0693e3",
                   color:"#F0FFF0"
               })
           });
           self.setState({redirectToReferrer:true});
           }
     
           });
         }
     this.setState({redirectToReferrer:true});
     
       }
      removeValues()
      {
       
      }
    
    
      validateForm() {
    
        let fields = this.state;
        let errors = {};
        let formIsValid = true;
    
    
    
        
       
        }
        if (!fields["phone"]) {
          formIsValid = false;
          errors["phone"] = "*Please enter your phone.";
        }
        
    
    
        
        if (typeof fields["phone"] !== "undefined") {
          //regular expression for email validation
          var pattern = new RegExp(/^[0-9 ]{10}$/);
          if (!pattern.test(fields["phone"])) {
            formIsValid = false;
            errors["phone"] = "*Please enter valid phone number.";
          }
        }
    
        
    
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
      }
   
    
    
    
  render() {
    const { classes,className } = this.props;
    const rootClassName = classNames (classes.root,className) ;
    if(this.state.redirectToReferrer){
      return(<Redirect to = {'/manageuser'}/>);
    }
    return (
        <Preview title = "Register User">
            <div className={rootClassName}>
      <form className={classes.form}>
       <div style = {{marginTop:'100px'}}></div>
      <TextField
          className={classes.textField}
          label="Name"
          name="name"
          margin="normal"
          type="text"
          value={this.state.name}
          onChange={this.onChange}
          variant="outlined"

      /> 
      <br/>
     
         

      <TextField
          className={classes.textField}
          label="Phone"
          name="phone"
          margin="normal"
          value={this.state.phone}
          type="text"
          onChange={this.onChange}
          variant="outlined"
      /> <div className={classes.fieldError}>{this.state.errors.phone}</div>

     <br/>

                    

      <TextField
          className={classes.textField}
          label="Street"
          name="street"
          margin="normal"
          multiline={true}
          rows={2}
          rowsMax={4}
          type="text"
          onChange={this.onChange}
          variant="outlined"
          value={this.state.street}
      /><div className={classes.fieldError}>{this.state.errors.address}</div>
      
           

    
     <TextField
          className={classes.textField1}
          label="City"
          name="city"
          margin="normal"
          type="text"
          
          onChange={this.onChange}
          variant="outlined"
          value={this.state.city}/>
    <TextField
          className={classes.textField1}
          label="State"
          name="state"
          margin="normal"
          type="text"
     
          onChange={this.onChange}
          variant="outlined"
          value={this.state.state}/>

          
<br/>
<TextField
          className={classes.textField1}
          label="postalcode"
          name="postalcode"
          margin="normal"
          type="text"
     
          onChange={this.onChange}
          variant="outlined"
          value={this.state.postalcode}/>
          <TextField
          className={classes.textField1}
          label="country"
          name="country"
          margin="normal"
          type="text"
     
          onChange={this.onChange}
          variant="outlined"
          value={this.state.country}/>
         

            </form>

            <Button
                color="primary"
                variant="outlined"
                onClick={this.register}
                className={classes.registerbtn}
            >
                Register
            </Button></div>
      </Preview>
    );
  }
}

export default withStyles(styles)(RegisterUser);
