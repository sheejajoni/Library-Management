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

 class RegisterBookReturn extends Component {
    constructor(props) {
        super(props);
    
       this.state = {
            query: '',
            books : [],
            redirectToReferrer:false,
            fields:{},
            errors:{},
            bookid:'',
            userid:'',
         };

        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeValues= this.removeValues.bind(this);
        this.getBooks = this.getBooks.bind(this);
     
      }
     
     
     
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }
    
       getBooks(book) {
    
    this.setState({bookid:book.bookid});
   
  this.setState({userid:book.userid});
    

        }
    
    
     
    
      onChange(e){
        this.setState({[e.target.name]:e.target.value});
    
      }
      
      
    
       register() {
       if (this.validateForm()) {
        var uid = localStorage.getItem('userid');
        var sid = localStorage.getItem('sessionId');
	var date = new Date();
	var timestamp = date.getTime();
        
        const s = {
	userid : uid, 
          bookid :this.state.bookid,
	useridid :this.state.userid,
	issuedate : timestamp
      
      };
        var self = this;
        console.log(s);
        axios.post("http://localhost/registerbookreturn", s,{
          headers: 
              {Authorization : sid},
          }

      )
    .then((result) => {
      console.log(result.data);
            let responseJson = result.data;
            
            if(responseJson.message.successMessage ==="Book return successfully")
           {
            toast.configure();
             // toast("Invalid Login !");
             toast("Book return successfully", {
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
             toast("Failed to return", {
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
       
    }
    
      removeValues()
      {
       
      }
    
    
     validateForm() {

        let fields = this.state;
        let errors = {};
        let formIsValid = true;
    
    
    
        if (!fields["ISBN"]) {
          formIsValid = false;
          errors["userid"] = "*Please enter UserId.";
        }
        if (!fields["bookid"]) {
          formIsValid = false;
          errors["bookid"] = "*Please enter book id.";
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
      return(<Redirect to = {'/managebooks'}/>);
    } 
 
    return (
        <Preview title = "Book Return">
            <div className={rootClassName}>
      <form className={classes.form}><div style = {{marginTop:'100px'}}></div>


	<TextField
           className={classes.textField}
           label="Book ID"
           name="bookid"
           margin="normal"
           type="text"
           value={this.state.bookid}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.bookid}</div><br/>

	<TextField
           className={classes.textField}
           label="User ID"
           name="userid"
           margin="normal"
           type="text"
           value={this.state.userid}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.userid}</div><br/>


       
 
     </form>

  
          

            <Button
                color="primary"
                variant="outlined"
               
                className={classes.registerbtn}
                onClick={this.register}
            >
                Register
            </Button></div>
      </Preview>
    );
  }
}

export default withStyles(styles)(RegisterBookReturn);
