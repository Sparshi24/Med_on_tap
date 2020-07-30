import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Button from '@material-ui/core/Button';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
  
 function Listofdoc() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  
    return (
<div>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
                <Button variant="contained" color="secondary" STYLE="height:80px;width:160px">List of Doctors </Button>
                 </div><br></br>
                 <center><List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         
        </ListSubheader>
      }
      className={classes.root}
    >
      
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Doctors" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            {/* <ListItemText primary="Doctor 1" /> */}
            <Link href="U3" to="/User6">Doctor 1</Link>
          </ListItem>
          <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              {/* <ListItemText primary="Doctor 2" /> */}
              <Link href="U2" to="/User6">Doctor 2</Link>
            </ListItem>
              
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              {/* <ListItemText primary="Doctor 3" /> */}
              <Link href="U1" to="/User6">Doctor 3</Link>
            </ListItem>
              
        </List>
      </Collapse>
    </List></center>
    </div>
      );
    }
export default Listofdoc;  