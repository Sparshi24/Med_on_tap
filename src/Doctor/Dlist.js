import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info'
import ExitToApp from '@material-ui/icons/ExitToApp';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ClearAll from '@material-ui/icons/ClearAll';
import Edit from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';


export const secondaryListItems = (
  <div>
      <div>
          <Grid>
      <ListItem button>
      <ListItemIcon>
       <a href="/Home" STYLE="color:black"> <HomeIcon onClick={event =>  window.location.href='/Home'} /></a>
      </ListItemIcon >
      {/* <ListItemText primary=" Home" /> */}
      <Link href="/Home" variant="body2" to="/Home" STYLE="color:black">Home</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
       <a href="/About" STYLE="color:black" ><InfoIcon/></a>
      </ListItemIcon>
      {/* <ListItemText primary=" About Us" /> */}
      <Link href="/About" variant="body2" to="/About Us" STYLE="color:black">About Us</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="/Contact" STYLE="color:black" > <ContactsIcon onClick={event =>  window.location.href='/Contact'} /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Contact Us" /> */}
      <Link href="/Contact" variant="body2" to="/Contact" STYLE="color:black">Contact Us</Link>
    </ListItem>
    <Divider />

    
     <ListItem button>
      <ListItemIcon>
      <a href="/Doctor/Doc4" STYLE="color:black" ><ClearAll onClick={event =>  window.location.href='/Doc4'} /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Doctor Dashboard" /> */}
      <Link href="/Doctor/Doc4" variant="body2" to="/Doctor/Doc4" STYLE="color:black">View My Details</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="/Doctor/Doc3" STYLE="color:black"><Edit onClick={event =>  window.location.href='/Doc3'} /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Doctor Dashboard" /> */}
      <Link href="?Doctor/Doc3" variant="body2" to="/Doctor/Doc3" STYLE="color:black">Update Details</Link>
    </ListItem>
    <Divider />

    
    {/* <ListItem button>
      <ListItemIcon>
        <a href="Demo" STYLE="color:black"><ExitToApp /></a>
      </ListItemIcon>
       <ListItemText primary="Doctor Dashboard" />
      <Link href="Demo" variant="body2" to="/Demo" STYLE="color:black">Log Out</Link>
    </ListItem>
    <Divider /> */}


    </Grid>
    </div>
  </div>
);

