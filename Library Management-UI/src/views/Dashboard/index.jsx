import React, { Component } from 'react';
import Preview from '../../layout/Preview';
import Page from './component';
import classNames from 'classnames';
import styles from './styles';
import PropTypes from 'prop-types';
import {Grid,Typography }from '@material-ui/core';
import { withStyles } from '@material-ui/styles';


// Custom components
import {
  Devices
 
} from './component';


 class  Dashboard extends Component {
  render() {
      const classes = this.props;
    return (
       

<Preview title = "Dashboard">
<div className={classes.root} >
<Grid
                container
                spacing={4}
            >
<Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                >

              
         <Books/>
<Users/>   
<Racks/>
<NewBooks/>


             
   </Grid>
      </Grid> 
 
  </div>
</Preview>

    );
  }
}


export default withStyles(styles)(Dashboard);
