import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Email from '@material-ui/icons/Email';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Pinterest from '@material-ui/icons/Pinterest';
import Phone from '@material-ui/icons/Phone';
import StarBorder from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Docprofile() {
  const classes = useStyles();

  return (  
    <div>
    <Typography variant="h4" gutterBottom align="center" color="inherit">
        Contact Us
      </Typography>
    <Grid container spacing={3}  justify="center" >
    <List className={classes.root}>
        
    <ListItem>
        <ListItemAvatar>
          
          <Email />
          
        </ListItemAvatar>
        <ListItemText primary="E-mail"  secondary="med_on_tap@gmail.com"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <Facebook />
        </ListItemAvatar>
        <ListItemText primary="Facebook" secondary="Med On Tap"/>
      </ListItem>
      <Divider />
     
      <ListItem>
        <ListItemAvatar>
          
          <Instagram />
          
        </ListItemAvatar>
        <ListItemText primary="Instagram" secondary="Med_on_Tap"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <Pinterest />
          
        </ListItemAvatar>
        <ListItemText primary="Pintrest" secondary="www.pintrest.com/Med_on_Tap"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
         
          <Phone />
          
        </ListItemAvatar>
        <ListItemText primary="Toll Free No." secondary="1800-294384" />
      </ListItem>
      
      
    
    </List>
    </Grid>
    </div>  
  );
}
export default Docprofile;