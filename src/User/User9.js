// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
// import Button from '@material-ui/core/Button';
// import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


// const useStyles = makeStyles((theme) => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//     nested: {
//       paddingLeft: theme.spacing(4),
//     },
//   }));
  
//  function Infoofdoc() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
  
//     const handleClick = () => {
//       setOpen(!open);
//     };
  
//     return (
// <div>
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
//                 <Button variant="contained" color="primary" STYLE="height:80px;width:160px">  Hospital Details</Button>
//                  </div><br></br>
//                  <center><List
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//       subheader={
//         <ListSubheader component="div" id="nested-list-subheader">
         
//         </ListSubheader>
//       }
//       className={classes.root}
//     >
      
//       <ListItem button onClick={handleClick}>
//         <ListItemIcon>
//           <InboxIcon />
//         </ListItemIcon>
//         <ListItemText primary="Details" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItem button className={classes.nested}>
//             <ListItemIcon>
//               <StarBorder />
//             </ListItemIcon>
//             <ListItemText primary="Private Rooms Availability" />
//           </ListItem>
//           <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="General Rooms Availability " />
//             </ListItem>
              
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="AC Room Availability" />
//             </ListItem>

//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary=" Non AC Room Availability" />
//             </ListItem>

//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Rating" />
//             </ListItem>
            
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Contact Number" />
//             </ListItem>

//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Address" />
//             </ListItem>
              
//         </List>
//       </Collapse>
//     </List></center>
//     </div>
//       );
//     }
// export default Infoofdoc;  

import React,{Component} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import Button from '@material-ui/core/Button';

class Odis extends Component {
  constructor() {
    super();
    this.state={
        arr:[]
      };
  }
//   state = {
//     loading:false,
//     base: [],
//   }

  componentDidMount(){
    Axios.get('http://localhost:8080/examples/otherhospdisplay.jsp').then(response=>{
      this.setState({arr: response.data.responses})  
    }).catch(err => {
        console.log("Failed");
    })

}
  render() {
    return (
      <div>
      <div  >
      <Button    a href="/User/Hoscard"  color="inherit" justify="right" >CARD VIEW  </Button>
      </div><br></br><br></br>
      <React.Fragment>
        <MaterialTable style={{marginLeft:'10px', marginRight:'10px'}}
          title="OTHER HOSPITALS DETAILS"
          columns={[
            { title: 'Hospital Name', field: 'hos', type: 'text' },
            { title: 'Private', field: 'p' },
            { title: 'General Rooms', field: 'g' },
            { title: 'AC', field: 'ac' },
            { title: 'NonAC', field: 'non' },
            { title: 'Treatment', field: 'tr' },
            { title: 'Contact', field: 'c' },
            { title: 'Address', field: 'ad' },
            { title: 'Last Updated', field: 'lastupdated' },
            ]}
            data={this.state.arr}
            //  ...this.state.base.map((ag,key) => 
            //     <div key={key+(ag.p)}>
            //         {key},  {ag.p},    {ag.g},  {ag.ac} ,{ag.non}, {ag.tr},{ag.c} , {ag.ad}
            //     </div>
            //     )

        //         }
        //   actions={[
        //     {
        //       icon: 'refresh',
        //       tooltip: 'Refresh',
        //       isFreeAction: true,
        //       onClick: () => this.tableRef.current && this.tableRef.current.onQueryChange(),
        //     }, 
        //   ]}
           options={{
            
            headerStyle: {
            backgroundColor: '#3f51b5',
            color: '#FFFF'
          }}
        }
        />
      </React.Fragment>
      </div>
    );
  }
}
export default Odis;