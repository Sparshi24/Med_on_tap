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
// import Link from '@material-ui/core/Link';

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
  
//  function Needdoc() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);
  
//     const handleClick = () => {
//       setOpen(!open);
//     };
  
//     return (
//         <div>
//         <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
//                 <Button variant="contained" color="primary" STYLE="height:80px;width:160px">Need Doctor</Button>
//                  </div><br></br>
//      <center> <List
//         component="nav"
//         aria-labelledby="nested-list-subheader"
//         subheader={
//           <ListSubheader component="div" >
           
//           </ListSubheader>
//         }
//         className={classes.root}
//       >
       
     
//         <ListItem button onClick={handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Diseases or Symptoms" />
//           {open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Cold & Cough" />
//             </ListItem>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Dry Cough" />
//             </ListItem>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Tiredness" />
//             </ListItem>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Sour throat" />
//             </ListItem>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Headache" />
//             </ListItem>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="loss of taste or smell" />
//             </ListItem>
              
//           </List>
          
//         </Collapse>
//       </List></center> 
//       <center><List
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
//         <ListItemText primary="Serious symptoms:" />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItem>
//       <Collapse in={open} timeout="auto" unmountOnExit>
//         <List component="div" disablePadding>
//           <ListItem button className={classes.nested}>
//             <ListItemIcon>
//             <input type="checkbox"></input>
//             </ListItemIcon>
//             <ListItemText primary="difficulty breathing or shortness of breath" />
//           </ListItem>
//           <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Chest pain or pressure" />
//             </ListItem>
              
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//               <input type="checkbox"></input>
//               </ListItemIcon>
//               <ListItemText primary="Loss of speech or movement" />
//             </ListItem>
              
//         </List>
//       </Collapse>
//     </List></center><br></br>
      

//      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
//                 <Button variant="contained" ><Link href="User5" to="User5" >Submit</Link></Button>
//                  </div><br></br>
                 
//       </div>
//     );
//   }
// export default Needdoc;  





import React,{Component} from 'react';
import MaterialTable from 'material-table';
import Axios from 'axios';
import { makeStyles,withStyles, withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = ((theme) => ({

back:{
  margintop:0,
  marginLeft:500,
},
}));

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
    Axios.get('http://localhost:8080/examples/dis.jsp').then(response=>{
      this.setState({arr: response.data.responses})  
    }).catch(err => {
        console.log("Failed");
    })

}
  render() {
    const { classes} = this.props
    return (
      <div>
      <div  >
      <Button    a href="/User/Doccard"  color="inherit" justify="right" >CARD VIEW  </Button>
      </div><br></br><br></br>
      <React.Fragment>
        <MaterialTable style={{marginLeft:'5px', marginRight:'5px'}}
          title="DOCTOR DETAILS"
          columns={[
            { title: 'Doctor Name', field: 'doc_name', type: 'text' },
            { title: 'specialization', field: 'specialization' },
            { title: 'Degree', field: 'degree' },
            { title: 'Fee', field: 'fee' },
            { title: 'Treatment ', field: 'treatment' },
            { title: 'Timming', field: 'timming' },
            { title: 'Contact', field: 'contact' },
            { title: 'Address', field: 'address' },
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
export default withStyles(useStyles)(Odis);