import React, { useState, Component } from 'react';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Axios from 'axios';
// import Userdash from './Userdash';
import { Redirect } from 'react-router-dom';
import Main from './Doctor/Main';
import Main2 from './Hospital/Main2';
import Main3 from './User/Main3';
import Main4 from './Admin/Main4';




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
	palette: {
		primary: {
			main: '#004F9D',
		}
	},
	head: {
		padding: 5,
		marginLeft: 200,
	},
	back: {
		align: "center",
	},
	paper: {


		marginTop: theme.spacing(8),
		marginDown: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

	},

	form: {
		float: 'left',
		width: '90%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),

	},
	submit: {
		backgroundColor: '#004F9D',
		margin: theme.spacing(3, 0, 3),
		padding: 'center',
	},
}));

class Login2 extends Component {
	constructor() {
		super();
		this.state = {
			t1: "",
			t2: "",


			message: ""
			//ema:'',
			//pass:'',
			//st:false
		}
	}
	fun(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	sendData(ev) {
		const t1 = this.state.t1
		const t2 = this.state.t2
		const data = {
			t1, t2
		}
		Axios.get('http://localhost:8080/examples/log.jsp', { params: data }).then(response => {
			console.log(response);
			localStorage.setItem('User',t1)
			this.setState({
				message: response.data.response
			})
		}).catch(err => {
			console.log("Failed");
		})
	}


	render() {
		const { classes } = this.props
		return (
			<div >

				<div className={classes.back}>
					{/* {this.state.message=="user"? <div><Router><Route exact path='/Userdash' component={Docdash}></Route><Redirect  to="/Userdash" /></Router></div> :
             this.state.message=="doctor"?<div><Router><Route exact path='/Doctor/Docdash' component={Docdash}></Route><Redirect  to="/Docdash" /></Router></div>:
             this.state.message=="hospital"?<div><Router><Route exact path='/Hosdash' component={Hosdash}></Route><Redirect  to="/Hosdash" /></Router></div>:( */}



					{this.state.message == "user" ? <Redirect to="/User/Main3" /> :
						this.state.message == "doctor" ? <Redirect to="/Doctor/Main" /> :
							this.state.message == "hospital" ? <Redirect to="/Hospital/Main2" /> :
							  this.state.message == "Admin" ? <Redirect to="/Admin/Main4" /> :
								this.state.message == "no" ? alert("Enter Valid Details") : (

									<Container component="main" maxWidth="xs">
										<CssBaseline />
										<div className={classes.paper}>
											<center><img src="mot.png" alt="trade" width="200" height="200"></img></center>
											<center>
												<Typography component="h1" variant="h5">
													SIGN IN
												</Typography>
											</center>
											<div className={classes.form} noValidate>
												<TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="t1" autoComplete="email" autoFocus onChange={this.fun.bind(this)} />

												<TextField variant="outlined" margin="normal" required fullWidth name="pass" label="Password" type="password" name="t2" id="password" autoComplete="current-password" onChange={this.fun.bind(this)} />


												<center>
													<Button onClick={this.sendData.bind(this)} size="small" variant="contained" color="primary" className={classes.submit}>Log In </Button><ToastContainer />
												</center>


												<Grid container>
													<Grid item xs>
														{/* <Link href="" variant="body2">
                        Forgot password?
                      </Link> */}

														< a href="/Sign" variant="body2">
															{"Don't have an account? Sign Up"}
														</a>

													</Grid>


												</Grid>

											</div>

											<Router>
												<Switch>
													<Route exact path='/User/Main3' component={Main3}></Route>
													<Route exact path='/Doctor/Main' component={Main}></Route>
													<Route exact path='/Hospital/Main2' component={Main2}></Route>
												</Switch>
											</Router>
										</div>


									</Container>

								)

					}


				</div>

			</div>

		);
	}

}
export default withStyles(useStyles)(Login2);