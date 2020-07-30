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

class Userdisplay extends Component {
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
    Axios.get('http://localhost:8080/examples/userdis.jsp').then(response=>{
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
      {/* <Button    a href="/User/Doccard"  color="inherit" justify="right" >CARD VIEW  </Button> */}
      </div><br></br><br></br>
      <React.Fragment>
        <MaterialTable style={{marginLeft:'5px', marginRight:'5px'}}
          title="User Detail"
          columns={[
            { title: 'Name', field: 'name', type: 'text' },
            { title: 'Email', field: 'email' },
            { title: 'Phone', field: 'phone' },
            { title: 'Age', field: 'age' },
            { title: 'Disease', field: 'disease' },
            { title: 'Gender', field: 'gender' },
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
export default withStyles(useStyles)(Userdisplay);