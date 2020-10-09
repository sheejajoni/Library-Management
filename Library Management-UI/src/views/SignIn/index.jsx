import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Redirect} from 'react-router-dom';
//import compose from 'recompose/compose';
// Externals
import PropTypes from 'prop-types';
import axios from 'axios';
//import validate from 'validate.js';
import _ from 'underscore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
    Grid,
    Button,
    IconButton,
    CircularProgress,
    TextField,
    Typography
} from '@material-ui/core';

// Material icons
//import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';

// Shared components
//import { Facebook as FacebookIcon, Google as GoogleIcon } from 'icons';

// Component styles
import styles from './styles';

// Form validation schema
import schema from './schema';

import {PostData} from './PostData';
import Axios from 'axios';


// Service methods
const signIn = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, 1500);
  });
};

class SignIn extends Component {
  constructor(){
    super();

    this.state = {
      identity: '',
      password: '',
      show:false,
      redirectToReferrer: false,
      fields:{},
      errors:{},
      roleid:'',
      
    };

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  
  }
  componentWillMount() {

   var s= window.location.href;   
   
   
   const parts = s.split('/');
     var w =  parts[3];
   //localStorage.setItem('dbname', w);
   localStorage.setItem('dbname',"mapledemo");
  
 
   }



  login() {
    var db = localStorage.getItem('dbname');
    var self =this;
    db = db.replace(/['"]+/g, '');   
     var data = {userName: this.state.identity, password: this.state.password}
    if (this.validateForm()) {
      axios.post("http://178.128.165.237:8082/login1",data)
      .then(function(res){
       
        localStorage.setItem('sessionId',res.data.tokenId);
         localStorage.setItem('roleId',res.data.roleId);
        localStorage.setItem('rolename', res.data.roleName);
        localStorage.setItem('tenantid',res.data.uuid);
        localStorage.setItem('userid',"admin@mailinator.com");
     
        if(res.data.status === "Success"){
          
          
          
          self.setState({redirectToReferrer: true});
         
         
          
          
          
          
          

        }
        else
        {
          toast.configure();
          toast("Invalid Login !");


        }
      });
    /*  PostData('login1',data).then((result) => {
        console.log(result.sessionId + "first");
        localStorage.setItem('sessionId',JSON.stringify(result.sessionId));
        localStorage.setItem('rolename', JSON.stringify(result.rolename));
        localStorage.setItem('userid',JSON.stringify(result.userId));

        console.log(this.state.identity + "hii");
        console.log(result.sessionId);
        let responseJson = result;
        console.log(responseJson.customerId);
        if(responseJson.status === "success"){
          
          
          
          this.setState({redirectToReferrer: true});
         
         
          
          
          
          
          

        }
        else
        {
          toast.configure();
          toast("Invalid Login !");


        }

      });*/

    }
 


  }


  validateForm() {

    let fields = this.state;
    let errors = {};
    let formIsValid = true;



    if (!fields["identity"]) {
      formIsValid = false;
      errors["identity"] = "*Please enter your email-ID.";
    }

    if (typeof fields["identity"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["identity"])) {
        formIsValid = false;
        errors["identity"] = "*Please enter valid email-ID.";
      }
    }



    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;


  }










  onChange(e){
    this.setState({[e.target.name]:e.target.value});


  }




  render() {


   const { classes } = this.props;

   if ((this.state.redirectToReferrer)  ) 
    {
      return(<Redirect to = {'/Preview'}/>);
    }


    if ((this.state.redirectToReferrer) && (this.state.roleid=='2' || this.state.roleid=='3') && (sessionStorage.getItem('sessionId')) )
    {
      return (<Redirect to={'/customerdashboard'}/>)
    }

   


    const showEmailError = "error";
    const showPasswordError = "error";

    return (
        <div className={classes.root}>
          <Grid
              className={classes.grid}
              container
          >
            <Grid
                className={classes.quoteWrapper}
                item
                lg={7}
                xs={12}
            >
              <div className={classes.quote}>
                <div className={classes.quoteInner}>
                  <Typography
                      className={classes.quoteText}
                      variant="h1"
                  >
                    Welcome To Ithings
                  </Typography> <div className={classes.person}><br/></div> <div className={classes.person}><br/></div>
                  <div className={classes.person}>
                    <Typography
                        className={classes.quoteText}
                        variant="h2"
                    >
                 Login to see your customised application
                      </Typography>
                  </div>
                  <div className={classes.person}>
                    <Typography
                        className={classes.name}
                        variant="body1"
                    >
                      Developed by Ithings foundation
                    </Typography>
                    {/*<Typography
                        className={classes.bio}
                        variant="body2"
                    >
                      Manager at inVision
                    </Typography>*/}



                </div>
              </div></div>
            </Grid>
            <Grid
                className={classes.content}
                item
                lg={5}

            >
              <div className={classes.content}>
                <div className={classes.contentHeader}>
                  
                  { /*<IconButton
                   className={classes.backButton}
                   onClick={this.handleBack}
                   >
                   <ArrowBackIcon />
                   </IconButton>*/ }
                </div>
                <div className={classes.contentBody}>
                  <form className={classes.form}>
                    <Typography
                        className={classes.title}
                        variant="h1"
                    >
                      Login To Your Application
                    </Typography>
                    <br/><br/>
                    {/* <Typography
                     className={classes.subtitle}
                     variant="body1"
                     >
                     Sign in with social media
                     </Typography>
                     <Button
                     className={classes.facebookButton}
                     color="primary"
                     onClick={this.handleSignIn}
                     size="large"
                     variant="contained"
                     >
                     <FacebookIcon className={classes.facebookIcon} />
                     Login with Facebook
                     </Button>
                     <Button
                     className={classes.googleButton}
                     onClick={this.handleSignIn}
                     size="large"
                     variant="contained"
                     >
                     <GoogleIcon className={classes.googleIcon} />
                     Login with Google
                     </Button>
                     <Typography
                     className={classes.sugestion}
                     variant="body1"
                     >
                     or login with email address
                     </Typography>*/}
                    <div className={classes.fields}>
                      <TextField
                          className={classes.textField}
                          label="Email address"
                          name="identity"
                          onChange={this.onChange}
                          type="text"
                          variant="outlined"
                      />
                      <div className={classes.fieldError}>{this.state.errors.identity}</div>

                      <TextField
                          className={classes.textField}
                          label="Password"
                          name="password"
                          onChange={this.onChange}
                          type="password"

                          variant="outlined"
                      />
                      <div className={classes.fieldError}>{this.state.errors.password}</div>

                    </div>
                    <Button
                        className={classes.signInButton}
                        color="primary"

                        onClick={this.login}
                        size="large"
                        variant="contained"
                    >
                      Sign in
                    </Button>

                  </form>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default 
    withStyles(styles)
(SignIn);











