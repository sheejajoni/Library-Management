import { blue } from "@material-ui/core/colors";

export default theme => ({
  root: {
    backgroundColor: blue,
    height: '100vh'
  },
  grid: {
    height: '100%'
  },
  quoteWrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.common.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/img.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.common.white,
    fontWeight: 500
  },
  name: {
    marginTop: theme.spacing.unit * 3,
    color: theme.palette.common.white
  },
  bio: {
    color: theme.palette.common.white
  },
  contentWrapper: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 5,
    paddingBototm: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  backButton: {},
  logoImage: {
    marginLeft: theme.spacing.unit * 4
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom: '125px',
    flexBasis: '700px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  },
  title: {
    marginTop: theme.spacing.unit * 3
  },
  subtitle: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 0.5
  },
  facebookButton: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  facebookIcon: {
    marginRight: theme.spacing.unit
  },
  googleButton: {
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  googleIcon: {
    marginRight: theme.spacing.unit
  },
  sugestion: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  fields: {
    marginTop: theme.spacing.unit * 2
  },
  textField: {
    width: '100%',
    '& + & ': {
      marginTop: theme.spacing.unit * 2
    }
  },
  policy: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  policyText: {
    display: 'inline',
    color: theme.palette.text.secondary
  },
  policyUrl: {
    color: theme.palette.text.primary,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main
    }
  },
  progress: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  signInButton: {
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  signUp: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  },
  signUpUrl: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.primary.main
    }
  },
  fieldError: {
  
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit
  },
  submitError: {
    
    alignText: 'center',
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2
  },
  image: {
    
    marginTop: '30px',
    maxWidth: '50%',
    width: '554px',
    marginLeft: '100px'
  }
});