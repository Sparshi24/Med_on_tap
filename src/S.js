import React, { Component } from 'react';
import {withStyles, withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import Grid from '@material-ui/core/Grid';
// import Contact from './Contact';
import Log from './Log';
import Main from './Doctor/Main';
import Main2 from './Hospital/Main2';
import Main3 from './User/Main3';
import Main4 from './Admin/Main4';
import clsx from 'clsx';
import Sign from './Sign';


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
    marginRight:-11,
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

class ButtonAppBar extends Component {
 render(){
    const { classes} = this.props
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div>        
<div   >
<Router>     
<Switch>
{/* <Route exact path="/Contact" component={Contact}></Route> */}
{/* <Route exact path="/Log" component={Log}></Route> */}
<Route exact path="/" component={Log}></Route>
<Route path="/Doctor" component={Main}></Route>
<Route path="/Hospital" component={Main2}></Route>
<Route path="/User" component={Main3}></Route>
<Route path="/Admin" component={Main4}></Route>
<Route path="/Sign" component={Sign}></Route>
</Switch>
</Router>
    </div>
    </div>
     
  );
}
}
export default withStyles(useStyles)(ButtonAppBar);