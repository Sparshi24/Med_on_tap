import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
const useStyles = ((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 0),
    },
 }));

 class Hos2 extends Component
  {
  constructor()
{
    super();
    this.state={
     
        st:false
    }
}

handleLogin = () =>  {

    toast("Welcome")

}

handleLogin1 = () =>  {

  toast("Welcome");}



handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })   
}

    render()
    {
        const {classes} = this.props
        return (
           <div>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="mot.png"  width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
     EDIT DETAILS
    </Typography>

<div className={classes.form} noValidate>


                  
<Button onClick={this.handleLogin}  className={classes.submit}><Link href="Hos3" to ="/Hos3"> For COVID-19 </Link></Button> <ToastContainer />

<Button onClick={this.handleLogin1}  className={classes.submit}><Link href="Hos4" to ="/Hos4">Other Hospitals </Link> </Button> <ToastContainer />
              
              </div>
</div>
</Container>

              )}
              </div>              

        );
    }

}
export default withStyles (useStyles)(Hos2)