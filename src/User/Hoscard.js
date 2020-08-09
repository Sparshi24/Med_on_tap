import React, { Component } from 'react';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Axios from 'axios';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'


  
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tradeit
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = ((theme) => ({
  root: {
    //marginTop: 0,
    flexGrow: 1,
    
  },
  media: {
    height: 200,
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // marginLeft: 100,
    // padding: 5,
  },
  head: {
    
    // marginTop: 0,
    marginLeft:480,
      color: theme.palette.common.white,
    },
  root:{
    flexGrow: 1,
        padding: theme.spacing(2),
        // marginTop:80,
  },
}));

class Display extends Component 
{
  constructor()
    {
        super();
        this.state={
          t1:'',
          kalu:[]
        };
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

    Axios.get('http://localhost:8080/examples/hossearch.jsp',{params:data}).then(response=>{
          console.log(response);
          this.setState({
          message:response.data.response,
          kalu: response.data.responses ,
          })
          }).catch(err=>{
          console.log("Failed");
          }
          
          
          )
      
        }

    componentDidMount(){
        Axios.get('http://localhost:8080/examples/otherhospcard.jsp').then(response=>{
          this.setState({kalu: response.data.responses})  
        }).catch(err => {
            console.log("Failed");
        })

    }
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
      <div className={classes.head} >
      
      <TextField variant="outlined" 
      margin="normal" 
      width="400" 
      name="search"  
      autoComplete="Name"
       label="Search Here"
        type="name"  
        name="t1" 
        autoComplete="Name"  
        value={this.state.t1} 
        autoFocus 
        onChange={this.fun.bind(this)}/> 
        </div>
        <br></br>
        {/* <br></br> */}
        <center>
      <Button 
       onClick={this.sendData.bind(this)}
        size="small" 
        variant="contained" 
        color="primary" 
        className={classes.submit}
        startIcon={<Search />}>
          Search 
          </Button>
      </center>
      <br></br>
{/* {this.state.message} */}
                     
      
      <br></br>
      <Grid container justify="center" >
                {    this.state.kalu.map((ag,key) => 
                    <div key>
 <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        

                         


<Card className={classes.root}>
      <CardActionArea>
        
        <CardContent>
          {/* <Divider/> */}
        {/* <Typography gutterBottom variant="h10" component="h2"> */}
        {/* Hospital Name */}
        <Typography gutterBottom variant="h4" component="h3" >
          {ag.hos}
          </Typography>
          {/* </Typography> */}
          {/* <Divider/> */}

                    {/* <Typography gutterBottom variant="h10" component="h2"> */}
                    {/* Address  */}

          
          <Typography component="div" >
                      <Box fontWeight="fontWeightMedium"  fontStyle="italic">
            {ag.ad}
            </Box>
            </Typography>
          {/* </Typography> */}
          

                    {/* <Typography gutterBottom variant="h10" component="h2"> */}
                    {/* Contact  */}
                    <Typography component="div" >
                      <Box fontWeight="fontWeightMedium"  fontStyle="italic">
            {ag.c}
            </Box>
            </Typography>
          {/* </Typography> */}
          <Divider/>

                    {/* <Typography gutterBottom variant="body1" component="h6">
                    Treatment
                    </Typography> */}
                    {/* <Typography> */}
                    <Typography component="div" >
                      <Box fontWeight="fontWeightBold"  fontStyle="italic">
        Treatment
      </Box>
      </Typography>
           <Typography  >
           <Box fontStyle="italic">
             {ag.tr}
             </Box>
             </Typography>
          {/* </Typography> */}
          <Divider/>

          {/* <Typography variant="body1" component="h6" >
            Private Rooms
            </Typography>
            {/* <br></br> */}
            {/* <Typography variant="body1" > */}
              {/* {ag.p} */}
              {/* </Typography> */}
          
          {/* <Divider/> */}

          <Typography component="div" >
                      <Box fontWeight="fontWeightBold"  fontStyle="italic">
        Private Rooms
      </Box>
      </Typography>
           <Typography  >
           <Box fontStyle="italic">
             {ag.p}
             </Box>
             </Typography>
          {/* </Typography> */}
          <Divider/>

          <Typography component="div" >
                      <Box fontWeight="fontWeightBold"  fontStyle="italic">
        General Rooms
      </Box>
      </Typography>
           <Typography  >
           <Box fontStyle="italic">
             {ag.g}
             </Box>
             </Typography>
          {/* </Typography> */}
          <Divider/>

          <Typography component="div" >
                      <Box fontWeight="fontWeightBold"  fontStyle="italic">
        AC Rooms
      </Box>
      </Typography>
           <Typography  >
           <Box fontStyle="italic">
             {ag.ac}
             </Box>
             </Typography>
          {/* </Typography> */}
          <Divider/>

          <Typography component="div" >
                      <Box fontWeight="fontWeightBold"  fontStyle="italic">
        Non-AC Rooms
      </Box>
      </Typography>
           <Typography  >
           <Box fontStyle="italic">
             {ag.non}
             </Box>
             </Typography>
          {/* </Typography> */}
          <Divider/>

          <Typography component="div" >
                      <Box fontWeight="fontWeightBold"  fontStyle="italic">
        Last Updated
      </Box>
      </Typography>
           <Typography  >
           <Box fontStyle="italic">
             {ag.lastupdated}
             </Box>
             </Typography>
          {/* </Typography> */}
          <Divider/>

          {/* <Typography gutterBottom variant="body1" component="h6"> */}
            {/* General Rooms */}
            {/* </Typography> */}
            {/* <Typography variant="body1" > */}
              {/* {ag.g} */}
              {/* </Typography> */}
          {/* </Typography> */}
          {/* <Divider/> */}

          {/* <Typography gutterBottom variant="body1" component="h6"> */}
            {/* AC Rooms */}
            {/* </Typography> */}
            {/* <Typography variant="body1" > */}
              {/* {ag.ac} */}
              {/* </Typography> */}
          {/* </Typography> */}
          {/* <Divider/> */}

          {/* <Typography gutterBottom variant="body1" component="h6"> */}
          {/* Non AC Rooms */}
          {/* </Typography> */}
          {/* <Typography variant="body1" > */}
            {/* {ag.non} */}
            {/* </Typography> */}
          {/* </Typography> */}
          {/* <Divider/> */}




          {/* <Divider/> */}



          {/* <Typography gutterBottom variant="body1" component="h6"> */}
          {/* Last Updated  */}
          {/* </Typography> */}
          {/* <Typography variant="body1" > */}
            {/* {ag.lastupdated} */}
            {/* </Typography> */}
          
           {/* <Divider/>          */}
        
        </CardContent>
      </CardActionArea>
    </Card>
    
  
  </div>
  <Box mt={8}>
        {/* <Copyright /> */}
      </Box>
    </Container>
    </div>
  
                    )
                }
         </Grid>
</Grid>
{/* <br></br><br></br> */}

<div  >
<Button   a href="/User/User9"  color="inherit" justify="right" >TABLE VIEW  </Button>
</div>

    </div>
  );
}
}
export default withStyles(useStyles)(Display);