import React, { Component } from 'react';
import {PostData} from 'services/PostData/PostData';

import { DisplayMode, SearchInput } from 'components';
import {Redirect} from 'react-router-dom';

import ReactPaginate from 'react-paginate';


// Externals
import classNames from 'classnames';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { css } from 'glamor'
// Material helpers
import { withStyles } from '@material-ui/core';

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
import { getOrders } from 'services/order';

import Modal from 'react-responsive-modal';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconButton, TextField,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';
import dashcont from 'data/data';
// Material icons
import {
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon,
    Edit as EditIcon,
    Delete as DeleteIcon
} from '@material-ui/icons';
import { Typography } from '@material-ui/core';
// Shared components
import {
    Portlet,
    PortletHeader,
    PortletFooter,
    PortletLabel,
    PortletToolbar,
    PortletContent,
    Status
} from 'components';

// Component styles
import styles from './styles';
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const statusColors = {
  delivered: 'success',
  pending: 'info',
  refund: 'danger'
};

class CustomerTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      searchval: '',
      redirectToReferrer: false,
      offset: 0,
      books: [],
      perPage: 10,
      currentPage: 0,
     

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

  

  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        responsiveScroll: {height: '400px' 

        }
      },

      MUIDataTableBodyCell: {
        root: {
          tableLayout: 'fixed',
          backgroundColor: "#fff",
          fontFamily: "Lato, sans-serif",
          padding:'10px 10px 10px 5px',
          fontSize: "16px",
          fontWeight: "normal",
          fontStretch: "normal",
          fontStyle: "normal",
          textAlign:'left',
          color:'#232121',
          whiteSpace: 'wrap'
        }
      },

      MUIDataTableHeadCell: {

        root: {

          fontFamily: "Lato, sans-serif",
          padding:'10px 10px 10px 5px',
          textAlign:'left',
          fontWeight: "700",
          fontStyle: "Normal",
          fontSize: "18px",
          whiteSpace: 'wrap',

        },
        fixedHeaderCommon:{
          backgroundColor: "#e5e5e5",


        },
        data:{
          textAlign:'left'
        }
      },

      MuiTableCell:{
        head:{
          color:'#232121',
          fontFamily: "Lato, sans-serif",
        },
        footer:{
          backgroundColor: "#e5e5e5"
        }
      },
      MUIDataTableToolbar:{
        root:{

        },
        actions:{
          backgroundColor: "#e5e5e5"
        },

      },
      MuiToolbar:{
        gutters:{
          backgroundColor: "#e5e5e5"
        }
      }

    }

  })

  render() {
    const { open } = this.state;
    const { classes, className, selectedUsers,...rest } = this.props;
    const { values } = this.state;
    const rootClassName = classNames(classes.root, className);

    

    const datas = this.state.books;



    const columns = [

      {
        name: "bookid",
        label: "Book Name",
        viewColumns: false,
        options: {
          filter: true,
          sort: true,

          }
      },
      {
        name: "number",
        label: "Number",
        viewColumns: false,
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "Author",
        label: "Author",
        viewColumns: false,
        options: {
          filter: true,
          sort: true,
          
        }
      },
      {
        name: "Publisher",
        label: "Publisher",
        viewColumns: false,
        options: {
          filter: true,
          sort: true,
        }
      },
      


    ];
    const options = {
      selectableRows: "none",
      onRowsSelect: (rowsSelected, allRows) => {
      },
      print:false,
      download:false,
      filter:false,
      viewColumns: false,
      search:false,
      rowHover:true,
      responsive: "scroll",
      fixedHeader: true,
      rowsPerPageOptions:[5,10,15,20,25],
      textLabels: {
        body: {
          noMatch: "No Books Added"
        }}

    };

    return (


        <Portlet className={rootClassName}> <h3>new Added Books </h3>

          <PerfectScrollbar>
            <PortletContent
                className={classes.portletContent}
                noPadding
            >
              <div style={{display: 'table', tableLayout:'fixed', width:'100%'}}>

                <MuiThemeProvider theme={this.getMuiTheme()} >

                  <MUIDataTable
                      data={datas}
                      columns={columns}
                      options={options}

                  />
                </MuiThemeProvider>

              </div>

            </PortletContent>
          </PerfectScrollbar>
        </Portlet>
    );
  }
}
CustomerTable.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerTable);
