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
import Axios from 'axios';


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
      marginTop: theme.spacing(0),
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

 class Doc3 extends Component
  {
  constructor()
{
    super();
    this.state={
        doc_name:'',
        specialization:'',
        degree:'',
        fee:'',
        timming:'',
        treatment:'',
        contact:'',
        address:'',
        st:false,
        message:''
    }
}

fun(e)
{
this.setState({
    [e.target.name]:e.target.value
})
}
sendData(ev){
const doc_name=this.state.doc_name
const specialization=this.state.specialization
const degree=this.state.degree
const fee=this.state.fee
const timming=this.state.timming
const treatment=this.state.treatment
const contact=this.state.contact
const address=this.state.address
  toast("Changes Saved")
  toast(this.state.doc_name)
  toast(this.state.specialization)
  toast(this.state.degree)
  toast(this.state.fee)
  toast(this.state.timming)
  toast(this.state.treatment)
  toast(this.state.contact)
  toast(this.state.address)
const data={
    doc_name,specialization,degree,fee,timming,treatment,contact,address
   
    }
    Axios.get('http://localhost:8080/examples/docdetails.jsp',{params:data}).then(response=>{console.log(response);
    this.setState({
        message:response.data.response
    })
}).catch(err=>{
    console.log("Failed");
})
} 

    render()
    {
        const {classes} = this.props
        return (
           <div>
             {/* {this.props.doc_name}
             <Doc3 doc_name ="sparshi"/> */}
                {this.state.st?(<div> Welcome</div>):(
                  
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="/mot.png"  width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
     ENTER DETAILS
    </Typography>

<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="doc_name" label="Doctor Name" name="doc_name" autoComplete="doc_name" autoFocus value={this.state.doc_name} onChange={this.fun.bind(this)}/>  

<TextField variant="outlined" margin="normal" required fullWidth id="Specialization" label="Specialization" name="specialization" autoComplete="specialization" autoFocus value={this.state.specialization} onChange={this.fun.bind(this)}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth id="Degree" label="Degree" name="degree" autoComplete="degree" autoFocusvalue={this.state.degree} onChange={this.fun.bind(this)} /> 

<TextField variant="outlined" margin="normal" required fullWidth id="Fee" label="Fee" name="fee" autoComplete="fee" autoFocus value={this.state.fee} onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="Treatment Available" label="Treatments Available" name="treatment" autoComplete="treatment" autoFocus value={this.state.treatment} onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Timming" label="Timming" name="timming" autoComplete="timming" autoFocus value={this.state.timming} onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Contact No." label="Contact No." name="contact" autoComplete="contact" autoFocus value={this.state.contact} onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="address" label="Address" name="address" autoComplete="address" autoFocus value={this.state.address} onChange={this.fun.bind(this)}/> 

 {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" /> */}
                  
<Button onClick={this.sendData.bind(this)} value="Submit" fullWidth variant="contained" color="primary" className={classes.submit}>Save Changes</Button> <ToastContainer />


              </div>
</div>
</Container>

              )}
              </div>              

        );
    }

}
export default withStyles (useStyles)(Doc3)