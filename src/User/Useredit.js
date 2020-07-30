import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
// import {Link,Router,Redirect,Route} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
// import Log from './Log';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {/* <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '} */}
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

 class Updateprofile extends Component
  {
  constructor(props)
{
    super(props);
    this.state={
        name:'',
        email:'',
        phone:'',
        age:'',
        disease:'',
         radio1:'',
    }
}

handleLogin = () =>  {
  const name=this.state.name
  const email=this.state.email
  const phone=this.state.phone
  const age=this.state.age
  const disease=this.state.disease

  const radio1=this.state.radio1

    const data={
      name,email,phone,age,disease,radio1
     
      }
      Axios.get('http://localhost:8080/examples/useredit.jsp',{params:data}).then(response=>{console.log(response);
      this.setState({
          message:response.data.response
      })
  }).catch(err=>{
      console.log("Failed");
  })
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
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  {/* <center><img src="mot.png" alt="logo" width="100" height="100"></img></center> */}
    <Typography component="h1" variant="h5">
     Update Profile
    </Typography>
    <div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Name" name="name" autoComplete="name" autoFocus onChange={this.handleChangeFields}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="email" label=" Email" name="ema" autoComplete="email" autoFocus onChange={this.handleChangeFields}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="phone" label="Enter phone Number" name="phone" autoComplete="phone"autoFocus  onChange={this.handleChangeFields} />

<TextField variant="outlined" margin="normal" required fullWidth name="age" label="Enter Age" name="age" autoComplete="age"autoFocus  onChange={this.handleChangeFields} />

<TextField variant="outlined" margin="normal" required fullWidth name="disease" label="Disease" name="disease" autoComplete="disease"autoFocus  onChange={this.handleChangeFields} /> 


<div className="k-form1-field" >
            <input type="radio" name="radio1" value="female" className="k-radio" onChange={this.handleChangeFields}/>
          <label className="k-radio-label">Female</label>

          <input type="radio" name="radio1" value="male" className="k-radio" onChange={this.handleChangeFields}/>
          <label className="k-radio-label">Male</label>
</div>
  


<Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Submit Details</Button><ToastContainer />
{this.state.message}
             
              </div>
    </div>
</Container>
                 {/* )}           */}
        </div>              

        );
    }
}
export default withStyles(useStyles)(Updateprofile)