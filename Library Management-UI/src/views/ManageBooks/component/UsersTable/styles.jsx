export default theme => ({
  root: {
    fontFamily: 'Lato, sans-serif'
  },
  tableRow: {
    fontFamily: 'Lato, sans-serif',

    height: '64px',


    '&:hover': {
    fontFamily: 'Lato, sans-serif',

      backgroundColor:"#f2f2f2",

    },
  },
  tableCell: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: "300",
    fontStyle: "Normal",
    textAlign:'center',
    fontSize: "15px",
    whiteSpace: 'nowrap'
  },
  tableCellInner: {
    fontFamily: 'Lato, sans-serif',

    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    fontFamily: 'Lato, sans-serif',

    backgroundColor: theme.palette.primary.main,
    display: 'inline-flex',
    fontSize: '14px',
    fontWeight: 500,
    height: '36px',
    width: '36px'
  },
  nameText: {
    fontFamily: 'Lato, sans-serif',

    display: 'inline-block',
    marginLeft: theme.spacing.unit * 2,
    fontWeight: 500,
    cursor: 'pointer'
  },
  edit:{
    fontFamily: 'Lato, sans-serif',

   color:theme.palette.primary.main
  },
  delete:{
    fontFamily: 'Lato, sans-serif',

    color:theme.palette.primary.main
  },


  tableheader:{
    fontFamily: 'Lato, sans-serif',
  textAlign:'center',
    backgroundColor:"#e5e5e5",
    width:"100%",
    height:"50px"

  },

  tableCellHead: {
    fontFamily: 'Lato, sans-serif',
    textAlign:'center',
    fontWeight: "700",
    fontStyle: "Normal",
    fontSize: "18px",
    whiteSpace: 'nowrap'
  },
  tabletop:{
    fontFamily: 'Lato, sans-serif',

    backgroundColor:"#e5e5e5",
    width:"100%",
    height:"50px"

  },

  searchInput: {
    marginRight: theme.spacing.unit,
    marginLeft: "5px",
    borderRadius:"12px",
    width:"100px",
    height:"30px",
    backgroundColor:"#fff",
    fontFamily: 'Lato, sans-serif',

    fontWeight: "300",
    fontStyle: "Normal",
    fontSize: "16px",
  },
  header:{
    fontFamily: 'Lato, sans-serif',

    backgroundColor:'#ededed'
  },

  registerbtn:{
    fontFamily: 'Lato, sans-serif',

    backgroundColor:theme.palette.primary.main,
    borderRadius:"20px",
    width:"100px",
    color:'#fff',
    float:'right',
    marginRight:'20px',
    '&:hover': {
      fontFamily: 'Lato, sans-serif',

      color:"#000",

    },
  },

  textField:{
    fontFamily: 'Lato, sans-serif',

    width:"100%"
  },

  row: {
    fontFamily: 'Lato, sans-serif',

    height: '42px',
    width:"100%",
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing.unit
  },
  spacer: {
    fontFamily: 'Lato, sans-serif',

    flexGrow: 1
  },

  fieldError: {
    fontFamily: 'Lato, sans-serif',

    color: theme.palette.danger.main,
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit
  }
});