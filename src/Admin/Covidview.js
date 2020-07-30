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
      {/* <div  >
      <Button    a href="/User/Covidhospcard"  color="inherit" justify="right" >CARD VIEW  </Button>
      </div><br></br><br></br> */}
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