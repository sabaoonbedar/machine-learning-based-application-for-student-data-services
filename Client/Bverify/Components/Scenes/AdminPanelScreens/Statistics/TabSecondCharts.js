import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import {Container,Content} from 'native-base';
import _ from 'lodash';
import find from 'lodash/find'
import {connect} from 'react-redux';
import {PieChart} from 'react-native-svg-charts'
import {
 LineChart,
 PieChart as ProgramSecond_Pie,
 PieChart as Gender_Pie,
 PieChart as Verify_Pie,
  BarChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


import {linechart,Graduated_Line_Chart} from '../../../Redux/Actions'
 

class TabSecondChart extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: ''
      },
      labelWidth: 0,


      refreshing: false,
      setRefreshing:false,
    }
  }



//for the loader when you drage it down
wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


 onRefresh = () => {
  this.setState({setRefreshing:true});


 
 this.wait(1000).then(() => {
  this.setState({setRefreshing:false})
//  this.props.listData();
//  this.setState({data:this.props.alumni_data})
//for refreshing the current scene
this.props.Programe_Pie_Chart()
this.props.Verify_Pie_Chart()
this.props.linechart()
this.props.Gender_Pie_Chart()
this.props.Semester_Pie_Chart()
this.props.Degree_Verify_Pie_Chart()
  // Actions.refresh({key: Math.random()})
 
}
 );

}
// ends here





 
  
LineChart_Dynamic=()=>{


if (_.isArray(this.props.Line_Chart_Response)){
if(_.compact(this.props.Line_Chart_Response.length)){

return(
<View>

  <LineChart
    data={{
      labels: this.props.Line_Chart_Response.map(item=>{
        return(
          item.year
        )
      }),
      datasets: [
        {
          data:  this.props.Line_Chart_Response.map(item=>{
            return(
              item.students
            )
          })
          
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    // yAxisLabel="students"
    yAxisSuffix=" stu"
  
  

    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#364b73",
      backgroundGradientFrom: "#4f83cc",
      backgroundGradientTo: "#364b73",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "2",
        strokeWidth: "1",
        stroke: "#4f83cc"
      }
    }}
    bezier
    style={{
      marginVertical: '3%',
      borderRadius: 16
    }}
  />

<Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>Students Admissions Per Year</Text>

</View>
)

} else {


return(


<View style={{justifyContent:"center",alignItems:'center',marginTop:'93%'}}>


<ActivityIndicator size="large" color="#364b73"/>

</View>

)
  }



}else {


  return(
  
  
  <View style={{justifyContent:"center",alignItems:'center',marginTop:'93%'}}>
  
  
  <ActivityIndicator size="large" color="#364b73"/>
  
  
  </View>
  
  
  
  )}

  }


 getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}




graduated_linechart=()=>{


  if (_.isArray(this.props.graduated_line_response)){
  if(_.compact(this.props.graduated_line_response.length)){
  
  return(
  <View>
  
    <LineChart
      data={{
        labels: this.props.graduated_line_response.map(item=>{
          return(
            item.year
          )
        }),
        datasets: [
          {
            data:  this.props.graduated_line_response.map(item=>{
              return(
                item.number
              )
            })
            
          }
        ]
      }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      // yAxisLabel="students"
      yAxisSuffix=" stu"
    
    
  
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "#364b73",
        backgroundGradientFrom: "#e26a00",
        backgroundGradientTo: "#364b73",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16
        },
        propsForDots: {
          r: "2",
          strokeWidth: "1",
          stroke: "#4f83cc"
        }
      }}
      bezier
      style={{
        marginVertical: '3%',
        borderRadius: 16
      }}
    />
  
  <Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>Students Graduated Per Year</Text>
  
  </View>
  )
  
  } else {
  
  
  return(
  
  
  <View style={{justifyContent:"center",alignItems:'center',marginTop:'93%'}}>
  
  
  <ActivityIndicator size="large" color="#364b73"/>
  
  </View>
  
  )
    }
  
  
  
  }else {
  
  
    return(
    
    
    <View style={{justifyContent:"center",alignItems:'center',marginTop:'93%'}}>
    
    
    <ActivityIndicator size="large" color="#364b73"/>
    
    
    </View>
    
    
    
    )}
  
    }
  
  

  



  






  render() {

return(
<Container>
<Content refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }>
<View>

{this.LineChart_Dynamic()}
{this.graduated_linechart()}

</View>
</Content>
</Container>
)


}

}









const styles = StyleSheet.create({
 
});

const mapStatetoProps = (state)=>{

  const {}= state.FormHandler;

  const{
verify_pie_response,
Line_Chart_Response,
programe_pie_response,
gender_pie_response,
graduated_line_response,

  } = state.Charts_Data;


return{
  // gender_pie_response:gender_pie_response,
  Line_Chart_Response:Line_Chart_Response,
  graduated_line_response:graduated_line_response,

  
  // programe_pie_response:programe_pie_response,
  // verify_pie_response:verify_pie_response,
}

}





export default connect(mapStatetoProps,{linechart,Graduated_Line_Chart})(TabSecondChart);







