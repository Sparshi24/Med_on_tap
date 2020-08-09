// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import ImageIcon from '@material-ui/icons/Image';
// import WorkIcon from '@material-ui/icons/Work';
// import BeachAccessIcon from '@material-ui/icons/BeachAccess';
// import Divider from '@material-ui/core/Divider';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import SingleBedOutlinedIcon from '@material-ui/icons/SingleBedOutlined';
// import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
// import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
// import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
// import Button from '@material-ui/core/Button';



// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


//  function Otherhospitaldisplay() {
//   const classes = useStyles();

//   return (
//     <div>
//       <div>
//         <Typography variant="h3" gutterBottom align="center">
//         Other Hospital Details
//       </Typography>
//     <Grid container spacing={3}  justify="center" > 
//     <List className={classes.root}>
//       <ListItem>
//         <ListItemAvatar>
          
//             <SingleBedOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="No Of Private Rooms" secondary="15" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <SingleBedOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="No Of General Rooms" secondary="40" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <SingleBedOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="No Of AC Rooms" secondary="10" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <SingleBedOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="No Of Non AC Rooms" secondary="15" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <SingleBedOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="No Of Ventilator" secondary="14" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <LocalHospitalOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="Treatment Available" secondary="Yes" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <PhoneEnabledOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="Contact Number" secondary="8077690402" />
//       </ListItem>
//       <Divider variant="inset" component="li" />
//       <ListItem>
//         <ListItemAvatar>
          
//             <BusinessOutlinedIcon />
          
//         </ListItemAvatar>
//         <ListItemText primary="Address" secondary="Agra" />
//       </ListItem>
//     </List>
//     </Grid>
//     </div>
//     <br></br><br></br>

//     <div  align="center" >
// <Button  variant="contained" color="primary"  a href="/Hospital/Covidedit"   >EDIT DETAILS</Button>
// </div>

//     </div>
//   );
// }


// export default Otherhospitaldisplay;


import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const useStyles = ((theme) =>({
  root: {
    // width: '-50',
    flexGrow: 4,
    padding: theme.spacing(3),
    maxWidth: 400,
    // minWidth: 100,
    // align:"center",
    // margin:50,
    justify:'center',

  },
}));

class OtherPro extends Component {

    render()
    {
    const {classes} = this.props
    
    return (
    <div >
        <Typography variant="h3" gutterBottom align="center">
                        OTHER HOSPITAL PROFILE
                            </Typography>
                            
                            <center>                          
{/* <Typography gutterBottom variant="h10" component="h2">   */}
<div align="center" justify="center" className={classes.root}>
<Card className={classes.root} align='center'>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h15" component="h3">
<br></br><Divider/>
{ "NAME: "  + localStorage.getItem('hos') }<br></br><Divider/>
{ "PRIVATE ROOMS: "  + localStorage.getItem('private') }<br></br><Divider/>
{ "GENERAL ROOMS: " + localStorage.getItem('general') }<br></br><Divider/>
{ "AC ROOMS: "  + localStorage.getItem('AC') }<br></br><Divider/>
{ "NON-AC ROOMS: " + localStorage.getItem('nonAC') }<br></br><Divider/>
{ "TREATMENT: "  + localStorage.getItem('treatment') }<br></br><Divider/>
{ "CONTACT: "  + localStorage.getItem('contact') }<br></br><Divider/>
{ "ADDRESS: "  + localStorage.getItem('address') }<br></br><Divider/>
{ "LAST UPDATED: "  + localStorage.getItem('lastupdated') }<br></br><Divider/>
</Typography>



</CardContent>
      </CardActionArea>
    </Card>
    <br></br><br></br>

    <div  align="center" >
 <Button  variant="contained" color="primary"  a href="/Hospital/Covidedit"   >EDIT DETAILS</Button>
 </div>


    </div>
    </center>
    </div>
  );
}
}
export default withStyles(useStyles)(OtherPro);