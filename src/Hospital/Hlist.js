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
import Divider from '@material-ui/core/Divider';

 
export const secondaryListItems = (
  <div>
      <div>
          <Grid>
      <ListItem button>
      <ListItemIcon>
       <a href="Home" STYLE="color:black"><HomeIcon /></a> 
      </ListItemIcon>
      {/* <ListItemText primary=" Home" /> */}
      <Link href="Home" variant="body2" to="/Home" STYLE="color:black">Home</Link>
    </ListItem>
    <Divider />

    
    <ListItem button>
      <ListItemIcon>
       <a href="About" STYLE="color:black"><InfoIcon /></a> 
      </ListItemIcon>
      <Link href="About Us" variant="body2" to="/About Us" STYLE="color:black">About Us</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
       <a href="Contact" STYLE="color:black"> <ContactsIcon /></a>
      </ListItemIcon>
      <Link href="Contact" variant="body2" to="/Contact Us" STYLE="color:black">Contact Us</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="Hos5" STYLE="color:black" ><ClearAll /></a>
      </ListItemIcon>
      <Link href="Hos5" variant="body2" to="/Hos5" STYLE="color:black">View Details for COVID19</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="Hos3" STYLE="color:black" ><Edit /></a>
      </ListItemIcon>
      <Link href="Hos3" variant="body2" to="/Hos3" STYLE="color:black">Update Details for COVID19</Link>
    </ListItem>
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="Hos6" STYLE="color:black"><ClearAll /></a>
      </ListItemIcon>
      <Link href="Hos6" variant="body2" to="/Hos6" STYLE="color:black">View Details for Others</Link>
    </ListItem> 
    <Divider />


    <ListItem button>
      <ListItemIcon>
      <a href="Hos4" STYLE="color:black" ><Edit /></a>
      </ListItemIcon>
      <Link href="Hos4" variant="body2" to="/Hos4" STYLE="color:black">Update Details for Others</Link>
    </ListItem> 
    <Divider />


    </Grid> 
    </div>
  </div>
);