export default theme => ({
  topbar: {
    fontFamily: 'Lato, sans-serif',
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
    height:'100px',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  topbarShift: {
    fontFamily: 'Lato, sans-serif',
    width: "100%"
  },
  drawerPaper: {
    fontFamily: 'Lato, sans-serif',
    zIndex: 1,
    width: '210px',
    marginTop:'98px',
    border:'0'
  },
  sidebar: {
    fontFamily: 'Lato, sans-serif',
    width: '270px'
  },
  content: {
    fontFamily: 'Lato, sans-serif',
    marginTop: '80px',
    backgroundColor: "#f8fcfd",
    transition: theme.transitions.create('margin', {
      fontFamily: 'Lato, sans-serif',
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    fontFamily: 'Lato, sans-serif',
    marginLeft: '270px'
  }

});
