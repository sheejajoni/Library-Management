export default theme => ({
  root: {
    background: 'linear-gradient(to bottom, #037ddb, #17347a)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width:'110px',

fontFamily: 'Lato, sans-serif',


  },

  dashboard: {
    fontFamily: 'Lato',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.39',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: '#0575d0',
    background: '#fff',
    width: '100%',
    height: '80px',
  },


  logoWrapper: {
    fontFamily: 'Lato, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  profile: {
    fontFamily: 'Lato, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    fontFamily: 'Lato, sans-serif',
    width: '100px',
    height: '100px'
  },
  nameText: {
    fontFamily: 'Lato, sans-serif',
    marginTop: theme.spacing.unit * 2
  },
  bioText: {},
  profileDivider: {
    fontFamily: 'Lato, sans-serif',
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  listSubheader: {
    fontFamily: 'Lato, sans-serif',
    color: '#fff'
  },
  listItem: {
    cursor: 'pointer',
    fontFamily: 'Lato, sans-serif',
     marginBottom:'30px',
   fontSize: '25px',
fontWeight: 'normal',
fontStretch: 'normal',
fontStyle: 'normal',
lineHeight: '1.39',
letterSpacing: 'normal',
textAlign: 'left',
color: '#ffffff',
    '&:hover': {
      backgroundColor: "#62a1dc",
      fontFamily: 'Lato, sans-serif',
      fontWeight: "400",
      fontStyle: "Normal",
      textDecoration: "none",
      borderLeft: `4px solid #62a1dc`,
      borderRadius: '10px',
      '& $listItemIcon': {
        fontFamily: 'Lato, sans-serif',
        color: "#fff",
        marginLeft: '-4px'
      },
      '& $listItemText': {
        fontFamily: 'Lato, sans-serif',
        color: "#fff",

      }
    },
    '& + &': {
      fontFamily: 'Lato, sans-serif',
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    fontFamily: 'Lato, sans-serif',
    fontWeight: "600",
    fontStyle: "Normal",
    fontSize: "16px",

    borderLeft: `4px solid #62a1dc`,

    borderRadius: '10px',
    backgroundColor: "#62a1dc",
    '& $listItemText': {
      fontFamily: 'Lato, sans-serif',
      color: "#fff"
    },
    '& $listItemIcon': {
      color: theme.palette.primary.main,
      fontFamily: 'Lato, sans-serif',
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    fontFamily: 'Lato, sans-serif',
    marginRight: "10px",
    color: '#fff'
  },
  listItemText: {
    fontWeight: 500,
    color: '#fff',
    fontSize: "18px",
    fontFamily: 'Lato, sans-serif',
    fontWeight: "600",
    fontStyle: "Normal",

  },
  listDivider: {
    fontFamily: 'Lato, sans-serif',
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  }
});
