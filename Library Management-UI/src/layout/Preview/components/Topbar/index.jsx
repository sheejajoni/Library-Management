import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { css } from 'glamor';
import { Link, NavLink } from 'react-router-dom';
import { DisplayMode, SearchInput } from 'components';
import { AppBar,  Hidden } from '@material-ui/core';
import { Sidebar} from './components';



// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import {PostData} from 'services/PostData/PostData';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
    Badge,
    IconButton,
    Popover,
    Toolbar,
    Tooltip,
    Avatar,
    Typography
} from '@material-ui/core';


// Material icons
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    NotificationsOutlined as NotificationsIcon,
    Input as InputIcon
} from '@material-ui/icons';

// Shared services
import { getNotifications } from 'services/notification';

// Custom components
import { NotificationList } from './components';
import { Router, Route } from 'react-router'


import {  TextField,Circularprogress,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';

import {
    Button,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,

    TableSortLabel
} from '@material-ui/core';

import {
    Portlet,
    PortletHeader,
    PortletLabel,
    PortletToolbar,
    PortletContent,
    PortletFooter,
    Status
} from 'components';

import Modal from 'react-responsive-modal';


// Component styles
import styles from './styles';




class Topbar extends Component {
  signal = true;

  state = {

  };

  constructor(){
    super();
    this.state = {
      notifications: [],
      notificationsLimit: 4,
      notificationsCount: 0,
      notificationsEl: null,
      file: '',
      photoname: '',imagePreviewUrl: '',
      filesize: '',
      filetype :'',
      name: '',
      lang: 'en',
      roleid: '',
      customerid: '',
      userid: '',
      photo: '',
      opensidebar:'',
      open: false,
      imageurl:'',
      mainimageurl:'',
      enabledelete:true ,
      enablesetmsg:false,
      enablechangemsg:true,
      confirm:true
    };
    this.handleFileSelect= this.handleFileSelect.bind(this);
    this.getPhotoName = this.getPhotoName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTenant = this.getTenant.bind(this);
    this.opensidebar = this.opensidebar.bind(this);
    this.uploadPic = this.uploadPic.bind(this);
    this.setPic = this.setPic.bind(this);
    this.removePic = this.removePic.bind(this);


  };


  async getNotifications() {
    try {
      const { notificationsLimit } = this.state;

      const { notifications, notificationsCount } = await getNotifications(
          notificationsLimit
      );

      if (this.signal) {
        this.setState({
          notifications,
          notificationsCount
        });
      }
    } catch (error) {
      return;
    }
  }
  componentWillMount() {



    if(sessionStorage.getItem("sessionId")){

      console.log("Done");
     // this.getTenant();
      this.state.name = localStorage.getItem('name');
      this.state.photo = localStorage.getItem('photo');
      this.state.imageurl = localStorage.getItem('imageurl');
      this.state.mainimageurl = localStorage.getItem('mainimageurl');

      //alert("Name"+localStorage.getItem('name'));


      if(this.state.photo == "") {
        this.state.enabledelete = true;
        this.state.enablesetmsg = false;
        this.state.enablechangemsg = true;
      }

      else {
        this.state.enabledelete = false;
        this.state.enablesetmsg = true;
        this.state.enablechangemsg = false;
      }
    }

    else {
      this.setState({redirectToReferrer: true});
    }



  }


  setPic() {
    this.onOpenModal();
  }

  removePic() {
    var token = sessionStorage.getItem('userId');
    token = token.replace(/['"]+/g, '');
    //alert("myid"+token);
    this.state.userid= token;

    var token1 = sessionStorage.getItem('roleId');
    token1 = token1.replace(/['"]+/g, '');
    //alert("myid"+token);
    this.state.roleid= token1;

    this.state.photoname = "";

    localStorage.setItem('photo',"");
    localStorage.setItem("imageurl","");
    localStorage.setItem("mainimageurl","");


    PostData('photoupload.php',this.state).then((result) => {
      let responseJson = result;
      //alert("tenant"+responseJson.tenant[0].email);

      //this.setState({email:responseJson.tenant[0].email})
      //this.setState({name:responseJson.tenant[0].name})
      //alert("alert"+responseJson.status);
      if(responseJson.status ==="success\r\n") {
        this.setState({enabledelete:true});
        this.state.enablesetmsg = false;
        this.state.enablechangemsg = true;

        this.onCloseModal();

        this.setState({imageurl:""});

        this.setState({mainimageurl:""});

        toast.configure();
        // toast("Invalid Login !");
        toast("Profile Picture removed successfully.", {
          position: toast.POSITION.TOP_CENTER,
          className: css({
            background: "#007bff !important",
            color: "#F0FFF0"
          })
        });

      }




    });

  }


  onOpenModal = () => {

//alert(this.state.enabledelete);

    this.setState({ open: true });

  };

  onCloseModal = () => {

    this.setState({ open: false });

    if(localStorage.getItem("mainimageurl")=="") {
      this.setState({imageurl:""});
      localStorage.setItem("imageurl","");
    }

  };



  opensidebar()
  {
    this.props.onSelectMenu(true);
  }




  getTenant() {

    PostData('getTenantDetails.php',this.state).then((result) => {
      let responseJson = result;
      //alert("tenant"+responseJson.tenant[0].email);

      //this.setState({email:responseJson.tenant[0].email})

      if(responseJson.session == "Session Expired")
      {
        /*toast.configure();
        // toast("Invalid Login !");
        toast("Session Expired. Please login again", {
          position: toast.POSITION.TOP_RIGHT,
          className: css({
            background: "#007bff !important",
            color:"#FFF"
          })
        });*/
      }
      else {
        this.setState({name: responseJson.tenant[0].name})

      }

    });
  }


  changeLang = () => {
    this.setState(state => ({ lang: state.lang === "en" ? "fr" : "en" }));
    localStorage.setItem('language',this.state.lang );
    //alert(localStorage.getItem('language'));


  };

  componentDidMount() {
    this.signal = true;
    this.getNotifications();

  }
  handleFileSelect = (e) => {
    e.preventDefault();
    this.fileSelector.click();

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({imagePreviewUrl: e.target.result});
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }


  uploadPic() {

    this.setState({mainimageurl:"http://178.128.165.237/php/maple/photos/"+this.state.photo});
    localStorage.setItem("mainimageurl","http://178.128.165.237/php/maple/photos/"+this.state.photo);
    this.setState({enabledelete:false});
    this.state.enablesetmsg = true;
    this.state.enablechangemsg = false;

    toast.configure();
    // toast("Invalid Login !");
    toast("Profile Picture updated successfully.", {
      position: toast.POSITION.TOP_CENTER,
      className: css({
        background: "#007bff !important",
        color: "#F0FFF0"
      })
    });

    this.onCloseModal();

  }


  handleChange(event) {


    let files=event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    //alert("check"+event.target.files[0]._tmpIndex_);
    reader.onload = (e) => {
      this.setState({imagePreviewUrl: e.target.result});
    };
    this.state.file = event.target.files[0];
    //this.state.file = URL.createObjectURL(files[0]);
    this.state.photoname = event.target.files[0].name;
    this.state.filesize = event.target.files[0].size;
    this.state.filetype = event.target.files[0].type;

    //alert("Photo"+this.state.file);
    // alert("Name"+this.state.file.name);
    this.state.photo = this.state.file.name ;
    //alert("photoin"+this.state.photo);

    const fd = new FormData();
    fd.append('image', this.state.file, this.state.file.name);

    fetch("http://178.128.165.237/php/maple/api/photo.php", {
      method: 'POST',
      body: fd


    })


        .catch((error) => {
          //reject(error);
          console.log(error);
        });

    this.getPhotoName();

  }



  getPhotoName()
  {
    var token = sessionStorage.getItem('roleId');
    token = token.replace(/['"]+/g, '');
    //alert("myid"+token);
    this.state.roleid= token;
    PostData('photoupload.php',this.state).then((result) => {
      let responseJson = result;
      //alert("tenant"+responseJson.tenant[0].email);

      //this.setState({email:responseJson.tenant[0].email})
      //this.setState({name:responseJson.tenant[0].name})
      //alert("alert"+responseJson.status);
      if(responseJson.status ==="success\r\n")
      {
        this.setState({imageurl:"http://178.128.165.237/php/maple/photos/"+this.state.photo});

        localStorage.setItem('photo',this.state.photo);
        localStorage.setItem("imageurl","http://178.128.165.237/php/maple/photos/"+this.state.photo);
        //localStorage.setItem("mainimageurl","http://178.128.165.237/php/maple/photos/"+this.state.photo);
      }



    });
  }



  componentWillUnmount() {
    this.signal = false;
  }

  handleSignOut = () => {
    const { history } = this.props;

    localStorage.setItem('dashboard', '');

    localStorage.setItem('customers', '');

    localStorage.setItem('users', '');

    localStorage.setItem('patients', '');

    localStorage.setItem('devices', '');



    localStorage.setItem('name', '');

    localStorage.setItem('imageurl', '');

    localStorage.setItem('mainimageurl', '');

    localStorage.setItem('photo', '');

    localStorage.setItem('isAuthenticated', false);
    sessionStorage.setItem("sessionId",'');
    sessionStorage.clear();
    this.setState({redirectToReferrer: true});
    history.push('/sign-in');
  };

  handleShowNotifications = event => {
    this.setState({
      notificationsEl: event.currentTarget
    });
  };

  handleCloseNotifications = () => {
    this.setState({
      notificationsEl: null
    });
  };


  render() {
    const {
        classes,
        className,
        title,
        isSidebarOpen,
        onToggleSidebar
        } = this.props;
    const { notifications, notificationsCount, notificationsEl } = this.state;

    const rootClassName = classNames(classes.root, className);
    const showNotifications = Boolean(notificationsEl);

    const { open } = this.state;

    let url ="http://178.128.165.237/php/maple/photos/"+this.state.photo;

    return (

        <Fragment>
          <div className={rootClassName}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                  className={classes.menuButton}
                  onClick={onToggleSidebar}
                  variant="text"
              >
                {isSidebarOpen ? <img src = "/images/menu.png"  /> : <img src = "/images/menu.png" />}
              </IconButton>
              <Typography
                  className={classes.title}
                  variant="h4"
              >
                <img style = {{marginLeft:'70px'}} src = "/images/logo.png" />
              </Typography>
              <Avatar onClick={this.onOpenModal}
                      className={classes.notificationsButton}
                      id="target"
                      src={this.state.mainimageurl}

              />





              <Modal open={open} center styles={{ modal: {width:"500px", height:'300px', padding:'0px',position:'absolute', top:'150px', right:'50px'}, overlay:{ opacity: '0.9 !important', zIndex:'-1 !important'} }} showCloseIcon={false}>
                <Portlet


                >

                  <PortletHeader style={{ background: '#0575d0', paddingTop:'10px'}}>
                    <span class="headerstyle"> Profile Photo Upload </span>

                    <img
                        alt="Close Icon"
                        src="/images/cancel.png"
                        className={classes.image}
                        onClick={this.onCloseModal}
                    />

                  </PortletHeader>
                  <PortletContent style={{height:'230px', paddingTop:'30px'}}>
                    <form >
                      <Button hidden = {this.state.enabledelete} style={{float:'right', cursor:'pointer', outline:'none'}}
                              color="primary"
                              onClick={this.removePic}

                      >
                        DELETE PHOTO
                      </Button>



                      <label htmlFor='myInput' className={classes.notificationsButton} style={{paddingBottom:'20px'}}>
                        <input id="myInput" type="file" accept="image/*" style={{visibility: 'hidden',width:'1px'}} onChange={this.handleChange} />

                        <Avatar style={{width:'100px', height:'100px', marginLeft:'150px'}}
                                className={classes.notificationsButton}
                                id="target"
                                src={this.state.imageurl}

                        />

                      </label>



                      <div hidden = {this.state.enablesetmsg} className={classes.fieldError} style={{marginLeft:'100px'}}>Please set your profile picture</div>

                      <div hidden = {this.state.enablechangemsg} className={classes.fieldError} style={{marginLeft:'100px'}}>Please change your profile picture</div>

                    </form>
                  </PortletContent>
                  <PortletFooter className={classes.portletFooter} style={{height:'100px', paddingTop:'30px'}}>


                    <Button style={{float:'right'}}
                            color="primary"
                            variant="outlined"
                            onClick={this.uploadPic}

                    >
                      SAVE
                    </Button>
                    <Button style={{float:'right', marginRight:'10px'}}
                            color="primary"
                            variant="outlined"
                            onClick={this.onCloseModal}

                    >
                      CANCEL
                    </Button>
                  </PortletFooter>

                </Portlet>
              </Modal>


              <Typography
                  className={classes.title}
                  variant="text"
              >
                {this.state.name}
              </Typography>
              <Tooltip title="Log Out" arrow>
              <IconButton
                  className={classes.signOutButton}
                  onClick={this.handleSignOut}
              >
                <InputIcon />
              </IconButton>
                </Tooltip>
            </Toolbar>
          </div>
          <Popover
              anchorEl={notificationsEl}
              anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
              onClose={this.handleCloseNotifications}
              open={showNotifications}
              transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
          >


            <NotificationList
                notifications={notifications}
                onSelect={this.handleCloseNotifications}
            />
          </Popover>


        </Fragment>


    );
  }
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

export default compose(
    withRouter,
    withStyles(styles)
)(Topbar);
