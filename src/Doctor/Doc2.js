import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Doc2 extends Component
  {
    constructor()
    {
        super();
        this.state={
            ema:'',
            npass:'',
            cpass:'',
            st:false
        }
    }
    
    handleLogin = () =>  {
       
        toast("Changes Saved")
        toast(this.state.ema)
        toast(this.state.npass)
        toast(this.state.cpass)
       
    }

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
    
    <center><img src="mot.png" width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
      Forget Password
    </Typography>


<div className={classes.form} noValidate>



<TextField variant="outlined" margin="normal" required fullWidth id="email" label=" E-mail" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="npass" label="New Password" type="new password" id="password" autoComplete="current-password"  onChange={this.handleChangeFields} /> 

<TextField variant="outlined" margin="normal" required fullWidth name="cpass" label="Confirm Password" type="confirm password" id="password" autoComplete="current-password"  onChange={this.handleChangeFields} /> 



 <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />
                  
<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Submit </Button><ToastContainer />

             <Grid container>
                   <Grid item>
                      <Link href="#" variant="body2" to="/Doc">
                        {"Sign In"}
                      </Link>
                   </Grid>
              </Grid>     
              </div>
</div>
</Container>

              )}
              </div>              

        );
    }

}
export default withStyles(useStyles)(Doc2);
