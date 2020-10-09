import React, { Component } from 'react';
import {PostData} from '../../../../services/PostData/PostData';

import { DisplayMode, SearchInput } from '../../../../components';
import {Redirect} from 'react-router-dom';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// Externals
import classNames from 'classnames';
//import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  EditOutlined as EditIcon,
    DeleteOutlineOutlined as DeleteIcon
} from '@material-ui/icons';
// Material 
import { css } from 'glamor'

import { withStyles } from '@material-ui/core';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Autosuggest from 'react-autosuggest';
import {theme} from './theme.css';
// Material components
import {
    Button,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    TableSortLabel
} from '@material-ui/core';

// Shared services
import { getOrders } from '../../../../services/user';
// Material components
import { IconButton, TextField,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';
// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletToolbar,
  PortletContent,
  PortletFooter,
  Status
} from '../../../../components';
import axios from 'axios';
// Component styles
import styles from './styles';
import Modal from 'react-responsive-modal';
const statusColors = {
  delivered: 'success',
  pending: 'info',
  refund: 'danger'
};

class UsersTable extends Component {

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
    this.handleChange = this.handleChange.bind(this);
    this.editUser = this.editUser.bind(this);
    this.onChange = this.onChange.bind(this);
    
      this.confirmDelete = this.confirmDelete.bind(this);

  }
componentWillMount(){
  console.log("physician list"+this.props.users);
}
  componentDidMount(){
        this.bindDropDowns();
    }
   
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  handleChange(event) {
    this.setState({roleid: event.target.value});
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});

  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  onChange1 = (event, { newValue }) => {
    this.setState({
        value: newValue
    });

    
  
};

// Autosuggest will call this function every time you need to update suggestions.
// You already implemented this logic above, so just use it.
onSuggestionsFetchRequested = ({ value }) => {
    this.state.searchval = value;
    //alert(this.state.searchval);
    PostData('getCustomers.php',this.state).then((result) => {
        let responseJson = result;
        console.log("output......."+JSON.stringify(responseJson.customers));
        this.setState({suggestions: responseJson.customers});
        console.log("Knowoutputqqq......."+this.state.suggestions);
        /* if(responseJson.status === "success"){
         sessionStorage.setItem('sessionId',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true});
         }*/

    });
};

