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
import CardMedia from '@material-ui/core/CardMedia';
import LockIcon from '@material-ui/icons/Lock';
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
    margin: theme.spacing(3, 0, 0),
  },
}));
 class DeleteOH extends Component
  {
  constructor()
{
    super();
    this.state={
      t1:"",
     
      message:"" 
    }
}

fun(e){
  this.setState({
 [e.target.name]:e.target.value     
  })
}
sendData(ev){
  const t1=this.state.t1
 const data={
      t1
         }
  Axios.get('http://localhost:8080/examples/coviddelete.jsp',{params:data}).then(response=>{
console.log(response);
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
            
            
            <div className={classes.back}>
              {this.state.pass}
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  <center><img src="/mot.png" alt="med" width="150" height="150"></img></center> 
    <Typography component="h1" variant="h5">
    <b>  Delete Details</b>
    </Typography>


<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="Hospital name" label="Hospital name" name="t1" autoComplete="Hospital" autoFocus onChange={this.fun.bind(this)}/> 
 
<Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>DELETE </Button>

{this.state.message}  
  </div>
</div>
</Container>

               )}
               </div>    
               </div>            

       );
    }

}
export default withStyles(useStyles)(DeleteOH);