export default theme => ({
    root: {
      fontFamily: 'Lato, sans-serif'
    },
    row: {
      fontFamily: 'Lato, sans-serif',
      height: '42px',
      display: 'flex',
      alignItems: 'center',
      marginTop: theme.spacing.unit
    },
    spacer: {
      fontFamily: 'Lato, sans-serif',
      flexGrow: 1
    },
    deleteButton: {
      fontFamily: 'Lato, sans-serif',
      color: theme.palette.danger.main,
      marginRight: theme.spacing.unit
    },
    importButton: {
      fontFamily: 'Lato, sans-serif',
      marginRight: theme.spacing.unit
    },
    importIcon: {
      fontFamily: 'Lato, sans-serif',
      marginRight: theme.spacing.unit
    },
    exportButton: {
      fontFamily: 'Lato, sans-serif',
      marginRight: theme.spacing.unit
    },
    exportIcon: {
      fontFamily: 'Lato, sans-serif',
      marginRight: theme.spacing.unit
    },
    searchInput: {
      marginRight: theme.spacing.unit,
      marginLeft: "5px",
      borderRadius:"12px",
      width:"100px",
      height:"30px",
      backgroundColor:"#fff",
      fontFamily: 'Lato, sans-serif',
      fontWeight: "600",
      fontStyle: "Normal",
      fontSize: "16px"
  
    },
  
    addButton:{
      fontFamily: 'Lato, sans-serif',
      borderRadius:"20px",
      backgroundColor:"#1761a8",
  
      color:"#fff",
      marginRight:"10px",
      outline:"none",
  
      '&:hover': {
        fontFamily: 'Lato, sans-serif',
       ouline:"none",
        borderRadius:"20px",
        backgroundColor:theme.palette.primary.main,
  
        color:"#fff",
        marginRight:"10px",
        outline:"none",
        },
      '&:click': {
        fontFamily: 'Lato, sans-serif',
        ouline: "none",
      }
    },
  
    arrow:{
      fontFamily: 'Lato, sans-serif',
      color:"#3277b2",
      width:"10px",
      height:"10px"
    },
    header:{
      fontFamily: 'Lato, sans-serif',
      backgroundColor:'#ededed'
    },
  
    registerbtn:{
      fontFamily: 'Lato, sans-serif',
      backgroundColor:theme.palette.primary.main,
      borderRadius:"20px",
      color:'#fff',
      float:'center',
      marginTop: '20px',
    },
  
    textField:{
      fontFamily: 'Lato, sans-serif',
      width:"50%",
      
    
    },
    textField1:{
      fontFamily: 'Lato, sans-serif',
      width:"24.4%",
      marginRight: '30px',
      
    
    },
  
  
    plus:{
      fontFamily: 'Lato, sans-serif',
  
      color:"#fff",
      width:"20px",
      height:"20px"
    },
    fieldError: {
      fontFamily: 'Lato, sans-serif',
  
      color: theme.palette.danger.main,
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit
    }
  });