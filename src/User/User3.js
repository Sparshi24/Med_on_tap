



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

 class Editprofile1 extends Component
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
         kalu:[],
    }
}

handleLogin = () =>  {
    /* if(this.state.selectedValue=="user"){

     this.setState({st: true})
   }
   else if(this.state.selectedValue=="doctor")
   {
    this.setState({st1: true})
         }
    else if(this.state.selectedValue=="hos"){
        this.setState({st2: true})
    } */
  const name=this.state.name
  const email=this.state.email
  const phone=this.state.phone
  const age=this.state.age
  const disease=this.state.disease
  /* const radio=this.state.radio */
  const radio1=this.state.radio1

    const data={
      name,email,phone,age,disease/* ,radio */,radio1
     
      }
      Axios.get('http://localhost:8080/examples/userinsert.jsp',{params:data}).then(response=>{console.log(response);
      this.setState({
          kalu: response.data.responses,
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
     //console.log(this.state, "formField")
 } 


  


    render()
    {
        const {classes} = this.props
        return (

          <div>
          {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('name',JSON.stringify((ag.name),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('email',JSON.stringify((ag.email),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('phone',JSON.stringify((ag.phone),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('age',JSON.stringify((ag.age),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('disease',JSON.stringify((ag.disease),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('radio1',JSON.stringify((ag.radio1),null,"  ")),
            
            )    
}

<div>
                {/* {this.state.st?(<div> Welcome</div>): this.state.st1?(<div><Link href="/D" to="/D">Update</Link> </div>) : this.state.st2?(<div> good</div>) :( */}
                  {/* {this.state.message? <div><Router><Route exact path='/Log' component={Log}></Route><Redirect  to="/Log" /></Router></div>:( */}
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="mot.png" alt="logo" width="100" height="100"></img></center>
    <Typography component="h1" variant="h5">
     Insert Profile
    </Typography>
    <div className={classes.form} noValidate>
<TextField variant="outlined" margin="normal" required fullWidth id="name" label=" Name" name="name" autoComplete="name" autoFocus onChange={this.handleChangeFields}/> 
<TextField variant="outlined" margin="normal" required fullWidth id="email" label=" Email" name="email" autoComplete="email" autoFocus onChange={this.handleChangeFields}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth name="phone" label="Enter phone Number" name="phone" autoComplete="phone"autoFocus  onChange={this.handleChangeFields} />
<TextField variant="outlined" margin="normal" required fullWidth name="age" label="Enter Age" name="age" autoComplete="age"autoFocus  onChange={this.handleChangeFields} />
<TextField variant="outlined" margin="normal" required fullWidth name="disease" label="Disease" name="disease" autoComplete="disease"autoFocus  onChange={this.handleChangeFields} /> 
 {/* <FormGroup defaultValue="Female" name="check">
<FormControlLabel control={<Checkbox value="male" name="check" color="primary" />}
 label="Male" />
 <FormControlLabel control={<Checkbox value="Female" name="check" color="primary" />}
 label="Female" />
</FormGroup> */}

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
        </div>
           

        );
    }
}
export default withStyles(useStyles)(Editprofile1)