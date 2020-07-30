// Edit page
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
import EditIcon from '@material-ui/icons/Edit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';

function Copyright() {
    return (
      <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          VehicleLease
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography></div>
    );
  }
const useStyles = ((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color:'black',
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
      margin: theme.spacing(1, 0, 0),
    },
  }));

  
 class E extends Component
  {
  constructor()
{
    super();
    this.state={
        l:'',
        p:'',
        d:'',
        a:'',
        t:'',
        message:'',
        st:false
    }
}



handleChangeFields=(event)=>{
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
    })
}
h=()=>{
    toast(this.state.l)
    toast(this.state.p)
    toast(this.state.d)
    toast(this.state.a)
    toast(this.state.t)
    // alert(this.state.l)
}
sendData(ev){
  const l=this.state.l
  const p=this.state.p
  const d=this.state.d
  const a=this.state.a
  const t=this.state.t
  const data={
    l,p,d,a,t
  }
  Axios.get('http://localhost:8080/examples/a.jsp',{params:data}).then(response=>{
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
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <center><Avatar className={classes.avatar}>
              <EditIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Private Vehicle
            </Typography></center>
            <form className={classes.form} noValidate>
              <TextField variant="outlined" value={this.state.l} margin="normal" onChange={this.handleChangeFields.bind(this)} required fullWidth id="l" label="Location" name="l" autoFocus/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={this.state.p}
                onChange={this.handleChangeFields.bind(this)}
                name="p"
                id="p"
                type="Date"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                onChange={this.handleChangeFields.bind(this)}fullWidth
                name="a"
                id="a"
                label="Address"
                autoComplete="Address"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                onChange={this.handleChangeFields.bind(this)}fullWidth
                name="t"
                id="t"
                value={this.state.t}
                type="Time"
                autoFocus
              /><ToastContainer></ToastContainer>
              <center> <Button onClick={this.sendData.bind(this)} variant="contained" color="primary">
                        Done
                      </Button></center></form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
        );
    }

}
export default withStyles(useStyles)(E);
