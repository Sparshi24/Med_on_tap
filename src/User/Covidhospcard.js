import React, { Component } from 'react';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{BrowserRouter as Router,
Switch,Route} from "react-router-dom";
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
// import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

  
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
  marginTop: -105,
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
          kalu:[]
        };
    }
    componentDidMount(){
        Axios.get('http://localhost:8080/examples/covidhoscard.jsp').then(response=>{
          this.setState({kalu: response.data.responses})  
         
        }).catch(err => {
            console.log("Failed");
        })

    }
 render(){
    const { classes} = this.props

  return (
    <div>
    <div  >
<Button   a href="/User/User8"  color="inherit" justify="right" >TABLE VIEW  </Button>
</div><br></br><br></br>
    <div className={classes.root}>
     
      <Grid item xs={12}>
      <Grid container justify="center" >
                {    this.state.kalu.map((ag,key) => 
                    <div key>
 <Container component="main">
      <CssBaseline />
      <div className={classes.paper}><Card className={classes.root}>
      <CardActionArea>
        
        <CardContent><Divider/>
        <Typography gutterBottom variant="h10" component="h2">
        Hospital Name<Typography variant="body1" >{ ag.hospitalname}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Total Beds<Typography variant="body1" >{ag.totalbeds}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Occupied Beds <Typography variant="body1" >{ag.occupiedbeds}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Total Ventilators <Typography variant="body1" >{ag.totalventilators}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Occupied Ventilators<Typography variant="body1" >{ag.occupiedventilators}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Plasmatherapy<Typography variant="body1" >{ag.plasmatherapy}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Last Updated <Typography variant="body1" >{ag.lastupdated}</Typography>
          </Typography><Divider/>
          {/* <Typography gutterBottom variant="h10" component="h2">
          Address :{ag.ad}
          </Typography> */}
          
        
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
    </div>
    </div>
  );
}
}
export default withStyles(useStyles)(Display);