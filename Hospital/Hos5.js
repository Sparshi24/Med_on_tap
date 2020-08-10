// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
// import HotelIcon from '@material-ui/icons/Hotel';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import Button from '@material-ui/core/Button';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function Covid() {
//   const classes = useStyles();

//   return (
//       <div>
//         <div>
//     <Typography variant="h3" gutterBottom align="center">
//     Hospital Profile
//   </Typography>
//   <Grid container spacing={3} justify="center">
//     <List className={classes.root}>
//       <ListItem>
//         <ListItemAvatar>
//             <HotelIcon />
//         </ListItemAvatar>
//         <ListItemText primary="NO.OF BEDS" secondary="500" />
//       </ListItem>
//       <Divider/>
//       <ListItem>
//         <ListItemAvatar>
//             < AddShoppingCartIcon/>
//         </ListItemAvatar>
//         <ListItemText primary="NO.OF VENTILATORS" secondary="450" />
//       </ListItem>
//       <Divider/>
//       <ListItem>
//         <ListItemAvatar>
//             <AssignmentTurnedInIcon />
//         </ListItemAvatar>
//         <ListItemText primary="PLASMA THERAPY" secondary="Yes" />
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
// export default Covid;

import React,{Component} from 'react';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

class Viewcovid19profile extends Component {

    render()
    {
    const {classes} = this.props
    
    return (
    <div >
        <Typography variant="h4" gutterBottom align="center">
                        Covid19 HOSPITAL PROFILE
                            </Typography>
 <center>                          
{/* <Typography gutterBottom variant="h10" component="h2">   */}
<div align="center" justify="center" className={classes.root}>
<Card className={classes.root} align='center'>
      <CardActionArea>
        <CardContent>
        <Typography gutterBottom variant="h10" component="h2">
<br></br><Divider/>

{ "hospitalname:" + localStorage.getItem('hospitalname') }<br></br><Divider/>
{ "totalbeds: "  + localStorage.getItem('totalbeds') }<br></br><Divider/>
{ "occupiedbeds: " + localStorage.getItem('occupiedbeds') }<br></br><Divider/>
{ "totalventilators: "  + localStorage.getItem('totalventilators') }<br></br><Divider/>
{ "occupiedventilators: " + localStorage.getItem('occupiedventilators') }<br></br><Divider/>
{ "plasmatherapy: "  + localStorage.getItem('plasmatherapy') }<br></br><Divider/>
{ "lastupdated: "  + localStorage.getItem('lastupdated') }<br></br><Divider/>
</Typography>



</CardContent>
      </CardActionArea>
    </Card>
    
    
{/* </Typography> */}
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
export default withStyles(useStyles)(Viewcovid19profile);