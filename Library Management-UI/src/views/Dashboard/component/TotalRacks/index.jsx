import React, { Component } from 'react';
import {PostData} from '../../../../services/PostData/PostData';
// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
  DevicesOther as DeviceIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from '../../../../components';

// Component styles
import styles from './styles';
import dashcont from 'data/data';
class TotalRacks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countvalue:[],
      searchval: '',
      activeval:'',
      redirectToReferrer: false,

    };

    
  }


 

  componentDidMount() {

    const { limit } = this.state;
    
    if(sessionStorage.getItem("sessionId")){
      console.log("Done");

    }

    else{
      this.setState({redirectToReferrer: true});
    }
  }
 render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);
  
    return (
        <Paper
            {...rest}
            className={rootClassName}
            style = {{borderRadius:"5%"}}
        >
           
          <div>
          <div className={classes.content}>
            <div className={classes.details}>
              <Typography
                  className={classes.value}
                  variant="h3"
              >
                2
                
              </Typography>
              <Typography
                  className={classes.title}
                  variant="body2"
              >
            New racks
              </Typography>

            </div>
            <div className={classes.iconWrapper}>
              <img
                  alt="Empty list"
                  className={classes.listItemIcon}
                  src="/images/devices.png"
              />
            </div>
          </div>
          <div className={classes.footer}>
            <Typography
                className={classes.difference}
                variant="body2"
            >
             Total Racks
            </Typography>
            <Typography
                className={classes.caption}
                variant="caption"
            >
              5
            </Typography>
          </div></div>
        </Paper>
    );
  }
}

TotalRacks.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TotalRacks);
