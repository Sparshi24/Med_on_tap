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
      margin: theme.spacing(3, 0, 2),
    },
  }));

 class Hos extends Component
  {
  constructor()
{
    super();
    this.state={
        name:'',
        ema:'',
        pass:'',
        st:false
    }
}

handleLogin = () =>  {
    
    if(this.state.name=="def" && this.state.ema=="abc" && this.state.pass=="xyz"){
       toast("Logging In");
        this.setState({st: true})
    } else {
        toast("not loggedin")
    }

    toast(this.state.name)
    toast(this.state.ema)
    toast(this.state.pass)
   
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
              
                {this.state.st?(<div> <Link href="Hos2" to = "Hos2">Hospital Dashboard</Link></div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
   <center><img src="mot.png"  width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
      Hospital Login
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="name" label="Hospital Name" name="name" autoComplete="Hospital Name" autoFocus onChange={this.handleChangeFields} /> 

<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="password" id="password" autoComplete="current-password"  onChange={this.handleChangeFields} /> 

 <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />
                  
<Button  onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Login </Button> <ToastContainer />

                  <Grid container>
                    <Grid item xs>
                      <Link href="Doc2" variant="body2" to ="/Doc2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="Hos1" variant="body2" to ="/Hos1">
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
export default withStyles (useStyles)(Hos);