// Autosuggest will call this function every time you need to clear suggestions.
onSuggestionsClearRequested = () => {
    this.setState({
        suggestions: []
    });
};



  editUser() {
    //alert("Edit al"+this.state.userid+"--"+this.state.name+"--"+this.state.email+"--"+this.state.phone+"--"+this.state.roleid);
    
    if (this.validateForm()){
      PostData('editUser.php',this.state).then((result) => {
        let responseJson = result;
        console.log("valll"+responseJson);

       if(responseJson.responses[0].message ==="User details edited successfully.")
       {
        this.props.getUsers();
         this.onCloseModal();
      }

       else if(responseJson.responses[0].error ==="User Edit failed")
       {
        toast.configure();
        toast("PFT edit failed.");
       // this.onCloseModal();
       }
         

      });
    }


  }

  validateForm() {

    let fields = this.state;
    let errors = {};
    let formIsValid = true;


    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
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

  


  edit(user)
  {

 this.setState(userid: user.userid});
          
        this.setState({name: user.firstName});
        
        this.setState({phone: user.phone});
               
        this.setState({street:user.address.street});
        this.setState({city:user.address.city});
        this.setState({postalcode:user.address.postalcode});
        this.setState({state:user.address.state});
        this.setState({country:user.address.country});
  }


  
  confirmDelete(user) {
    confirmAlert({
      customUI: ({ onClose }) => {

        return (
          
            
          <div style={{background:'#1761a8', width:'400px', height:'250px', padding:'70px', color:'#fff'}}>
          <h1>Are you sure?</h1>
          <p>You want to delete this ?</p>
          <Button style={{backgroundColor:'#fff', color:'000',marginRight:'30px'}} onClick={onClose}>no</Button>
          <Button style={{backgroundColor:'#fff', color:'000'}}
              onClick={() => {
        this.deleteUser(user);
        onClose();
      }}
          >
             Yes, Delete it!
          </Button>
        </div>
        );
      }
    });
}


  deleteUser(user) {
    var cd = user.userid;
 
    //   alert(this.state.customerid+"to be deleted");
     
    var s = localStorage.getItem('sessionId');
    console.log(s);
     var k = localStorage.getItem('userid');
   var data = {loginuserId:k,userid:user.userid};
   
    axios.delete("http://localhost/deleteuser", { headers: {  'Access-Control-Allow-Origin': '*',
      Authorization: s
    },data :{ userId:k,userid:user.userid

    }}
     
     
    )
      .then((result) => {
        let responseJson = result;
        
        this.props.getUsers();

      });
    


  }

  NotdeleteUser() {
  
    this.props.getUsers();
}
  


  render() {
    const { open } = this.state;
    const onCloseModal = this.onCloseModal;
    const { classes, className, selectedUsers,...rest } = this.props;
    const { values } = this.state;
    const rootClassName = classNames(classes.root, className);
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'User Name',
        value,
        onChange: this.onChange1
    };
    
    const getSuggestionValue = suggestion => (



      
          suggestion.name

);
 


    let userFeed = this.props.users.map(function (user, index) {
      return (
          <TableRow
          className={classes.tableRow}
              

          >
    <TableCell className={classes.tableCell}>{user.name}</TableCell>
            <TableCell className={classes.tableCell}>{user.phone}</TableCell>

            <TableCell className={classes.tableCell}>{user.address}</TableCell>
            
            <TableCell className={classes.tableCell}>
              <Button
                 className={classes.edit}
                  onClick={() => this.edit(user)}
              >
                <EditIcon/>
              </Button>
           
              <Button
                className={classes.delete} 
                onClick={() => this.confirmDelete(user)} 
              >
                <DeleteIcon/>
              </Button>
              <Modal open={open} onClose={this.onCloseModal} center styles={{ modal: {width:"1500px" }, overlay:{ opacity: '1.0', zIndex: '5000 !important' } }}>
              <Portlet
                  {...rest}
                  className={rootClassName}
              >
               
          <div>
                <div className={classes.contentBody}>
                  <PortletHeader className={classes.header}>
                    <PortletLabel

                    title="Edit User"
                    />
                  </PortletHeader>
                  <PortletContent>
                    <form className={classes.form}>
                      <TextField
                          className={classes.textField}
                          label="First Name"
                          name="name"
                          margin="normal"
                          type="text"
                          onChange={this.onChange}
                          variant="outlined"
                          defaultValue={this.state.name}
                      /><div className={classes.fieldError}>{this.state.errors.name}</div>
                      <br/>
                      <TextField
                          className={classes.textField}
                          label="Last  Name"
                          name="name"
                          margin="normal"
                          type="text"
                        
                      /><div className={classes.fieldError}>{this.state.errors.name}</div>
                      <br/>
                      <TextField
                          className={classes.textField}
                          label="Phone"
                          name="phone"
                          margin="normal"
                          type="text"
                          onChange={this.onChange}
                          variant="outlined"
                          defaultValue={this.state.phone}
                      /><div className={classes.fieldError}>{this.state.errors.phone}</div>
                      <br/>
                                          
                      <TextField
                          className={classes.textField}
                          label="Address"
                          name="address"
                          margin="normal"
                          multiline={true}
                          rows={2}
                          rowsMax={4}
                          type="text"
                          onChange={this.onChange}
                          variant="outlined"
                          value={this.state.address}
                      /><div className={classes.fieldError}>{this.state.errors.address}</div>
                        <br/>
                        

                    </form>
                  </PortletContent>
                  <PortletFooter className={classes.portletFooter}>


                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={this.editUser}
                        className={classes.registerbtn}
                    >
                                           Edit
                    </Button>
                  </PortletFooter>
                </div></div>
              </Portlet>
            </Modal>
              
              </TableCell>
          </TableRow>

      )
    }, this);
if(this.state.redirectToReferrer){
  return(<Redirect to = {'/editphysician'}/>);
}
    return (

       <div >
        <Portlet className={rootClassName}>
          <PortletHeader className={classes.tabletop} noDivider>
          <div className={classes.row}>

<SearchInput
    className={classes.searchInput}
    placeholder="Search PFT"
    name="query"
    onChange={this.onChange}
    onClick={this.props.data(this.state.query)}

/>
<span className={classes.spacer} />

</div>

            <PortletToolbar>

            </PortletToolbar>

          </PortletHeader>
          <PerfectScrollbar>
            <PortletContent
                className={classes.portletContent}
                noPadding
            >
                
                  <div>

                  <Table>
                    <TableHead className= {classes.tableheader}>
                    <TableRow>
                        <TableCell className={classes.tableCellHead}>Name</TableCell>
                        <TableCell  className={classes.tableCellHead} >Phone</TableCell>
                       
                        <TableCell className={classes.tableCellHead} >Address</TableCell>
                        
                      
                        <TableCell className={classes.tableCellHead} >Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      {userFeed}

                    </TableBody>
                  </Table>
                  </div>
            </PortletContent>
          </PerfectScrollbar>
        </Portlet>
        </div>
    );
  }
}



export default withStyles(styles)(UsersTable);
