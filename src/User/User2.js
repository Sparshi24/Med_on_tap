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

class User2 extends Component
{
    render()
    {
        return(
          <div><br></br><br></br>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
                      <Button variant="contained" color="Secondary" STYLE="height:100px;width:200px"><Link href="User3" to="/User3">Your Profile</Link></Button>
            </div><br></br><br></br>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >
            <Button variant="contained" color="Secondary" STYLE="height:100px;width:200px"><Link href="User4" to="/User4">Need doctor</Link></Button><br></br>
            </div><br></br><br></br>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}  >


<Button variant="contained" color="Secondary" STYLE="height:100px;width:200px" ><Link href="User7" to="User7">Need Hospital</Link></Button>
</div>
</div>
        );

      }
}
export default User2;             