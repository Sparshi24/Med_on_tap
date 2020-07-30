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
 class Updatehc19 extends Component
  {
  constructor()
{
    super();
    this.state={
        hospitalname:"",
        totalbeds:"",
        occupiedbeds:"",
        totalventilators:"",
        occupiedventilators:"",
        plasmatherapy:"",
        lastupdated:"",
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
    const hospitalname=this.state.hospitalname
    const totalbeds=this.state.totalbeds
    const occupiedbeds=this.state.occupiedbeds
    const totalventilators=this.state.totalventilators
    const occupiedventilators=this.state.occupiedventilators
    const plasmatherapy=this.state.plasmatherapy
    const lastupdated=this.state.lastupdated
    // toast("Changes Saved")
    // toast(this.state.privat)
    // toast(this.state.general)
    // toast(this.state.AC)
    // toast(this.state.NonAC)
    // toast(this.state.treatment)
    // toast(this.state.contact)
    // toast(this.state.address)
    const data={
        hospitalname,totalbeds,occupiedbeds,totalventilators,occupiedventilators,plasmatherapy,lastupdated
       }
        Axios.get('http://localhost:8080/examples/covidupdate.jsp',{params:data}).then(response=>{console.log(response);
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
<TextField variant="outlined" margin="normal" required fullWidth id="Hospital Name" label="Hospital Name" name="hospitalname" value={this.state.hospitalname} autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Total beds" label="no. of beds" name="totalbeds" value={this.state.totalbeds}  autoFocus onChange={this.fun.bind(this)}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth id="beds occupied" label="No. of occupied" name="occupiedbeds" value={this.state.occupiedbeds}  autoFocus onChange={this.fun.bind(this)} />
<TextField variant="outlined" margin="normal" required fullWidth id="total ventilators" label="No. of ventilators" name="totalventilators" value={this.state.totalventilators}  autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="ventilators occupied" label="No. of occupied" name="occupiedventilators" value={this.state.occupiedventilators}   autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="plasma therapy" label="yes/no" name="plasmatherapy" value={this.state.plasmatherapy}  autoFocus onChange={this.fun.bind(this)}/>


<TextField variant="outlined" margin="normal" required fullWidth id="LastupdatedOn" label="Date" name="lastupdated" value={this.state.lastupdated}  autoFocus onChange={this.fun.bind(this)}/> 



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
export default withStyles (useStyles)(Updatehc19)