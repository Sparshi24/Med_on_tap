// import React,{useState, Component} from 'react';
// import { withStyles } from "@material-ui/core/styles";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Container from '@material-ui/core/Container';

// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://material-ui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
// const useStyles = ((theme) => ({
//     paper: {
//       marginTop: theme.spacing(0),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));

//  class Hos3 extends Component
//   {
//   constructor()
// {
//     super();
//     this.state={
//         bed:'',
//         ventilators:'',
//         plasma:'',
//         update:'',
        
//         st:false
//     }
// }

// handleLogin = () =>  {
//   toast("Changes Saved")
//   toast(this.state.bed)
//   toast(this.state.ventilators)
//   toast(this.state.plasma)
//   toast(this.state.update)
// }

// handleLogin1 = () =>  {
// toast("Changes not Saved")
// toast(this.state.bed)
// toast(this.state.ventilators)
// toast(this.state.plasma)
// toast(this.state.update)
// }

// handleChangeFields=(event)=>{
//     this.setState({
//         ...this.state,
//         [event.target.name]: event.target.value
//     })
//     //console.log(this.state, "formField")
// }



//     render()
//     {
//         const {classes} = this.props
//         return (

//             <div>
              
//                 {this.state.st?(<div> Welcome</div>):(
//   <Container component="main" maxWidth="xs">
//   <CssBaseline />
//   <div className={classes.paper}>
    
//     {/* <center><img src="mot.png" width="100" height="100"/></center> */}
//     <Typography component="h1" variant="h5">
//       Hospital For Covid-19
//     </Typography>


// <div className={classes.form} noValidate>

// {/* <TextField variant="outlined" margin="normal" required fullWidth id="No Of Beds" label="No Of Beds" name="No Of Beds" autoComplete="No Of Beds" autoFocus onChange={this.handleChangeFields}/> 
                  
// <TextField variant="outlined" margin="normal" required fullWidth id="No Of Ventilators" label="No Of Ventilators" name="No Of Ventilators" autoComplete="No Of Ventilators" autoFocus onChange={this.handleChangeFields} />  */}

// {/* <TextField variant="outlined" margin="normal" required fullWidth id="Plasma Therapy" label="Plasma Therapy" name="Plasma Therapy" autoComplete="Plasma Therapy" autoFocus onChange={this.handleChangeFields}/>  */}

// {/* <TextField variant="outlined" margin="normal" required fullWidth id="Update" label="Last Updated On" name="last update" autoComplete="Last update" autoFocus onChange={this.handleChangeFields}/>  */}

// <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Plasma" to ="/Plasma"> Plasma Therapy</Link> </Button><ToastContainer />

// <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vbed" to ="/Vbed"> View Bed Details</Link> </Button><ToastContainer />

// <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Bed" to ="/Bed"> Update Bed Details</Link> </Button><ToastContainer />

// <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vvent" to ="/Vvent">View Ventilators Details</Link></Button><ToastContainer />

// <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vent" to ="/Vent">Update Ventilators Details</Link></Button><ToastContainer />

// <Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Save Changes </Button><ToastContainer />

                  
              
//               </div>
// </div>
// </Container>

//               )}
//               </div>              

//         );
//     }

// }
// export default withStyles(useStyles)(Hos3);


// import React,{useState, Component} from 'react';
// import { withStyles } from "@material-ui/core/styles";
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Axios from 'axios';

