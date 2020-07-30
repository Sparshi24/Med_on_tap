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
import SearchBar from 'material-ui-search-bar'
import Divider from '@material-ui/core/Divider';

  
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        med on tap
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = ((theme) => ({

    back:{
        margintop:0,
        marginLeft:500,
      },

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
        Axios.get('http://localhost:8080/examples/doccard.jsp').then(response=>{
          this.setState({kalu: response.data.responses})  
        }).catch(err => {
            console.log("Failed");
        })

    }
 render(){
    const { classes} = this.props

  return (
    <div className={classes.root}>
      {/* <AppBar position="static" className={classes.head}> */}
        {/* <Toolbar> */}
            
      {/* <Button color="inherit"> 
                           <Link>
                           TABLE VIEW    
                           </Link>
                           </Button>  
           */}

{/* <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    /> */}
           <div  >
<Button   a href="/User/User4"  color="inherit" justify="right" >TABLE VIEW  </Button>
</div><br></br><br></br>
        {/* </Toolbar> */}
      {/* </AppBar> */}
      <Grid item xs={12}>
      <Grid container justify="center" >
                {    this.state.kalu.map((ag,key) => 
                    <div key>
 <Container component="main">
      <CssBaseline />
      
      <div className={classes.paper}>


<Card className={classes.root} variant="outlined">
      <CardActionArea>
        
        <CardContent>
          <Divider/>
               <Typography gutterBottom variant="h10" component="h2">
                    Doctor Name
                    <Typography variant="body1" >
                        {ag.doc_name}
                    </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Specialization
                     <Typography variant="body1" >
                         {ag.specialization}
                     </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Degree 
                    <Typography variant="body1" >
                        {ag.degree}
                    </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Fee 
                     <Typography variant="body1" >
                         {ag.fee}
                     </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Treatment
                     <Typography variant="body1" >
                         {ag.treatment}
                     </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Timming
                     <Typography variant="body1" >
                         {ag.timming}
                     </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Contact 
                     <Typography variant="body1" >
                         {ag.contact}
                     </Typography>
                </Typography>
          <Divider/>

                <Typography gutterBottom variant="h10" component="h2">
                     Address
                    <Typography variant="body1" >
                        {ag.address}
                    </Typography>
                </Typography>
          <Divider/>
          
        
        </CardContent>
      </CardActionArea>
    </Card>
    
  
  </div>
  <Box mt={8}>
        
      </Box>
    </Container>
    </div>
  
                    )
                }
         </Grid>
</Grid>
{/* <Copyright /> */}
    </div>
  );
}
}
export default withStyles(useStyles)(Display);