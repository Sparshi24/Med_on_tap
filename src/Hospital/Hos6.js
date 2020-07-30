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
import SingleBedOutlinedIcon from '@material-ui/icons/SingleBedOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


 function Otherhospitaldisplay() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Typography variant="h3" gutterBottom align="center">
        Other Hospital Details
      </Typography>
    <Grid container spacing={3}  justify="center" > 
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          
            <SingleBedOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="No Of Private Rooms" secondary="15" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <SingleBedOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="No Of General Rooms" secondary="40" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <SingleBedOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="No Of AC Rooms" secondary="10" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <SingleBedOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="No Of Non AC Rooms" secondary="15" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <SingleBedOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="No Of Ventilator" secondary="14" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <LocalHospitalOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="Treatment Available" secondary="Yes" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <PhoneEnabledOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="Contact Number" secondary="8077690402" />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          
            <BusinessOutlinedIcon />
          
        </ListItemAvatar>
        <ListItemText primary="Address" secondary="Agra" />
      </ListItem>
    </List>
    </Grid>
    </div>
    <br></br><br></br>

    <div  align="center" >
<Button  variant="contained" color="primary"  a href="/Hospital/Covidedit"   >EDIT DETAILS</Button>
</div>

    </div>
  );
}


export default Otherhospitaldisplay;


// import React,{Component} from 'react';
// import Typography from '@material-ui/core/Typography';
// // import { makeStyles } from '@material-ui/core/styles';
// import { withStyles, makeStyles } from '@material-ui/core/styles';

// const useStyles = ((theme) =>({
//   root: {
//     width: '100%',
//     // maxWidth: 500,
//   },
// }));

// class OtherPro extends Component {

//     render()
//     {
//     const {classes} = this.props
    
//     return (
//     <div className={classes.root}>
//         <Typography variant="h3" gutterBottom align="center">
//                         OTHER HOSPITAL PROFILE
//                             </Typography>
                            
// <Typography component="h1" variant="h4"   >
// <table>
// <br></br>
// { "NAME: "  + localStorage.getItem('name') }<br></br>
// { "PRIVATE ROOMS: "  + localStorage.getItem('private') }<br></br>
// { "GENERAL ROOMS: " + localStorage.getItem('general') }<br></br>
// { "AC ROOMS: "  + localStorage.getItem('ac') }<br></br>
// { "NON-AC ROOMS: " + localStorage.getItem('non') }<br></br>
// { "TREATMENT: "  + localStorage.getItem('treatment') }<br></br>
// { "CONTACT: "  + localStorage.getItem('contact') }<br></br>
// { "ADDRESS: "  + localStorage.getItem('address') }<br></br>



// </table>
// </Typography>

//     </div>
//   );
// }
// }
// export default withStyles(useStyles)(OtherPro);