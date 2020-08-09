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
  constructor(props)
{
    super(props);
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
        message:'',
        kalu:[]
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
  const doc_name=this.state.doc_name
  const specialization=this.state.specialization
  const degree=this.state.degree
  const fee=this.state.fee
  const timming=this.state.timming
  const treatment=this.state.treatment
  const contact=this.state.contact
  const address=this.state.address

  const data={
    doc_name,specialization,degree,fee,timming,treatment,contact,address
   
    }
    Axios.get('http://localhost:8080/examples/docinsert.jsp',{params:data}).then(response=>{console.log(response);
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





// fun(e)
// {
// this.setState({
//     [e.target.name]:e.target.value
// })
// }
// sendData(ev){
// const doc_name=this.state.doc_name
// const specialization=this.state.specialization
// const degree=this.state.degree
// const fee=this.state.fee
// const timming=this.state.timming
// const treatment=this.state.treatment
// const contact=this.state.contact
// const address=this.state.address
//   toast("Changes Saved")
//   toast(this.state.doc_name)
//   toast(this.state.specialization)
//   toast(this.state.degree)
//   toast(this.state.fee)
//   toast(this.state.timming)
//   toast(this.state.treatment)
//   toast(this.state.contact)
//   toast(this.state.address)
// const data={
//     doc_name,specialization,degree,fee,timming,treatment,contact,address
   
//     }
//     Axios.get('http://localhost:8080/examples/docinsert.jsp',{params:data}).then(response=>{console.log(response);
//     this.setState({
//         message:response.data.response
//     })
// }).catch(err=>{
//     console.log("Failed");
// })
// } 

    render()
    {
        const {classes} = this.props
        return (
           <div>

{   this.state.kalu.map((ag,key) => 
            localStorage.setItem('doc_name',JSON.stringify((ag.doc_name),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('specialization',JSON.stringify((ag.specialization),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('degree',JSON.stringify((ag.degree),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('fee',JSON.stringify((ag.fee),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('treatment',JSON.stringify((ag.treatment),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('timming',JSON.stringify((ag.timming),null,"  ")),
            
            )    
}
{   this.state.kalu.map((ag,key) => 
            localStorage.setItem('contact',JSON.stringify((ag.contact),null,"  ")),
            
            )    
}
{   this.state.kalu.map((ag,key) => 
            localStorage.setItem('address',JSON.stringify((ag.address),null,"  ")),
            
            )    
}

<div>
             {/* {this.props.doc_name}
             <Doc3 doc_name ="sparshi"/> */}
{/* {this.state.st?(<div> Welcome</div>):( */}
                  
<Container component="main" maxWidth="xs">
<CssBaseline />
<div className={classes.paper}>
{/* <center><img src="/mot.png"  width="100" height="100"/></center> */}
<Typography component="h1" variant="h5">
ENTER DETAILS
</Typography>

<div className={classes.form} noValidate>

<TextField variant="outlined"
 margin="normal" 
 required fullWidth id="doc_name" 
 label="Doctor Name"
// lable={ag.doc_name}
name="doc_name"
autoComplete="doc_name" 
autoFocus
value={this.state.doc_name} 
onChange={this.handleChangeFields}/>  

<TextField variant="outlined"
margin="normal"
required fullWidth id="Specialization" 
label="Specialization" 
name="specialization"
autoComplete="specialization" 
autoFocus
value={this.state.specialization}
onChange={this.handleChangeFields}
/> 
                  
<TextField variant="outlined"
margin="normal"
required fullWidth id="Degree" 
label="Degree"
name="degree"
autoComplete="degree" 
autoFocus
value={this.state.degree} 
onChange={this.handleChangeFields} 
/> 

<TextField
variant="outlined"
margin="normal"
required fullWidth id="Fee"
label="Fee"
name="fee"
autoComplete="fee"
autoFocus
value={this.state.fee} 
onChange={this.handleChangeFields}
/> 

<TextField 
variant="outlined"
margin="normal" 
required fullWidth id="Treatment Available"
label="Treatments Available" 
name="treatment" 
autoComplete="treatment" 
autoFocus
value={this.state.treatment} 
onChange={this.handleChangeFields}
/>

<TextField 
variant="outlined" 
margin="normal" 
required fullWidth id="Timming" 
label="Timming" 
name="timming" 
autoComplete="timming" 
autoFocus 
value={this.state.timming} 
onChange={this.handleChangeFields}
/>

<TextField 
variant="outlined" 
margin="normal" 
required fullWidth id="Contact No." 
label="Contact No." 
name="contact" 
autoComplete="contact" 
autoFocus 
value={this.state.contact} 
onChange={this.handleChangeFields}
/> 

<TextField 
variant="outlined" 
margin="normal" 
required fullWidth id="address" 
label="Address" 
name="address" 
autoComplete="address" 
autoFocus 
value={this.state.address} 
onChange={this.handleChangeFields}
/> 

 {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" /> */}
                  
<Button onClick={this.handleLogin} value="Submit" fullWidth variant="contained" color="primary" className={classes.submit}>Save Changes</Button> <ToastContainer />
{this.message}

              </div>
</div>
</Container>

              {/* )} */}
              </div> 
              </div>             

        );
    }

}
export default withStyles (useStyles)(Doc3)