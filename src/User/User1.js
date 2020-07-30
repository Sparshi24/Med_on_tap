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
import ReactDOM from 'react-dom';

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

 class User1 extends Component
  {
  constructor()
  {
    super();
    this.state={
        name:'',
        ema:'',
        pass:'',
        tel:'',
        age:'',
        st:false
    };
}

handleLogin = () =>  {
    toast(this.state.name)
    toast(this.state.ema)
    toast(this.state.pass)
    toast(this.state.tel)
    toast(this.state.age)
}
handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
    //console.log(this.state, "formField")
}



    render()
    {
        const {classes} = this.props
        return (

            <div>
              {this.state.pass}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <div className="ppp">
  <center><img src="mot.png" width="100" height="100"></img></center> 
    </div>
    <Typography component="h1" variant="h5">
     User Sign Up
    </Typography>


<div className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth id="name" label="Name" name="name" autoComplete="name" autoFocus onChange={this.handleChangeFields}/> 
<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields}/>
<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Enter Password" type="password" id="password" autoComplete="current-password"  onChange={this.handleChangeFields} />
<TextField variant="outlined" margin="normal" required fullWidth id="phoneno." label="Phone No." name="tel" autoComplete="number" autoFocus onChange={this.handleChangeFields}/> 
<TextField variant="outlined" margin="normal" required fullWidth id="age" label="Age" name="age" autoComplete="number" autoFocus onChange={this.handleChangeFields}/>               
 
<FormControlLabel control={<Checkbox value="male" color="primary" />}
 label="Male" />
 <FormControlLabel control={<Checkbox value="Female" color="primary" />}
 label="Female" />



<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Sign Up </Button><ToastContainer />

                  <Grid container>
                   
                    <Grid item>
                      <Link href="/User" variant="body2" to ="/User">
                        {"Want to Sign In?"}
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
export default withStyles(useStyles)(User1);