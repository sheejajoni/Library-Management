export default theme => ({
  root: {
    fontFamily: 'Lato, sans-serif',
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    fontFamily: 'Lato, sans-serif',
    minHeight: 'auto',
    width: '98%',
    height:'100px'
  },
  title: {
    marginLeft: theme.spacing.unit,
    color: "#798693", fontFamily: 'Lato, sans-serif',
    fontWeight: "600",
    fontStyle: "Normal",
    fontSize: "16px"
  },
  menuButton: {
    fontFamily: 'Lato, sans-serif',
    marginLeft: '-4px'
  },
  notificationsButton: {
    fontFamily: 'Lato, sans-serif',
    marginLeft: 'auto',
    //marginRight: '20px'
      },
  avatar: {
    fontFamily: 'Lato, sans-serif',
    marginLeft: 'auto',
    marginRight: '20px',

  },

  logoWrapper: {
    fontFamily: 'Lato, sans-serif',
    display: 'flex',
    zIndex:"1500",
    justifyContent: 'left',
    alignItems: 'left',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 0
  },
  logoImage: {
    fontFamily: 'Lato, sans-serif',
    cursor: 'pointer'
  },
  logoDivider: {
    fontFamily: 'Lato, sans-serif',
    marginBottom: theme.spacing.unit * 2
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
    fontFamily: 'Lato, sans-serif',
    marginRight: theme.spacing.unit,
    marginLeft: "50px",
    borderRadius:"12px",
    width:"500px",
    height:"30px",
    backgroundColor:"#f8fcfd"
  },
  fieldError: {
    fontFamily: 'Lato, sans-serif',
    color: theme.palette.danger.main,
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit
  },



  signOutButton: {
    fontFamily: 'Lato, sans-serif',
    marginLeft: theme.spacing.unit
  }
});
