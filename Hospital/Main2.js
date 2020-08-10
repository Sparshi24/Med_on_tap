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
import Hos3 from './Hos3';
import Hos4 from './Hos4';
import Hos5 from './Hos5';
import Hos6 from './Hos6';
import Contact from './Contact';
import ClearAll from '@material-ui/icons/ClearAll';
import Edit from '@material-ui/icons/Edit';
import ContactsIcon from '@material-ui/icons/Contacts';
import Covidedit from './Covidedit';
import Otheredit from './Otheredit';


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
HOSPITAL DASHBOARD

</Typography>



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
                            <ContactsIcon onClick={event=>window.location.href="/Hospital/Contact" } />
                            </ListItemIcon>
                        {/* <ListItemText primary={"Doctor Profile"}/>  */}
                        <a href ="/Hospital/Contact" STYLE="color:black">Contacts</a>
                     </ListItem> 
                     <Divider/>

                     {/* <Link to="/about" className={classes.link} />  */}
                      <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <ClearAll onClick={event=>window.location.href="/Hospital/Hos5" }/>
                            </ListItemIcon>
                        {/* <ListItemText primary={"Doctor Profile"}/>  */}
                        <a href ="/Hospital/Hos5" STYLE="color:black">View Details for COVID19</a>
                     </ListItem> 
                     <Divider/>
                        
                     {/* <Link to="/Help" className={classes.link}>  */}
                        <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <Edit  onClick={event=>window.location.href="/Hospital/Hos3"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/Hospital/Hos3" STYLE="color:black">Enter Details for COVID19</a>
                        </ListItem>
                        <Divider/>

                     {/* <Link to="/Help" className={classes.link}>  */}
                     <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <ClearAll onClick={event=>window.location.href="/Hospital/Hos6"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/Hospital/Hos6" STYLE="color:black">View Details for Others</a>
                        </ListItem>
                        <Divider/>

                                             {/* <Link to="/Help" className={classes.link}>  */}
                                             <ListItem button>
                            <ListItemIcon STYLE="color:black">  
                            <Edit  onClick={event=>window.location.href="/Hospital/Hos4"}/>
                            </ListItemIcon>
                            {/* <ListItemText primary={"help"}/> */}
                        <a href="/Hospital/Hos4" STYLE="color:black">Enter Details for Others</a>
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
<Route path="/Hospital/Contact" component={Contact}></Route>
<Route path="/Hospital/Hos5" component={Hos5}></Route>
<Route path="/Hospital/Hos3" component={Hos3}></Route>
<Route path="/Hospital/Hos6" component={Hos6}></Route>
<Route path="/Hospital/Hos4" component={Hos4}></Route>
<Route path="/Hospital/Covidedit" component={Covidedit}></Route>
<Route path="/Hospital/Otheredit" component={Otheredit}></Route>
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