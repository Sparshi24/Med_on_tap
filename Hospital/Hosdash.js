import React,{Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles , } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import { secondaryListItems } from './Hlist';
import Hos from './Hos';
import Hos1 from './Hos1';
import Hos2 from './Hos2';
import Hos3 from './Hos3';
import Hos4 from './Hos4';
import Bed from './Bed';
import Vent from './Vent';
import Hos5 from './Hos5';
import Hos6 from './Hos6';
import Vbed from './Vbed';
import Vvent from './Vvent';
import Contact from './Contact';
import Plasma from './Plasma';



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

const drawerWidth = 240;

const useStyles =((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

class Demo extends Component 
{   constructor()
  {
    super();
    this.state={
      open:false
    }
  }
 
   handleDrawerOpen = () => {
     this.setState({open:true})
  };
   handleDrawerClose = () => {
    this.setState({open:false})
  };
   


render()  
{
  const {classes} = this.props;
  //  [open, setOpen] = state,setState(true);
   const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerOpen}
            className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            HOSPITAL DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
        }}
        open={this.open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="center">
        <div>
         <Router>
            <Switch>

                <Route exact path='/Hospital Dashboard' component={Hos}></Route>
                <Route exact path='/Hos' component={Hos}></Route>
                <Route exact path='/Hos1' component={Hos1}></Route>
                <Route exact path='/Hos2' component={Hos2}></Route>
                <Route exact path='/Hos3' component={Hos3}></Route>
                <Route exact path='/Hos4' component={Hos4}></Route>
                <Route exact path='/Bed' component={Bed}></Route>
                <Route exact path='/Vent' component={Vent}></Route>
                <Route exact path='/Hos5' component={Hos5}></Route>
                <Route exact path='/Hos6' component={Hos6}></Route>
                <Route exact path='/Vbed' component={Vbed}></Route>
                <Route exact path='/Vvent' component={Vvent}></Route>
                <Route exact path='/Contact' component={Contact}></Route>
                <Route exact path='/Plasma' component={Plasma}></Route>
                <Redirect to="/Hosdash"/>
            </Switch>
         </Router>
       </div>

          </Grid>
          <Box pt={4}>
            {/* <Copyright /> */}
          </Box>
        </Container>
      </main>
    </div>
    
    
  );
}
}
export default withStyles(useStyles)(Demo);