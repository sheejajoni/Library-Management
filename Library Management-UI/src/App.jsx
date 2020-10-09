import React, { Component } from 'react';
import { Router,HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
// Routes
import Routes from './Routes';
import theme from './theme';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme= {theme} >
        <HashRouter history={browserHistory}>
          <Routes />
        </HashRouter>
        </ThemeProvider>
    );
  }
}