export default theme => ({
  root: {
    fontFamily: 'Lato, sans-serif'
  },
  portletContent: {
    fontFamily: 'Lato, sans-serif',

    minWidth: '600px'
  },
    fontFamily: 'Lato, sans-serif',
    newEntryButton: {
    marginLeft: theme.spacing.unit
  },
  progressWrapper: {
    fontFamily: 'Lato, sans-serif',

    padding: theme.spacing.unit * 3,
    display: 'flex',
    justifyContent: 'center'
  },
  tableRow: {
    fontFamily: 'Lato, sans-serif',

    cursor: 'pointer',
    '&:hover': {
    fontFamily: 'Lato, sans-serif',

      backgroundColor:"#f2f2f2"

    }
  },
  customerCell: {
    fontFamily: 'Lato, sans-serif',

    maxWidth: '200px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    fontWeight: 500
  },

  portletTitle: {
    fontSize:"20px",
    color:"#083a65",
    fontFamily: 'Lato, sans-serif',
   
    fontWeight: "600",
    fontStyle: "Bold",
    justifyContent: 'left'
  },

  tableheader:{
    fontFamily: 'Lato, sans-serif',

    backgroundColor:"#e5e5e5",
    width:"100%",
    height:"50px"

  },

  tableCell: {
    fontFamily: 'Lato, sans-serif',
   textAlign:'center',
    fontWeight: "300",
    fontStyle: "Normal",
    fontSize: "16px",
    whiteSpace: 'nowrap'
  },

  tableCellHead: {
    fontFamily: 'Lato, sans-serif',
    textAlign:'center',
    fontWeight: "700",
    fontStyle: "Normal",
    fontSize: "18px",
    whiteSpace: 'nowrap'
  },
  statusWrapper: {
    fontFamily: 'Lato, sans-serif',

    display: 'flex',
    alignItems: 'center'
  },
  status: {
    fontFamily: 'Lato, sans-serif',

    marginRight: theme.spacing.unit
  }
});
