import React, { Component } from 'react';
import Preview from '../../layout/Preview';
import LogouT from './component/logout';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import PropTypes from 'prop-types';
 class  Logout extends Component {
  render() {
      const classes = this.props;
    return (
       

<Preview title = "Logout">
<div className={classes.root}>
    <LogouT/>
</div>
</Preview>



      
    );
  }
}
Logout.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
  };
export default withStyles(styles)(Logout);