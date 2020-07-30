//  import React,{useState, Component} from 'react';
// // import { withStyles } from "@material-ui/core/styles";
// // import Avatar from '@material-ui/core/Avatar';
// // import Button from '@material-ui/core/Button';
// // import CssBaseline from '@material-ui/core/CssBaseline';
// // import TextField from '@material-ui/core/TextField';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import Checkbox from '@material-ui/core/Checkbox';
// // import Link from '@material-ui/core/Link';
// // import Grid from '@material-ui/core/Grid';
// // import Box from '@material-ui/core/Box';
// // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// // import Typography from '@material-ui/core/Typography';
// // import { makeStyles } from '@material-ui/core/styles';
// // import Container from '@material-ui/core/Container';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // function Copyright() {
// //     return (
// //       <Typography variant="body2" color="textSecondary" align="center">
// //         {'Copyright © '}
// //         <Link color="inherit" href="https://material-ui.com/">
// //           Your Website
// //         </Link>{' '}
// //         {new Date().getFullYear()}
// //         {'.'}
// //       </Typography>
// //     );
// //   }
// // const useStyles = ((theme) => ({
// //     paper: {
// //       marginTop: theme.spacing(0),
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //     },
// //     avatar: {
// //       margin: theme.spacing(1),
// //       backgroundColor: theme.palette.secondary.main,
// //     },
// //     form: {
// //       width: '100%', 
// //       marginTop: theme.spacing(1),
// //     },
// //     submit: {
// //       margin: theme.spacing(3, 0, 0),
// //     },
// //  }));

// //  class Hos4 extends Component
// //   {
// //   constructor()
// // {
// //     super();
// //     this.state={
// //         private:'',
// //         general:'',
// //         AC:'',
// //         NonAC:'',
// //         treatment:'',
// //         contact:'',
// //         address:'',
// //         st:false
// //     }
// // }

// // handleLogin = () =>  {
// //         toast("Changes Saved")
// //         toast(this.state.private)
// //         toast(this.state.general)
// //         toast(this.state.AC)
// //         toast(this.state.NonAC)
// //         toast(this.state.treatment)
// //         toast(this.state.contact)
// //         toast(this.state.address)
// //   }

// //   handleLogin1 = () =>  {
// //     toast("Changes not Saved")
// //     toast(this.state.private)
// //     toast(this.state.general)
// //     toast(this.state.AC)
// //     toast(this.state.NonAC)
// //     toast(this.state.treatment)
// //     toast(this.state.contact)
// //     toast(this.state.address)
// // }

// // handleChangeFields=(event)=>{
// //     this.setState({
// //         ...this.state,
// //         [event.target.name]: event.target.value
// //     })   
// // }

// //     render()
// //     {
// //         const {classes} = this.props
// //         return (
// //            <div>
// //                 {this.state.st?(<div> Welcome</div>):(
// //   <Container component="main" maxWidth="xs">
// //   <CssBaseline />
// //   <div className={classes.paper}>
// //   {/* <center><img src="mot.png"  width="100" height="100"/></center> */}
// //     <Typography component="h1" variant="h5">
// //      HOSPITAL DETAILS
// //     </Typography>

// // <div className={classes.form} noValidate>

// // <TextField variant="outlined" margin="normal" required fullWidth id="Private Rooms" label="No. of Private Rooms" name="private room" autoComplete="Private Rooms" autoFocus onChange={this.handleChangeFields}/> 
                  
// // <TextField variant="outlined" margin="normal" required fullWidth id="General Rooms" label="No. of General Rooms" name="general room" autoComplete="General Rooms" autoFocus onChange={this.handleChangeFields} /> 

// // <TextField variant="outlined" margin="normal" required fullWidth id="AC Rooms" label="No. of AC Rooms" name="AC room" autoComplete="AC room" autoFocus onChange={this.handleChangeFields}/> 

// // <TextField variant="outlined" margin="normal" required fullWidth id="Non-AC Rooms" label="No. of Non-AC Rooms" name="non-AC room" autoComplete="non-AC room" autoFocus onChange={this.handleChangeFields}/>

// // <TextField variant="outlined" margin="normal" required fullWidth id="Treatment Available" label="Treatments Available" name="treatment" autoComplete="treatment" autoFocus onChange={this.handleChangeFields}/>

// // <TextField variant="outlined" margin="normal" required fullWidth id="Contact No." label="Contact No." name="contact" autoComplete="contact" autoFocus onChange={this.handleChangeFields}/> 

