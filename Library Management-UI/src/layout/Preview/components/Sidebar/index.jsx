import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {PostData} from 'services/PostData/PostData';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { css } from 'glamor';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Typography
} from '@material-ui/core';
import dashcont from 'data/data';
// Material icons
import {
    DashboardOutlined as DashboardIcon,
    PeopleOutlined as PeopleIcon,
    ShoppingBasketOutlined as ShoppingBasketIcon,
    LockOpenOutlined as LockOpenIcon,
    TextFields as TextFieldsIcon,
    ImageOutlined as ImageIcon,
    InfoOutlined as InfoIcon,
    AccountBoxOutlined as AccountBoxIcon,
    SettingsOutlined as SettingsIcon,
    Devices as DeviceIcon,
    DevicesOther as OtherDeviceIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';
import './style.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarmenu:[],

            redirectToReferrer: false,
            books:'',
	    booklink:'',
	    users:'',
	    userlink:'',
	    bookissuelink:'',
	    bookreturnlink:'',
                    };

        this.getSubmenu = this.getSubmenu.bind(this);

        this.viewMeasurement=this.viewMeasurement.bind(this);
        this.viewStimulation=this.viewStimulation.bind(this);
        this.viewTherapist=this.viewTherapist.bind(this);
        this.viewDevice=this.viewDevice.bind(this);
    }
    componentWillMount() {

        if(sessionStorage.getItem("sessionId")){
            console.log("Done");
            this.getSubmenu();
        }

        else{
            this.setState({redirectToReferrer: true});
        }


    }
    viewMeasurement()
    {

        localStorage.setItem('mcustomerid', "");
        localStorage.setItem('mpatientid', "");
        localStorage.setItem('muserid', "");

    }
    viewStimulation()
    {

        localStorage.setItem('scustomerid', "");
        localStorage.setItem('spatientid', "");
        localStorage.setItem('suserid', "");

    }

    viewTherapist()
    {

        localStorage.setItem('Tcustomerid', "");


    }
    viewDevice()
    {

        localStorage.setItem('Dcustomerid', "");


    }

    getSubmenu() {


                        this.setState({users: "Users"});
                        this.setState({userlink: '/userlist'});

			this.setState({books: "Books"});
                        this.setState({booklink: '/booklist'});

			this.setState({bookissue: "Issue Books"});
                        this.setState({bookissuelink: '/bookissue'});

			this.setState({bookreturn: "Return Books"});
                        this.setState({bookreturnlink: '/bookreturn'});
                    

                    


    }


    render() {
        const { classes, className } = this.props;

        const rootClassName = classNames(classes.root, className);

        return (
            <nav className={rootClassName}  style={{width:'210px'}}>


                <List
                    component="div"
                    disablePadding
                >

                   
                    <ListItem
                        activeClassName={classes.activeListItem}
                        style={{paddingTop:'20px'}}
                        className={classes.listItem}
                        component={NavLink}
                        to={this.state.userlink}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <img
                                alt="Empty list"
                                className={classes.listItemIcon}
                                src="/images/companies/companies.png"
                            />
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary={this.state.users}
                        />
                    </ListItem>

                    <ListItem
                        activeClassName={classes.activeListItem}
                        className={classes.listItem}
                        component={NavLink}
                        to={this.state.booklink}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <img
                                alt="Empty list"
                                className={classes.listItemIcon}
                                src="/images/Users/users.png"
                            />
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary={this.state.books}
                            onClick={this.viewTherapist}
                        />
                    </ListItem>

		 <ListItem
                        activeClassName={classes.activeListItem}
                        className={classes.listItem}
                        component={NavLink}
                        to={this.state.bookissuelink}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <img
                                alt="Empty list"
                                className={classes.listItemIcon}
                                src="/images/Users/users.png"
                            />
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary={this.state.bookissue}
                            onClick={this.viewTherapist}
                        />
                    </ListItem>

 			<ListItem
                        activeClassName={classes.activeListItem}
                        className={classes.listItem}
                        component={NavLink}
                        to={this.state.bookreturnlink}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <img
                                alt="Empty list"
                                className={classes.listItemIcon}
                                src="/images/Users/users.png"
                            />
                        </ListItemIcon>
                        <ListItemText
                            classes={{ primary: classes.listItemText }}
                            primary={this.state.bookreturn}
                            onClick={this.viewTherapist}
                        />
                    </ListItem>


                    </List>
            </nav>
        );
    }
}

Sidebar.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
