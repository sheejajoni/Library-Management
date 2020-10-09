import React, { Component } from 'react';
import { css } from 'glamor'
import axios from 'axios';
import {PostData} from '../../services/PostData/PostData';
import {Redirect} from 'react-router-dom';
// Externals
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { CircularProgress, Typography } from '@material-ui/core';

import { Button, IconButton, TextField,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';

// Shared layouts
import Preview from '../../layout/Preview';

// Shared services
import { getUsers } from '../../services/user';
// Custom components
import { UsersToolbar, UsersTable} from './component';

// Component styles
import styles from './styles';


class  ManageBooks extends Component  {
  signal = true;

  constructor(props) {
    super(props);

    this.state = {
      books:[],
      bookid:'',
      searchval: '',
      redirectToReferrer: false,

    };

    this.getBooks = this.getBooks.bind(this);
    
    this.update = this.update.bind(this);

  }



register() {
this.state.redirectToReferrer = true;
}


  getBooks() {

    
   var self =this;
    
   var s = localStorage.getItem('sessionId');
   
    var k = localStorage.getItem('userid');
  var data = {userId:k,batchsize:"25",offset:"0"};
    
    axios.post("http://localhost/getbookdetails",data,{ headers: { Authorization: s } })
    .then(function(res){
        if(res.data.status == "Session Expired"){
          toast.configure();
          // toast("Invalid Login !");
          toast("Session Expired", {
           position: toast.POSITION.TOP_RIGHT,
           className: css({
               background: "#0693e3 ",
               color:"#F7FCF7"
           })
       }); 
      }
      else{

      
      
      self.setState({books: res.data.books});
    }
  })
      .catch((error) => {
        alert('error ' + error);
     });
    


  }
  
 
  componentWillMount() {
    this.getBooks();

    if(sessionStorage.getItem("sessionId")) {
      console.log("Done");
      if (localStorage.getItem('userid')) {

        this.state.userid = localStorage.getItem('userid');
this.getBooks();
        
      }

      
    }

    else{
      this.setState({redirectToReferrer: true});
    }


  }




  componentWillUnmount() {
    this.signal = false;
  }



  update(value){
    return () => {
      this.setState({
        searchval: value
      });
      console.log("aaaaaa"+this.state.searchval);
      this.getBooks();


    }
  }



  render() {
    const { classes } = this.props;
    const { selectedUsers } = this.state;
	if(this.state.redirectToReferrer){
      return(<Redirect to = {'/registerbooks'}/>);
    }

    return (
      <Preview title = "Manage Books">
          <div className={classes.root}>
           
          <Button onClick={this.register}>Add User</Button>
         
          <div className={classes.content}>
            <UsersTable  books = {this.state.books}   data={this.update} name="books" getBooks={this.getBooks}/>
            </div>
         
        </div>

      </Preview>

    );
  }
}



export default withStyles(styles)(ManageBooks);










  


  

   
