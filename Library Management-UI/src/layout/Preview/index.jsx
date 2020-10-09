import React, { Component, Fragment } from 'react';
import {Redirect} from 'react-router-dom';
// Externals
import classNames from 'classnames';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import { Sidebar, Topbar, Footer } from './components';

// Component styles
import styles from './styles';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        const isMobile = ['xs', 'sm', 'md'].includes(props.width);

        this.state = {
            isOpen: !isMobile,
            redirectToReferrer: false
        };
    }

    componentWillMount() {

        if(sessionStorage.getItem("sessionId")){
            console.log("Done");
        }

        else{
            this.setState({redirectToReferrer: true});
        }


    }

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    handleToggleOpen = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
    };

    render() {
        const { classes, width, title, children } = this.props;
        const { isOpen } = this.state;

        const isMobile = ['xs', 'sm', 'md'].includes(width);
        const shiftTopbar = isOpen && !isMobile;
        const shiftContent = isOpen && !isMobile;

        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/login'}/>)
        }

        return (


            <Fragment>
                <div style={{width:'100%', height:'20px'}}></div>
                <Topbar
                    className={classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
          })}
                    isSidebarOpen={isOpen}
                    onToggleSidebar={this.handleToggleOpen}
                    title={title}
                />
                <Drawer
                    anchor = "left"
                    classes={{ paper: classes.drawerPaper }}
                    onClose={this.handleClose}
                    open={isOpen}
                    variant={isMobile ? 'temporary' : 'persistent'}
                >
                    <Sidebar className={classes.sidebar} />
                </Drawer>


                <main
                    className={classNames(classes.content, {
            [classes.contentShift]: shiftContent
          })}
                >
                    {children}
                    <Footer />
                </main>





            </Fragment>
        );
    }
}

Dashboard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    width: PropTypes.string.isRequired
};

export default compose(
    withStyles(styles),
    withWidth()
)(Dashboard);
