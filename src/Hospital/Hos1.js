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
      margin: theme.spacing(0),
      backgroundColor: theme.palette.secondary.main,
      
    },
    form: {
      
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(.5),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  
      
  }));

  
 class Hos1 extends Component
  {
  constructor()
{
    super();
    this.state={
        hos:'',
        ema:'',
        pass:'',
        lic:'',
        st:false
    }
}
handleLogin = () =>  {
  toast(this.state.hos)
  toast(this.state.ema)
  toast(this.state.pass)
  toast(this.state.lic)
  
}
handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
    // console.log(this.state, "formField")
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
    <center> <img src="mot.png" width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
      Sign Up
    </Typography> 


<div className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth id="hos" label="Hospital name" name="hos" autoComplete="hos" autoFocus onChange={this.handleChangeFields}/>
<TextField variant="outlined" margin="normal" required fullWidth id="ema" label="Email Address" name="ema" autoComplete="ema" autoFocus onChange={this.handleChangeFields}/> 

                  
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="pass" id="pass" autoComplete="pass"  onChange={this.handleChangeFields} />
<TextField variant="outlined" margin="normal" required fullWidth id="lic" label="License no." name="lic" autoComplete="lic" autoFocus onChange={this.handleChangeFields}/> 


 <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" />
                  
<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Sign Up </Button><ToastContainer />


                  <Grid container>
                    <Grid item>
                      <Link href="Hos" variant="body2" to ="Hos">
                        {"Already have an account? Sign Up"}
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
              export default withStyles(useStyles)(Hos1);