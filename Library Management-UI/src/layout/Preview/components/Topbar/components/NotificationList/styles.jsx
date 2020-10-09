export default theme => ({
  root: {
    fontFamily: 'Lato, sans-serif',
    width: '350px',
    maxWidth: '100%'
  },
  header: {
    backgroundColor: theme.palette.background.default,
    backgroundImage: 'url("/images/connected_world.svg")',
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    paddingBottom: '34px',
    paddingLeft: '20px',
    paddingRight: '20px',
    fontFamily: 'Lato, sans-serif',
    paddingTop: '34px'
  },
  subtitle: {
    fontFamily: 'Lato, sans-serif',
    color: theme.palette.text.secondary
  },
  content: {},
  listItem: {
    fontFamily: 'Lato, sans-serif',
    cursor: 'pointer',
    '&:hover': {
      fontFamily: 'Lato, sans-serif',
      backgroundColor: theme.palette.background.default
    }
  },
  listItemIcon: {
    fontFamily: 'Lato, sans-serif',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: '10px',
    borderRadius: '50%',
    marginRight: theme.spacing.unit * 2
  },
  listItemTextSecondary: {
    fontFamily: 'Lato, sans-serif',
    marignTop: '4px',
    color: theme.palette.text.secondary
  },
  arrowForward: {
    fontFamily: 'Lato, sans-serif',
    color: theme.palette.text.secondary,
    height: '16px',
    width: '16px'
  },
  footer: {
    fontFamily: 'Lato, sans-serif',
    paddingBottom: theme.spacing.unit,
    display: 'flex',
    justifyContent: 'center'
  },
  empty: {
    fontFamily: 'Lato, sans-serif',
    textAlign: 'center',
    padding: theme.spacing.unit * 3
  },
  emptyImageWrapper: {
    fontFamily: 'Lato, sans-serif',
    marginBottom: theme.spacing.unit * 3
  },
  emptyImage: {
    fontFamily: 'Lato, sans-serif',
    width: '240px',
    maxWidth: '100%',
    height: 'auto'
  }
});
