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
 class Update extends Component
  {
  constructor()
{
    super();
    this.state={
        doc_name:"",
        specialization:"",
        degree:"",
        AC:"",
        NonAC:"",
        treatment:"",
        contact:"",
        address:"",
        lastupdated:"",
        message:"",
        st:false
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
    const treatment=this.state.treatment
    const timming=this.state.timming
    const contact=this.state.contact
    const address=this.state.address
    // const lastupdated=this.state.lastupdated
    // toast("Changes Saved")
    // toast(this.state.privat)
    // toast(this.state.general)
    // toast(this.state.AC)
    // toast(this.state.NonAC)
    // toast(this.state.treatment)
    // toast(this.state.contact)
    // toast(this.state.address)
    const data={
        doc_name,specialization,degree,fee,treatment,timming,contact,address
       }
        Axios.get('http://localhost:8080/examples/docupdate.jsp',{params:data}).then(response=>{console.log(response);
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
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="/mot.png"  width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
     UPDATE DETAILS
    </Typography>

<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="doc_name" label="Doctor Name" name="doc_name" value={this.state.doc_name} autoComplete="doc_name" autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="specialization" label="Specialization" name="specialization" value={this.state.specialization} autoComplete="Specialization" autoFocus onChange={this.fun.bind(this)}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth id="degree" label="Degree" name="degree" value={this.state.degree} autoComplete="Degree" autoFocus onChange={this.fun.bind(this)} />

<TextField variant="outlined" margin="normal" required fullWidth id="fee" label="Fee" name="fee" value={this.state.fee} autoComplete="fee" autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="timming" label="Timming" name="timming" value={this.state.timming} autoComplete="timming" autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="treatment" label="Treatment" name="treatment" value={this.state.treatment} autoComplete="treatment"  autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Contact No." label="Contact No." name="contact" value={this.state.contact} autoComplete="contact" autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="address" label="Address" name="address" value={this.state.address} autoComplete="address" autoFocus onChange={this.fun.bind(this)}/> 


{/* <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vent" to ="/Vent">Ventilators Details </Link></Button><ToastContainer /> */}

                  
{this.state.message}
<Button onClick={this.sendData.bind(this)} fullWidth variant="contained" color="primary" className={classes.submit}>Update</Button>
              
              </div>
</div>
</Container>

              )}
              </div>              

        );
    }

}
export default withStyles (useStyles)(Update)