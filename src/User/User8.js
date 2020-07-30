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
  
//  function Listofcov() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
  
//     const handleClick = () => {
//       setOpen(!open);
//     };
  
//     return (
// <div>
//     <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
//                 <Button variant="contained" color="secondary" STYLE="height:80px;width:160px">Hospital for COVID19 </Button>
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
//             <ListItemText primary="Bed Details" />
//             {/* <Link href="U3" to="/User6">Bed Details</Link> */}
//           </ListItem>
//           <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Ventilator Details" />
//               {/* <Link href="U2" to="/User6">Ventilator Details</Link> */}
//             </ListItem>
              
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText primary="Plasmatherapay Avability" />
//               {/* <Link href="U1" to="/User6">Plasmatherapay Avability</Link> */}
//             </ListItem>
              
//         </List>
//       </Collapse>
//     </List></center>
//     </div>
//       );
//     }
// export default Listofcov;  

import React,{Component} from 'react';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';

import Axios from 'axios';

class Showhc19 extends Component {
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
    Axios.get('http://localhost:8080/examples/Showhc19.jsp').then(response=>{
      this.setState({arr: response.data.responses})  
    }).catch(err => {
        console.log("Failed");
    })

}
  render() {
    return (
      <div>
      <div  >
      <Button    a href="/User/Covidhospcard"  color="inherit" justify="right" >CARD VIEW  </Button>
      </div><br></br><br></br>
      <React.Fragment>
        <MaterialTable style={{marginLeft:'10px', marginRight:'10px'}}
          title="Hospital for Covid19"
          columns={[
            { title: 'hospitalname', field: 'hospitalname', type: 'text' },
            { title: 'totalbeds', field: 'totalbeds' },
            { title: 'occupiedbeds', field: 'occupiedbeds' },
            { title: 'totalventilators', field: 'totalventilators' },
            { title: 'occupiedventilators', field: 'occupiedventilators' },
            { title: 'plasmatherapy', field: 'plasmatherapy' },
            { title: 'lastupdated', field: 'lastupdated' },
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
export default Showhc19;