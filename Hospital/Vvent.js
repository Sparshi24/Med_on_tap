import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LocalHotelRoundedIcon from '@material-ui/icons/LocalHotelRounded';
import Container from '@material-ui/core/Container';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function Hodisplay() {
  const classes = useStyles();

  return (
        <div className={classes.paper}>
             <Typography component="h2" variant="h4">
      Ventilator Details 
    </Typography> 
    <List className={classes.root}>
    <ListItem>
         <ListItemAvatar>
          
            <LocalHotelRoundedIcon />
          
        </ListItemAvatar> 
        <ListItemText primary="Total" secondary="500" />
      </ListItem>
      <Divider variant="inset" component="li" />
       
      <ListItem>
         <ListItemAvatar>
         
            <LocalHotelRoundedIcon />
          
        </ListItemAvatar> 
        <ListItemText primary="Vacant" secondary="250" />
      </ListItem>
      <Divider variant="inset" component="li" />
      
      <ListItem>
        <ListItemAvatar>
         
            <LocalHotelRoundedIcon />
          
        </ListItemAvatar> 
        <ListItemText primary="Occupied" secondary="250" />
      </ListItem>
      <Divider variant="inset" component="li" />
      
      <ListItem>
         <ListItemAvatar> 
          
            < TodayRoundedIcon/>
          
         </ListItemAvatar>  
        <ListItemText primary="Last Updated On" secondary="june 30,2020"/>
      </ListItem>
      

    </List>
    </div>
    
  );
}
