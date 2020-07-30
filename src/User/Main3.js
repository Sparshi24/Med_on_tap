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
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import{BrowserRouter as Router,
  Switch,Route, Redirect} from "react-router-dom";
  import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
  import HomeIcon from "@material-ui/icons/Home";
  import EditIcon from "@material-ui/icons/Edit";
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ListIcon from '@material-ui/icons/List';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import {ListItem,
  ListItemIcon,ListItemText} from "@material-ui/core";
import User3 from './User3';
import User4 from './User4';
import User7 from './User7';
import User10 from './User10';
import User8 from './User8';
import User9 from './User9';
import Contact from './Contact';
import Doccard from './Doccard';
import Hoscard from './Hoscard';
import Covidhospcard from './Covidhospcard';
import ClearAll from '@material-ui/icons/ClearAll';
import Edit from '@material-ui/icons/Edit';
import ContactsIcon from '@material-ui/icons/Contacts';
import LocalHospital from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Useredit from './Useredit';


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
    paddingRight: 10, 
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 2px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.onClick,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width:`calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.onClick,
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
      duration: theme.transitions.duration.onClick,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.onClick,
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
    paddingTop: theme.spacing(0),
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
<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
USER DASHBOARD
</Typography>
 {/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
   {"Hello! " + localStorage.getItem('user')}
</Typography>  */}

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
                            <ContactsIcon onClick={event=>window.location.href="/User/Contact" } />
                            </ListItemIcon>
                        {/* <ListItemText primary={"Doctor Profile"}/>  */}
                        <a href ="/User/Contact" STYLE="color:black">Contacts</a>
                     </ListItem> 
                     <Divider/>

                     {/* <Link to="/about" className={classes.link} />  */}
                      <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <ClearAll onClick={event=>window.location.href="/User/User10" }/>
                            </ListItemIcon>
                        {/* <ListItemText primary={"Doctor Profile"}/>  */}
                        <a href ="/User/User10" STYLE="color:black">View My Details </a>
                     </ListItem> 
                     <Divider/>
                        
                     {/* <Link to="/Help" className={classes.link}>  */}
                        <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <Edit  onClick={event=>window.location.href="/User/User3"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/User/User3" STYLE="color:black">Enter Details </a>
                        </ListItem>
                        <Divider/>

                     {/* <Link to="/Help" className={classes.link}>  */}
                     <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <LocalHospital onClick={event=>window.location.href="/User/User7"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/User/User7" STYLE="color:black">Need Hospital</a>
                        </ListItem>
                        <Divider/>

                                             {/* <Link to="/Help" className={classes.link}>  */}
                                             <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <FavoriteIcon  onClick={event=>window.location.href="/User/Doccard"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/User/Doccard" STYLE="color:black">Need Doctor</a>
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
<Route path="/User/Contact" component={Contact}></Route>
<Route path="/User/User10" component={User10}></Route>
<Route path="/User/User3" component={User3}></Route>
<Route path="/User/User7" component={User7}></Route>
<Route path="/User/Doccard" component={Doccard}></Route>
<Route path="/User/Hoscard" component={Hoscard}></Route>
<Route path="/User/Covidhospcard" component={Covidhospcard}></Route>
<Route path="/User/User4" component={User4}></Route>
<Route path="/User/User8" component={User8}></Route>
<Route path="/User/User9" component={User9}></Route>
<Route path="/User/Useredit" component={Useredit}></Route>
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