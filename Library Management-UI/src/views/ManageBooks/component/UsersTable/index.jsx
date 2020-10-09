import React, { Component } from 'react';
import {PostData} from '../../../../services/PostData/PostData';

import { DisplayMode, SearchInput } from '../../../../components';
import {Redirect} from 'react-router-dom';
import styles from './styles';
import { confirmAlert } from 'react-confirm-alert'; // Import
//import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import axios from 'axios';
// Externals
import classNames from 'classnames';
//import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { css } from 'glamor';
// Material helpers
import { withStyles } from '@material-ui/core';
//import dashcont from '../../../../data/data.json';
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
//import { getOrders } from '../../../../services/order/index';

import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IconButton, TextField,FormControl,Select,MenuItem,InputLabel } from '@material-ui/core';

import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

// Material icons
import {
    ArrowDownward as ArrowDownwardIcon,
    ArrowUpward as ArrowUpwardIcon,
    EditOutlined as EditIcon,
    DeleteOutlineOutlined as DeleteIcon
} from '@material-ui/icons';


// Shared components
import {
    Portlet,
    PortletHeader,
    PortletFooter,
    PortletLabel,
    PortletToolbar,
    PortletContent,
    Status
} from '../../../../components';
import EditBooks from '../../../EditBooks';

// Component styles



const statusColors = {
  delivered: 'success',
  pending: 'info',
  refund: 'danger'
};

class BookTable extends Component {