// // <TextField variant="outlined" margin="normal" required fullWidth id="address" label="Address" name="address" autoComplete="address" autoFocus onChange={this.handleChangeFields}/> 

// // <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vent" to ="/Vent">Ventilators Details </Link></Button><ToastContainer />

// //  <FormControlLabel control={<Checkbox value="remember" color="primary" />}
// //  label="Remember me" />
                  
// // <Button onClick={this.handleLogin} fullWidth variant="contained" color="primary" className={classes.submit}>Save Details </Button><ToastContainer />

// // <Button onClick={this.handleLogin1} fullWidth variant="contained" color="primary" className={classes.submit}>Cancel </Button><ToastContainer />
              
// //               </div>
// // </div>
// // </Container>

// //               )}
// //               </div>              

// //         );
// //     }

// // }
// // export default withStyles (useStyles)(Hos4)


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
 class O extends Component
  {
  constructor()
{
    super();
    this.state={
        hos:"",
        privat:"",
        general:"",
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
  const hos=this.state.hos
    const privat=this.state.privat 
    const general=this.state.general
    const AC=this.state.AC
    const NonAC=this.state.NonAC
    const treatment=this.state.treatment
    const contact=this.state.contact
    const address=this.state.address
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
        hos,privat,general,AC,NonAC,treatment,contact,address,lastupdated
       
        }
        Axios.get('http://localhost:8080/examples/otherhosinsert.jsp',{params:data}).then(response=>{console.log(response);
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
  <center><img src="mot.png"  width="100" height="100"/></center>
    <Typography component="h1" variant="h5">
     ENTER DETAILS
    </Typography>

<div className={classes.form} noValidate>

<TextField variant="outlined" margin="normal" required fullWidth id="Hospital Name" label="Hospital Name" name="hos" value={this.state.hos} autoComplete="Hospital Name" autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Private Rooms" label="No. of Private Rooms" name="privat" value={this.state.privat} autoComplete="Private Rooms" autoFocus onChange={this.fun.bind(this)}/> 
                  
<TextField variant="outlined" margin="normal" required fullWidth id="General Rooms" label="No. of General Rooms" name="general" value={this.state.general} autoComplete="General Rooms" autoFocus onChange={this.fun.bind(this)} />

<TextField variant="outlined" margin="normal" required fullWidth id="AC Rooms" label="No. of AC Rooms" name="AC" value={this.state.AC} autoComplete="AC room" autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="Non-AC Rooms" label="No. of Non-AC Rooms" name="NonAC" value={this.state.NonAC} autoComplete="non-AC room"  autoFocus onChange={this.fun.bind(this)}/>

<TextField variant="outlined" margin="normal" required fullWidth id="Treatment Available" label="Treatments Available" name="treatment" value={this.state.treatment} autoComplete="treatment" autoFocus onChange={this.fun.bind(this)}/>


<TextField variant="outlined" margin="normal" required fullWidth id="Contact No." label="Contact No." name="contact" value={this.state.contact} autoComplete="contact" autoFocus onChange={this.fun.bind(this)}/> 

<TextField variant="outlined" margin="normal" required fullWidth id="address" label="Address" name="address" value={this.state.address} autoComplete="address" autoFocus onChange={this.fun.bind(this)}/> 
<TextField variant="outlined" margin="normal" required fullWidth id="lastupdated" label="Last Updated" name="lastupdated" value={this.state.lastupdated} autoComplete="lastupdated" autoFocus onChange={this.fun.bind(this)}/> 

{/* <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vent" to ="/Vent">Ventilators Details </Link></Button><ToastContainer /> */}

 {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />}
 label="Remember me" /> */}
{this.state.message}   
{/* Update           */}
<Button onClick={this.sendData.bind(this)} value="submit" fullWidth variant="contained" color="primary" className={classes.submit}>submit </Button>
              
              </div>
</div>
</Container>

              )}
              </div>              

        );
    }

}
export default withStyles (useStyles)(O)


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
//       marginTop: theme.spacing(8),
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
//  class O extends Component
//   {
//   constructor()
// {
//     super();
//     this.state={
//         hos:"",
//         privat:"",
//         general:"",
//         AC:"",
//         NonAC:"",
//         treatment:"",
//         contact:"",
//         address:"",
//         kalu:[],
//         message:"",
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
//   const hos=this.state.hos
//     const privat=this.state.privat 
//     const general=this.state.general
//     const AC=this.state.AC
//     const NonAC=this.state.NonAC
//     const treatment=this.state.treatment
//     const contact=this.state.contact
//     const address=this.state.address
//     // toast("Changes Saved")
//     // toast(this.state.privat)
//     // toast(this.state.general)
//     // toast(this.state.AC)
//     // toast(this.state.NonAC)
//     // toast(this.state.treatment)
//     // toast(this.state.contact)
//     // toast(this.state.address)
//     const data={
//         hos,privat,general,AC,NonAC,treatment,contact,address
       
