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
      {/* <div  >
      <Button    a href="/User/Hoscard"  color="inherit" justify="right" >CARD VIEW  </Button>
      </div><br></br><br></br> */}
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