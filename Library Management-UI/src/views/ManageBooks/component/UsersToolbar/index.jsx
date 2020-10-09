import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles';
import {PostData} from '../../../../services/PostData/PostData';
import {Redirect} from 'react-router-dom';
// Material helpers
import { withStyles } from '@material-ui/core';
import { css } from 'glamor'
// Material components
import { Button, IconButton, TextField,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';

// Material icons
import {
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon,

    Add as AddButton,
    ArrowForwardIosOutlined as ArrowForwardIcon,
    Delete as DeleteIcon
} from '@material-ui/icons';
//import dashcont from '../../../../data/data.json';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter,
  DisplayMode,
  SearchInput
} from '../../../../components';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-responsive-modal';

// Component styles


class UsersToolbar extends Component {

  constructor(props) {
        super(props);
    
        this.state = {
            query: '',
            books : [],
            ISBN: '',
            open: false,
            name: '',
            author: '',
            publisher: '',
            edition: '',
            price: '',
            rack: '0',
            show:false,
            resp:'',
            redirectToReferrer:false,
            fields:{},
            errors:{},
            bookid:'',
         };

        
        this.register = this.register.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeValues= this.removeValues.bind(this);
        this.getBooks = this.getBooks.bind(this);
    
      }

       getBooks(book) {
    
    this.setState({bookid:book.bookid});
  this.setState({edition:book.edition});
 this.setState({ISBN:book.isbn});
    this.setState({author: book.author});
    this.setState({name: book.name});
    this.setState({publisher: book.publisher}); 
    this.setState({price: book.price});
    this.setState({rack: book.rack});  
  
    

        }
    
    
      

      onChange(e){
        this.setState({[e.target.name]:e.target.value});
        
    
      }
     validateForm() {

        let fields = this.state;
        let errors = {};
        let formIsValid = true;
    
    
    
        if (!fields["ISBN"]) {
          formIsValid = false;
          errors["ISBN"] = "*Please enter ISBN.";
        }
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "*Please enter book name.";
        }
        if (!fields["author"]) {
          formIsValid = false;
          errors["author"] = "*Please enter author name.";
        }
       
        if (!fields["publisher"]) {
          formIsValid = false;
          errors["roleid"] = "*Please enter publisher name.";
        }

	if (!fields["edition"]) {
          formIsValid = false;
          errors["edition"] = "*Please enter edition date.";
        }

	if (!fields["price"]) {
          formIsValid = false;
          errors["roleid"] = "*Please enter price.";
        }

	if (!fields["rack"]) {
          formIsValid = false;
          errors["roleid"] = "*Please enter rack number.";
        }
    
        
    
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    
      }


    register() {
       if (this.validateForm()) {
        var uid = localStorage.getItem('userid');
        var sid = localStorage.getItem('sessionId');
        
        const s = {
	userid : uid, 
          bookid :this.state.bookid,
	isbn :this.state.ISBN,
        name:this.state.name,
       author:this.state.author,
	publisher:this.state.publisher,
      edition:this.state.edition,
	rack:this.state.rack,
	price:this.state.price
      
      };
        var self = this;
        console.log(s);
        axios.post("http://localhost/registerbook", s,{
          headers: 
              {Authorization : sid},
          }

      )
    .then((result) => {
      console.log(result.data);
            let responseJson = result.data;
            
            if(responseJson.message.successMessage ==="Registered Successfully")
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
             toast("Already exist. Please register a new book", {
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
    
    
  render() {
  
    const { classes,className } = this.props;
    const rootClassName = classNames (classes.root,className) ;
    if(this.state.redirectToReferrer){
      return(<Redirect to = {'/managebooks'}/>);
    }
  
    return (
      <Preview title = "Register Book">

       <div className={rootClassName}>
       <form className={classes.form}><div style = {{marginTop:'100px'}}></div>
	<TextField
           className={classes.textField}
           label="ISBN Number"
           name="ISBN"
           margin="normal"
           type="text"
           value={this.state.ISBN}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.ISBN}</div><br/>


       <TextField
           className={classes.textField}
           label="Book Name"
           name="name"
           margin="normal"
           type="text"
           value={this.state.name}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.name}</div><br/>

       <TextField
           className={classes.textField}
           label="Author Name"
           name="author"
           margin="normal"margin="normal"
           type="text"
           onChange={this.onChange}
           variant="outlined"
           value={this.state.author}
          disabled
       /> <div className={classes.fieldError}>{this.state.errors.author}</div><br/>
       
    
       <TextField
           className={classes.textField}
           label="Publisher"
           name="publisher"
           margin="normal"
           type="text"
           value={this.state.publisher}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.publisher}</div>
      <br/>

	<TextField
           className={classes.textField}
           label="Edition"
           name="edition"
           margin="normal"
           type="text"
           value={this.state.edition}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.edition}</div>
      <br/>


	<TextField
           className={classes.textField}
           label="Price"
           name="price"
           margin="normal"
           type="text"
           value={this.state.price}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.price}</div>
      <br/>


	<TextField
           className={classes.textField}
           label="Rack Number"
           name="rack"
           margin="normal"
           type="text"
           value={this.state.rack}
           onChange={this.onChange}
           variant="outlined"
       /> <div className={classes.fieldError}>{this.state.errors.rack}</div>
      <br/>

     
       
 
     </form>

  


    <Button
        color="primary"
        variant="outlined"
        onClick={this.register}
        className={classes.registerbtn}
    >
     Register
    </Button>
    </div>
    </Preview>
   
    );
  }
}

UsersToolbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  selectedUsers: PropTypes.array
};

UsersToolbar.defaultProps = {
  selectedUsers: []
};

export default withStyles(styles)(UsersToolbar);