//         }
//         Axios.get('http://localhost:8080/examples/ss.jsp',{params:data}).then(response=>{console.log(response);
//         this.setState({
//           kalu: response.data.responses ,
//             message:response.data.response,
//         })
//     }).catch(err=>{
//         console.log("Failed");
//     })
//     }


// render()
//     {
//         const {classes} = this.props
//         return (
//            <div>
//               {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('name',JSON.stringify((ag.hos),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('private',JSON.stringify((ag.p),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('general',JSON.stringify((ag.g),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('ac',JSON.stringify((ag.ac),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('non',JSON.stringify((ag.non),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('treatment',JSON.stringify((ag.tr),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('contact',JSON.stringify((ag.c),null,"  ")),
                
//                 )    
//     }
//      {   this.state.kalu.map((ag,key) => 
//                 localStorage.setItem('address',JSON.stringify((ag.ad),null,"  ")),
                
//                 )    
//     }
//              <div>
//                 {this.state.st?(<div> Welcome</div>):(
//   <Container component="main" maxWidth="xs">
//   <CssBaseline />
//   <div className={classes.paper}>
//   {/* <center><img src="mot.png"  width="100" height="100"/></center> */}
//     <Typography component="h1" variant="h5">
//      OTHER HOSPITAL DETAILS
//     </Typography>

// <div className={classes.form} noValidate>

// <TextField variant="outlined" margin="normal" required fullWidth id="Hospital Name" label="Hospital Name" name="hos" value={this.state.hos} autoComplete="Hospital Name" autoFocus onChange={this.fun.bind(this)}/>

// <TextField variant="outlined" margin="normal" required fullWidth id="Private Rooms" label="No. of Private Rooms" name="privat" value={this.state.privat} autoComplete="Private Rooms" autoFocus onChange={this.fun.bind(this)}/> 
                  
// <TextField variant="outlined" margin="normal" required fullWidth id="General Rooms" label="No. of General Rooms" name="general" value={this.state.general} autoComplete="General Rooms" autoFocus onChange={this.fun.bind(this)} /> 

// <TextField variant="outlined" margin="normal" required fullWidth id="AC Rooms" label="No. of AC Rooms" name="AC" value={this.state.AC} autoComplete="AC room" autoFocus onChange={this.fun.bind(this)}/> 

// <TextField variant="outlined" margin="normal" required fullWidth id="Non-AC Rooms" label="No. of Non-AC Rooms" name="NonAC" value={this.state.NonAC} autoComplete="non-AC room"  autoFocus onChange={this.fun.bind(this)}/>

// <TextField variant="outlined" margin="normal" required fullWidth id="Treatment Available" label="Treatments Available" name="treatment" value={this.state.treatment} autoComplete="treatment" autoFocus onChange={this.fun.bind(this)}/>


// <TextField variant="outlined" margin="normal" required fullWidth id="Contact No." label="Contact No." name="contact" value={this.state.contact} autoComplete="contact" autoFocus onChange={this.fun.bind(this)}/> 

// <TextField variant="outlined" margin="normal" required fullWidth id="address" label="Address" name="address" value={this.state.address} autoComplete="address" autoFocus onChange={this.fun.bind(this)}/> 

// <Button onClick={this.handleLogin}  className={classes.submit}><Link href="/Vent" to ="/Vent">Ventilators Details </Link></Button><ToastContainer />

// {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} */}
//  {/* label="Remember me" /> */}
// {this.state.message}   
// {/* Update           */}
// <Button onClick={this.sendData.bind(this)} value="submit" fullWidth variant="contained" color="primary" className={classes.submit}>submit </Button>
              
//               </div>
              
// </div>
// </Container>
//               )}
//               </div>
//               </div>              

//         );
//     }

// }
// export default withStyles (useStyles)(O)