// function Copyright() {
//     return (
//       <Typography variant="body2" color="textSecondary" align="center">
//         {'Copyright © '}
//         <Link color="inherit" href="https://material-ui.com/">
//           Your Website
//         </Link>{' '}
//         {new Date().getFullYear()}
//         {'.'}
//       </Typography>
//     );
//   }
// const useStyles = ((theme) => ({
//     paper: {
//       marginTop: theme.spacing(0),
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     avatar: {
//       margin: theme.spacing(1),
//       backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//       width: '100%', 
//       marginTop: theme.spacing(1),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 0),
//     },
//  }));
//  class Hospcovidinsert extends Component
//   {
//   constructor()
// {
//     super();
//     this.state={
//         hospitalname:"",
//         totalbeds:"",
//         occupiedbeds:"",
//         totalventilators:"",
//         occupiedventilators:"",
//         plasmatherapy:"",
//         lastupdated:"",
//         st:false
//     }
// }

// fun(e)
//     {
//     this.setState({
//         [e.target.name]:e.target.value
//     })
// }
// sendData(ev){
//     const hospitalname=this.state.hospitalname
//     const totalbeds=this.state.totalbeds
//     const occupiedbeds=this.state.occupiedbeds
//     const totalventilators=this.state.totalventilators
//     const occupiedventilators=this.state.occupiedventilators
//     const plasmatherapy=this.state.plasmatherapy
//     const lastupdated=this.state.lastupdated
    
//     // toast("Changes Saved")
//     // toast(this.state.privat)
//     // toast(this.state.general)
//     // toast(this.state.AC)
//     // toast(this.state.NonAC)
//     // toast(this.state.treatment)
//     // toast(this.state.contact)
//     // toast(this.state.address)
//     const data={
//       hospitalname,totalbeds,occupiedbeds,totalventilators,occupiedventilators,plasmatherapy,lastupdated
       
//         }
//         Axios.get('http://localhost:8080/examples/Hospitalcovidinsert.jsp',{params:data}).then(response=>{console.log(response);
//         this.setState({
//             message:response.data.response
//         })
//     }).catch(err=>{
//         console.log("Failed");
//     })
//     } 

//     render()
//     {
//         const {classes} = this.props
//         return (
//            <div>
//                 {this.state.st?(<div> Welcome</div>):(
//   <Container component="main" maxWidth="xs">
//   <CssBaseline />
//   <div className={classes.paper}>
//   {/* <center><img src="mot.png"  width="100" height="100"/></center> */}
//     <Typography component="h1" variant="h5">
//      ENTER DETAILS
//     </Typography>

// <div className={classes.form} noValidate>

// <TextField variant="outlined" margin="normal" required fullWidth id="Hospital Name" label="Hospital Name" name="hospitalname" value={this.state.hospitalname} autoFocus onChange={this.fun.bind(this)}/>

// <TextField variant="outlined" margin="normal" required fullWidth id="Total beds" label="no. of beds" name="totalbeds" value={this.state.totalbeds}  autoFocus onChange={this.fun.bind(this)}/> 
                  
// <TextField variant="outlined" margin="normal" required fullWidth id="beds occupied" label="No. of occupied" name="occupiedbeds" value={this.state.occupiedbeds}  autoFocus onChange={this.fun.bind(this)} />
// <TextField variant="outlined" margin="normal" required fullWidth id="total ventilators" label="No. of ventilators" name="totalventilators" value={this.state.totalventilators}  autoFocus onChange={this.fun.bind(this)}/> 

// <TextField variant="outlined" margin="normal" required fullWidth id="ventilators occupied" label="No. of occupied" name="occupiedventilators" value={this.state.occupiedventilators}   autoFocus onChange={this.fun.bind(this)}/>

// <TextField variant="outlined" margin="normal" required fullWidth id="plasma therapy" label="yes/no" name="plasmatherapy" value={this.state.plasmatherapy}  autoFocus onChange={this.fun.bind(this)}/>


// <TextField variant="outlined" margin="normal" required fullWidth id="LastupdatedOn" label="Date" name="lastupdated" value={this.state.lastupdated}  autoFocus onChange={this.fun.bind(this)}/> 



// <Button onClick={this.sendData.bind(this)} value="submit" fullWidth variant="contained" color="primary" className={classes.submit}>submit </Button>

 
// {/* {this.state.message}    */}
     

              
//               </div>
// </div>
// </Container>

//               )}
//               </div>              

//         );
//     }

// }
// export default withStyles (useStyles)(Hospcovidinsert)


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
 class Hospcovidinsert extends Component
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
        kalu:[],
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
        Axios.get('http://localhost:8080/examples/Hospitalcovidinsert.jsp',{params:data}).then(response=>{console.log(response);
        this.setState({
          kalu: response.data.responses ,
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
          {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('hospitalname',JSON.stringify((ag.hospitalname),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('totalbeds',JSON.stringify((ag.totalbeds),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('occupiedbeds',JSON.stringify((ag.occupiedbeds),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('totalventilators',JSON.stringify((ag.totalventilators),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('occupiedventilators',JSON.stringify((ag.occupiedventilators),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('plasmatherapy',JSON.stringify((ag.plasmatherapy),null,"  ")),
            
            )    
}
 {   this.state.kalu.map((ag,key) => 
            localStorage.setItem('lastupdated',JSON.stringify((ag.lastupdated),null,"  ")),
            
            )    
}
      <div>
                {this.state.st?(<div> Welcome</div>):(
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>
  {/* <center><img src="logo.png"  width="100" height="100"/></center> */}
    <Typography component="h1" variant="h5">
     Hospital for Covid19
    </Typography>

<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="Hospital Name" label="Hospital Name" name="hospitalname" value={this.state.hospitalname} autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Total beds" label="no. of beds" name="totalbeds" value={this.state.totalbeds}  autoFocus onChange={this.fun.bind(this)}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth id="beds occupied" label="No. of occupied" name="occupiedbeds" value={this.state.occupiedbeds}  autoFocus onChange={this.fun.bind(this)} />
<TextField variant="outlined" margin="normal" required fullWidth id="total ventilators" label="No. of ventilators" name="totalventilators" value={this.state.totalventilators}  autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="ventilators occupied" label="No. of occupied" name="occupiedventilators" value={this.state.occupiedventilators}   autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="plasma therapy" label="yes/no" name="plasmatherapy" value={this.state.plasmatherapy}  autoFocus onChange={this.fun.bind(this)}/>


<TextField variant="outlined" margin="normal" required fullWidth id="LastupdatedOn" label="Date" name="lastupdated" value={this.state.lastupdated}  autoFocus onChange={this.fun.bind(this)}/> 



<Button onClick={this.sendData.bind(this)} value="submit" fullWidth variant="contained" color="primary" className={classes.submit}>submit </Button>

 
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
export default withStyles (useStyles)(Hospcovidinsert)