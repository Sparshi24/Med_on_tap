import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ClearAll from '@material-ui/icons/ClearAll';
import Edit from '@material-ui/icons/Edit';
import LocalHospital from '@material-ui/icons/LocalHospital';
import Divider from '@material-ui/core/Divider';


export const secondaryListItems = (
  <div>
      <div>
          <Grid>
      <ListItem button>
      <ListItemIcon>
      <a href="Home" STYLE="color:black"> <HomeIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary=" Home" /> */}
      <Link href="Home" variant="body2" to="/Home" STYLE="color:black">Home</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="About us" STYLE="color:black" ><InfoIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary=" About Us" /> */}
      <Link href="About Us" variant="body2" to="/About Us" STYLE="color:black">About Us</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="contact" STYLE="color:black"> <ContactsIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Contact Us" /> */}
      <Link href="Contact" variant="body2" to="/Contact" STYLE="color:black">Contact Us</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="User10" STYLE="color:black" ><ClearAll/></a>
      </ListItemIcon>
      {/* <ListItemText primary="Doctor Dashboard" /> */}
      <Link href="User10" variant="body2" to="/User10" STYLE="color:black">View My details</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="User3" STYLE="color:black"><Edit /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Doctor Dashboard" /> */}
      <Link href="User3" variant="body2" to="/User3" STYLE="color:black">Edit Details</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="User7" STYLE="color:black"><LocalHospital /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Doctor Dashboard" /> */}
      <Link href="User7" variant="body2" to="/User7" STYLE="color:black">Need Hospital</Link>
    </ListItem> 
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="User4" STYLE="color:black" ><FavoriteIcon /></a>
      </ListItemIcon>
      {/* <ListItemText primary="Doctor Dashboard" /> */}
      <Link href="User4" variant="body2" to="/User4" STYLE="color:black">Need Doctor</Link>
    </ListItem>
    <Divider />
    
    
    </Grid> 
    </div>
  </div>
);

