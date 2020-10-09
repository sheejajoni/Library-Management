export default theme => ({
  root: {
    fontFamily: 'Lato, sans-serif',

    padding: theme.spacing.unit * 3
  },
  content: {
    fontFamily: 'Lato, sans-serif',

    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontFamily: 'Lato, sans-serif',
    
    color: theme.palette.text.secondary,
    fontWeight: 700
  },
  value: {
    fontFamily: 'Lato, sans-serif',

    marginTop: theme.spacing.unit
  },
  iconWrapper: {
    fontFamily: 'Lato, sans-serif',

    alignItems: 'center',
    backgroundColor: theme.palette.success.main,
    borderRadius: '50%',
    display: 'inline-flex',
    height: '4rem',
    justifyContent: 'center',
    marginLeft: 'auto',
    width: '4rem'
  },
  icon: {
    fontFamily: 'Lato, sans-serif',

    color: theme.palette.common.white,
    fontSize: '2rem',
    height: '2rem',
    width: '2rem'
  },
  footer: {
    fontFamily: 'Lato, sans-serif',

    marginTop: theme.spacing.unit * 2,
    display: 'flex',
    alignItems: 'center'
  },
  difference: {
    fontFamily: 'Lato, sans-serif',

    alignItems: 'center',
    color: theme.palette.success.dark,
    display: 'inline-flex',
    fontWeight: 700
  },
  caption: {
    fontFamily: 'Lato, sans-serif',

    marginLeft: theme.spacing.unit
  }
});