  constructor(props) {
    super(props);

    this.state = {
     query: '',
            books : [],
            ISBN: '',
            open: false,
            name: '',
            author: '',
            publisher: '',
            edition: '',
            price: '',
            rack: '0',
            show:false,
            resp:'',
            redirectToReferrer:false,
            fields:{},
            errors:{},
            bookid:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.editUser = this.editUser.bind(this);
    this.onChange = this.onChange.bind(this);
    this.roles = this.roles.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this); 
    this.onCloseModal = this.onCloseModal.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);

  }
  onOpenModal()  {
    console.log("openum aayi");
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  handleChange(event) {
    this.setState({roleid: event.target.value});

  }
  componentWillMount(){
    console.log(this.props.customers);
  }

  handleChange1(event) {
    this.setState({type: event.target.value});

  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});

  }
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

 editBooks() {
        
       if (this.validateForm()) {
        var uid = localStorage.getItem('userid');
        var sid = localStorage.getItem('sessionId');
        
        const s = {
	userid : uid, 
          bookid :this.state.bookid,
	isbn :this.state.ISBN,
        name:this.state.name,
       author:this.state.author,
	publisher:this.state.publisher,
      edition:this.state.edition,
	rack:this.state.rack,
	price:this.state.price
      
      };
      var self = this;
      console.log(s);
      axios.put("http://localhost/updatebook", s,{
        headers: 
            {Authorization : sid},
        }

    )
          .then((result) => {
            let responseJson = result.data;
            
    
            if(responseJson.successMessage ==="Update Details Successfully")
              {
                toast.configure();
                // toast("Invalid Login !");
                toast("Sucessfully Edited", {
                 position: toast.POSITION.TOP_RIGHT,
                 className: css({
                     background: "#0693e3 ",
                     color:"#F7FCF7"
                 })
             });
             self.setState({redirectToReferrer:true});
              }
            else
            {
              toast.configure();
             // toast("Invalid Login !");
             toast("Edit failed", {
              position: toast.POSITION.TOP_RIGHT,
              className: css({
                  background: "#007bff #0693e3",
                  color:"#F0FFF0"
              })
          });
          self.setState({redirectToReferrer:true});
          }
    
          });
        }
  
  
      }
    

   validateForm() {

        let fields = this.state;
        let errors = {};
        let formIsValid = true;
    
    
    
        if (!fields["ISBN"]) {
          formIsValid = false;
          errors["ISBN"] = "*Please enter ISBN.";
        }
        if (!fields["name"]) {
          formIsValid = false;
          errors["name"] = "*Please enter book name.";
        }
        if (!fields["author"]) {
          formIsValid = false;
          errors["author"] = "*Please enter author name.";
        }
       
        if (!fields["publisher"]) {
          formIsValid = false;
          errors["roleid"] = "*Please enter publisher name.";
        }

	if (!fields["edition"]) {
          formIsValid = false;
          errors["edition"] = "*Please enter edition date.";
        }

	if (!fields["price"]) {
          formIsValid = false;
          errors["roleid"] = "*Please enter price.";
        }

	if (!fields["rack"]) {
          formIsValid = false;
          errors["roleid"] = "*Please enter rack number.";
        }
    
        
    
    
        this.setState({
          errors: errors
        });
        return formIsValid;
    
    
      }

 
  confirmDelete(book) {
   
   confirmAlert({
      customUI: ({ onClose }) => {
      
        return (
          
            
           <div style={{background:'#1761a8', width:'400px', height:'250px', padding:'70px', color:'#fff'}}>
              <h1>Are you sure?</h1>
              <p>You want to delete this ?</p>
              <Button style={{backgroundColor:'#fff', color:'000',marginRight:'30px'}} onClick={onClose}>No</Button>
              <Button style={{backgroundColor:'#fff', color:'000'}}
                  onClick={() => {
            this.deleteBook(book);
            onClose();
          }}
              >
                Yes, Delete it!
              </Button>
            </div>
        );
      }
    });
  }







  deletebook(book) {
    var uid = book.bookid; 
        
    var s = localStorage.getItem('sessionId');
    
     var k = localStorage.getItem('userid');
   var data = {userId:k,bookid:book.bookid};
   
    axios.delete("http://localhost/deletebook", { headers: {  'Access-Control-Allow-Origin': '*',
      Authorization: s
    },data :{ userId:k,bookid:book.bookid

    }}
     
     
    )
    .then((result) => {
        let responseJson = result;
        
        this.props.getBooks();

      });
    


  }

  edit(company)
  {
    
   this.setState({bookid:book.bookid});
  this.setState({edition:book.edition});
 this.setState({ISBN:book.isbn});
    this.setState({author: book.author});
    this.setState({name: book.name});
    this.setState({publisher: book.publisher}); 
    this.setState({price: book.price});
    this.setState({rack: book.rack});  
  
}

  render() {
    //const { classes, className } = this.props;

    const { open } = this.state;
    const onCloseModal = this.onCloseModal;
    const { classes, className, selectedUsers,...rest } = this.props;
    //alert(selectedUsers);
    const { values } = this.state;
    const rootClassName = classNames(classes.root, className);    
  
    let userFeed = this.props.books.map(function (book, index) {
      return (
      <TableRow
          className={classes.tableRow}

      >
        <TableCell className={classes.tableCell}>{book.ISBN}</TableCell>
        <TableCell className={classes.tableCell}>


{book.name}

</TableCell>
<TableCell className={classes.tableCell}>


{book.author}

</TableCell>

<TableCell className={classes.tableCell}>


{book.publisher}

</TableCell>

<TableCell className={classes.tableCell}>


{book.edition}

</TableCell>

<TableCell className={classes.tableCell}>


{book.price}

</TableCell>

<TableCell className={classes.tableCell}>


{book.rack}

</TableCell>



       

            <TableCell>
              <Button
                 className={classes.edit}
                  onClick={() => this.edit(book)}
              >
                <EditIcon/>
              </Button>


              <Button
                className={classes.delete}  
                onClick={() => this.confirmDelete(book)}
              >
                <DeleteIcon/>
              </Button>
            
              
            </TableCell>
          </TableRow>

      )
    }, this);

      if(this.state.redirectToReferrerT){
      return(<Redirect to = {'/editbooks'}/>);
    }
   

    return (

        
        <Portlet className={rootClassName} >
          <PortletHeader className={classes.tabletop} noDivider >
            <div className={classes.row}>

              <SearchInput
                  className={classes.searchInput}
                  placeholder="Search Practice"
                  name="query"
                  onChange={this.onChange}
                  onClick={this.props.data(this.state.query)}

              />
              <span className={classes.spacer} />

            </div>

            <PortletToolbar>

            </PortletToolbar>

          </PortletHeader>
          <PerfectScrollbar>
            <PortletContent
                className={classes.portletContent}
                noPadding
            >
                   
          <div>
                  <Table>
                    <TableHead className= {classes.tableheader}>
             

                      <TableRow>
                        <TableCell className={classes.tableCellHead}>ISBN</TableCell>
                       
                        <TableCell className={classes.tableCellHead}>Name </TableCell>
                        <TableCell className={classes.tableCellHead}>Author </TableCell>
                     
                      
                      
                        <TableCell className={classes.tableCellHead}>Publisher</TableCell>

			<TableCell className={classes.tableCellHead}>Edition</TableCell>

			<TableCell className={classes.tableCellHead}>Price</TableCell>
			<TableCell className={classes.tableCellHead}>Rack</TableCell>
              
                       
                
                        <TableCell className={classes.tableCellHead} >Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>

                      {userFeed}

                    </TableBody>
                  </Table>
                       
                 </div>
            </PortletContent>
          </PerfectScrollbar>
        </Portlet>
    );
  }
}



export default withStyles(styles)(BookTable);
