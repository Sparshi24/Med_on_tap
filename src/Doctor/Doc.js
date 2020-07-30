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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


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

 class Doc extends Component
  {
    constructor()
    {
        super();
        this.state={
            name:'',
            ema:'',
            pass:'',
            User:'',
            Doctor:'',
            Hospital:'',
            st:false
        }
    }
    
    handleLogin = () =>  {
        
        if(this.state.name=="def" && this.state.ema=="abc" && this.state.pass=="xyz"){
  
           toast("Sign In")
           toast(this.state.name)
           toast(this.state.ema)
           toast(this.state.pass)
           this.setState({st: true})
            
        } else {
            toast("not Signing In")
        
    
        toast(this.state.name)
        toast(this.state.ema)
        toast(this.state.pass)
        } 
    }

handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value})
        
    }

     handleChange = (event) => {
      this.setValue(event.target.value);
    };





    render()
    {
        const {classes} = this.props
        return (

            <div>
              
                {this.state.st?(<div><Link to="/sign in">Update Details</Link></div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
    
    <center><img src="mot.png" width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
      Sign In
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Name" name="name" autoComplete="name" autoFocus onChange={this.handleChangeFields}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="ema" label=" E-mail" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="password" id="password" autoComplete="current-password"  onChange={this.handleChangeFields} /> 



 {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" /><br></br> */}

{/* <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="User" />

<FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Hospital" />

<FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Doctor" />
                   */}

<FormControl component="fieldset">
  <FormLabel component="legend">Roll</FormLabel>
  <RadioGroup aria-label="ROLL" name="roll1" value={this.value} onChange={this.handleChangeFields}>
    <FormControlLabel value="User" control={<Radio />} label="User" />
    <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
    <FormControlLabel value="Hospital" control={<Radio />} label="Hospital" />
    {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
  </RadioGroup>
</FormControl>
<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Sign in </Button><ToastContainer />

                  <Grid container>
                    <Grid item xs>
                      <Link href="" variant="body2" to="/Doc2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="Doc1" variant="body2" to="/Doc1">
                        {"Don't have an account? Sign Up"}
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
export default withStyles(useStyles)(Doc);
