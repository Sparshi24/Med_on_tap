import { ListItem, ListItemIcon } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ClearAll from '@material-ui/icons/ClearAll';
import ContactsIcon from '@material-ui/icons/Contacts';
import Edit from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from './Contact';
import Doc3 from './Doc3';
import Doc4 from './Doc4';
import Doctoredit from './Doctoredit';


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


class DaDoc extends Component 
{ 
constructor()
{
super();
this.state={
open:false
};
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
// [open, setOpen] = state,setState(true);
const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
return (

<div className={classes.root}>



<CssBaseline />
<AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
<Toolbar className={classes.toolbar}>
<IconButton
edge="start"
color="Inherit"
aria-label="open drawer"
onClick={this.handleDrawerOpen}
className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
>
  
<MenuIcon />
</IconButton>
<Typography component="h1" variant="h6" color="" noWrap className={classes.title}>
DOCTOR DASHBOARD

</Typography>
{/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            {"Hello! " + localStorage.getItem('user')}
                        </Typography> */}

</Toolbar>
</AppBar>
<Drawer
variant="permanent"
classes={{
paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
}}

open={this.state.open}
>
  
<div className={classes.toolbarIcon}>
  
<IconButton onClick={this.handleDrawerClose}>
<ChevronLeftIcon />
</IconButton>
</div>
<Divider/>
{/* <Drawer> */}
<Router> 
    <div> 
               <List>

                     {/* <Link to="/about" className={classes.link} />  */}
                      <ListItem button>
                          <ListItemIcon  STYLE="color:black">  
                            <ContactsIcon onClick={event=>window.location.href="/Doctor/Contact" } />
                            </ListItemIcon>
                        {/* <ListItemText primary={"Doctor Profile"}/>  */}
                        <a href ="/Doctor/Contact" STYLE="color:black">Contacts</a>
                     </ListItem> 
                     <Divider/>

                     {/* <Link to="/about" className={classes.link} />  */}
                      <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <ClearAll onClick={event=>window.location.href="/Doctor/Doc4" }/>
                            </ListItemIcon>
                        {/* <ListItemText primary={"Doctor Profile"}/>  */}
                        <a href ="/Doctor/Doc4" STYLE="color:black">View My Profile</a>
                     </ListItem> 
                     <Divider/>
                        
                     {/* <Link to="/Help" className={classes.link}>  */}
                        <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <Edit  onClick={event=>window.location.href="/Doctor/Doc3"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/Doctor/Doc3" STYLE="color:black">Enter Details</a>
                        </ListItem>
                        <Divider/>

                    </List>
                    </div>
                    </Router>
  
</Drawer>
<Router>
<main className={classes.content}>
<div className={classes.appBarSpacer} />
<Container maxWidth="lg" className={classes.container}>
<Switch> 
<Route path="/Doctor/Contact" component={Contact}></Route>
<Route path="/Doctor/Doc3" component={Doc3}></Route>
<Route path="/Doctor/Doc4" component={Doc4}></Route>
<Route path="/Doctor/Doctoredit" component={Doctoredit}></Route>
</Switch>        
{/* <Copyright /> */}
</Container>
</main> 
</Router>
</div>


);
}
}
export default withStyles(useStyles)(DaDoc);