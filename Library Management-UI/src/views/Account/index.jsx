import React, { Component } from 'react';
import Preview from '../../layout/Preview';

import { withStyles } from '@material-ui/styles';
import styles from './styles';


 class  Account extends Component {
  render() {
      const classes = this.props;
    return (
       

<Preview title="Account">
<div >

  </div>
</Preview>

    );
  }
}


export default withStyles(styles)(Account);

