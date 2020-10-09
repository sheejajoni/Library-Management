export default theme => ({
  root: {
    fontFamily: 'Lato, sans-serif'

  },
  content: {
    alignItems: 'center',
    padding: theme.spacing.unit * 2,
    display: 'flex',
    fontFamily: 'Lato, sans-serif',
   
    fontWeight: "600",
    fontStyle: "Normal",
    fontSize: "16px"
  },
  title: {
    color: theme.palette.text.secondary,
    fontWeight: 700,
    fontFamily: 'Lato, sans-serif',
    
    fontStyle: "Normal",
    fontSize: "16px"
  },
  value: {
    fontFamily: 'Lato, sans-serif',

    marginBottom: theme.spacing.unit,
    fontSize:"30px"
  },
  iconWrapper: {
    fontFamily: 'Lato, sans-serif',

    alignItems: 'center',

    borderRadius: '50%',
    display: 'inline-flex',
    height: '4rem',
    justifyContent: 'center',
    marginLeft: 'auto',
    width: '2rem'
  },
  icon: {
    fontFamily: 'Lato, sans-serif',

    color: theme.palette.common.white,
    fontSize: '2rem',
    height: '2rem',
    width: '2rem'
  },
  footer: {
    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    width:"100%",
    height:"35px",
    backgroundColor: "#188ae2",
    alignItems: 'center',
    fontFamily: 'Lato, sans-serif',
    
    fontWeight: "600",
    fontStyle: "Normal",
    fontSize: "16px",
    padding: theme.spacing.unit * 3

  },
  difference: {
    alignItems: 'center',
    color: "#fff",
    display: 'inline-flex',
    fontWeight: 700,
    fontFamily: 'Lato, sans-serif',
    
    fontStyle: "Normal",
    fontSize: "16px",
  },
  caption: {
    marginLeft: theme.spacing.unit,
    alignItems: 'center',
    color: "#fff",
    display: 'inline-flex',
    fontFamily: 'Lato, sans-serif',
    
    fontWeight: "600",
    fontStyle: "Normal",
    fontSize: "16px"
  }
});
