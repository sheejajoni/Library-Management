export default theme => ({
    root: {
      fontFamily: 'Lato, sans-serif'
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
  
  
  
    fieldError: {
      fontFamily: 'Lato, sans-serif',
  
      color: theme.palette.danger.main,
      marginBottom: theme.spacing.unit * 2,
      marginTop: theme.spacing.unit
    }
  });