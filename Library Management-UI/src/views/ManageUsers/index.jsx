import React, { Component } from 'react';
import Preview from '../../layout/Preview';
import {PostData} from '../../services/PostData/PostData';
import axios from 'axios';
// Externals
import PropTypes from 'prop-types';
import { css } from 'glamor'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { CircularProgress, Typography } from '@material-ui/core';

import { Button, IconButton, TextField,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';

// Shared layouts


// Shared services
import { getUsers } from '../../services/user';

// Custom components

// Component styles
import styles from './styles';

class ManageUser extends Component {
  signal = true;

  constructor(props) {
    super(props);

    this.state = {
    users:[],
      
      searchval: '',
      redirectToReferrer: false,
      
      userid:'',
      roleid:'',
      


    };

    this.getUsers = this.getUsers.bind(this);
	this.register = this.register.bind(this);
    

  }

register() {
this.state.redirectToReferrer = true;
}




  getUsers() {

    //this.setState({searchval:this.props.searchVal});
   // alert(this.state.searchval);
    if(this.state.roleid == '6')
    {
      var userToken = sessionStorage.getItem('userId');
      userToken = userToken.replace(/['"]+/g, '');
      //alert("myid"+token);
      this.state.userid = userToken;
    }
    else {
      var token = sessionStorage.getItem('customerId');
      token = token.replace(/['"]+/g, '');
      //alert("myid"+token);
      this.state.customerid = token;
    }
    console.log("hai"+this.state);
    PostData('getUsers.php',this.state).then((result) => {
      let responseJson = result;
      console.log("output......."+JSON.stringify(responseJson.users));
      this.setState({users: responseJson.users});
     // console.log("Knowoutput......."+this.state.users[0].email);
      /* if(responseJson.status === "success"){
       sessionStorage.setItem('sessionId',JSON.stringify(responseJson));
       this.setState({redirectToReferrer: true});
       }*/

    });


  }

  

  componentWillMount() {  

    
    if(sessionStorage.getItem("sessionId")){
      this.getUsers();

    }

    else{
      this.setState({redirectToReferrer: true});
    }


  }




  componentWillUnmount() {
    this.signal = false;
  }





  render() {
      const classes = this.props;
      const { selectedUsers } = this.state;
if(this.state.redirectToReferrer){
      return(<Redirect to = {'/registeruser'}/>);
    }

    return (
     
<Preview title="Manage User">
<br/>
<div className={classes.root}>
          <Button onClick={this.register}>Add User</Button>

<br/>

          <div className={classes.content}>
            <UserTable  users = {this.state.users}  name="users" getUsers={this.getUsers}/></div>
        </div>
</Preview>



      
    );
  }
}

export default withStyles(styles)(ManagePhysician);
