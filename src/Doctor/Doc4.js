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
import StarBorder from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';


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
      <div>
    <Typography variant="h3" gutterBottom align="center">
        Doctor Profile
      </Typography>
    <Grid container spacing={3}  justify="center" >
    <List className={classes.root}>
        
    <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Name"  secondary="Dr.Himanshu "/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
        </ListItemAvatar>
        <ListItemText primary="Specialization" secondary="Heart"/>
      </ListItem>
      <Divider />
     
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Degree" secondary="MBBS"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Fees" secondary="Rs.400"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
         
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Treatment Available" secondary="For Depression,Alcohol Problem,Corona" />
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Timing" secondary="10:00 A.M- 02:00 P.M"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
         
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Contact Number" secondary="8979048156"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Address" secondary="Synergy,Agra"/>
      </ListItem>
    
    </List>
    </Grid>
    </div>
    <br></br><br></br>

    <div  align="center" >
<Button  variant="contained" color="primary"  a href="/Doctor/Doctoredit">EDIT DETAILS</Button>
</div>

    </div>  
  );
}
export default Docprofile;