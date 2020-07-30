import React,{useState, Component} from 'react';
import { withStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class Needhospital extends Component
{
    render()
    {
        return(
          <div><br></br><br></br>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
                      {/* <Button variant="contained" color="primary" STYLE="height:150px;width:400px">Need Hospital</Button> */}
            </div><br></br><br></br>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
            <Button variant="contained" STYLE="height:100px;width:250px" ><Link href ="/User/Covidhospcard" to="/User/Covidhospcard" >Hospital for Covid-19 </Link></Button><br></br>
            </div><br></br>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >


<Button variant="contained"  STYLE="height:100px;width:250px"><Link href="/User/Hoscard" to="/User/Hoscard" >Other Hospitals </Link></Button>
</div>
</div>
        );

      }
}
export default Needhospital;             