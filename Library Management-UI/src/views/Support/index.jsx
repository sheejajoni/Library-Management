import React, { Component } from 'react';
import Preview from '../../layout/Preview';
import styles from './styles';
import { withStyles } from '@material-ui/styles';


 class Support extends Component {
  render() {
      const classes = this.props;
    return (
    
<Preview title="Support">
<div className={classes.root} >

 
  </div>
</Preview>

    );
  }
}

export default withStyles(styles)(Support);