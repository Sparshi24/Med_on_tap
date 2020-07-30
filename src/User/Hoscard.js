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
      {/* <AppBar position="static" className={classes.head}>
        <Toolbar>
            
          
        </Toolbar>
      </AppBar> */}

<div  >
<Button   a href="/User/User9"  color="inherit" justify="right" >TABLE VIEW  </Button>
</div><br></br><br></br>
      <Grid item xs={12}>
      <Grid container justify="center" >
                {    this.state.kalu.map((ag,key) => 
                    <div key>
 <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        

                         


<Card className={classes.root}>
      <CardActionArea>
        
        <CardContent><Divider/>
        <Typography gutterBottom variant="h10" component="h2">
        Hospital Name<Typography variant="body1" >{ag.hos}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
            Private Rooms<Typography variant="body1" >{ag.p}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
            General Rooms<Typography variant="body1" >{ag.g}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
            AC Rooms<Typography variant="body1" >{ag.ac}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Non AC Rooms<Typography variant="body1" >{ag.non}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Treatment <Typography variant="body1" >{ag.tr}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Contact <Typography variant="body1" >{ag.c}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Address <Typography variant="body1" >{ag.ad}</Typography>
          </Typography><Divider/>
          <Typography gutterBottom variant="h10" component="h2">
          Last Updated <Typography variant="body1" >{ag.lastupdated}</Typography>
          </Typography> <Divider/>         
        
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
  );
}
}
export default withStyles(useStyles)(Display);