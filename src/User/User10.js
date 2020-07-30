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
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
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
        My Profile
      </Typography>
    <Grid container spacing={3}  justify="center" >
    <List className={classes.root}>
        
    <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Name"  secondary="priya "/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
        </ListItemAvatar>
        <ListItemText primary="E-mail" secondary="priya@gmail.com"/>
      </ListItem>
      <Divider />
     
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Phone No." secondary="9264810095"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
          
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Age" secondary="38"/>
      </ListItem>
      <Divider />
      
      <ListItem>
        <ListItemAvatar>
         
          <StarBorder />
          
        </ListItemAvatar>
        <ListItemText primary="Gender" secondary="Female" />
      </ListItem>
      
      
    
    </List>
    </Grid>
    <Router>
      <Switch>
        <Redirect to="../Userdash/User10"/>
      </Switch>
    </Router>
    <br></br><br></br>

    <div  align="center" >
<Button  variant="contained" color="primary"  a href="/User/Useredit"   >EDIT DETAILS</Button>
</div>

</div> 
    </div>  
  );
}
export default Docprofile;