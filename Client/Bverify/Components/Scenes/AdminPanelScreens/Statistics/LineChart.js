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
import {
  PieChart,
 


} from 'react-native-svg-charts'
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


import {linechart,Programe_Pie_Chart,Gender_Pie_Chart,Verify_Pie_Chart,Semester_Pie_Chart,Degree_Verify_Pie_Chart} from '../../../Redux/Actions'
 

class Line_chart extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      setRefreshing:false,

      selectedSlice: {
        label: '',
        value: ''
      },
      labelWidth: 0,

    pie_label:'',
    pie_value:'',
 

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
        r: "5",
        strokeWidth: "2",
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





programSecond_PieChart=()=>{


  const colors = ['#364b73', '#9900cc', '#4f83cc', '#007efc']

  const keys = _.isArray(this.props.programe_pie_response)?this.props.programe_pie_response.map(item=>{
    return(
      item.programe
    )
  }):[undefined];
  const values = _.isArray(this.props.programe_pie_response)?this.props.programe_pie_response.map(item=>{
    return(
      item.total_students
    )
  }):[undefined];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const screenWidth = Dimensions.get("window").width;


const data = keys.map((key, index) => {
      return {
        key,
        name: keys[index],
        student: values[index],
        color: colors[index],
        legendFontColor: colors[index],
        legendFontSize: 15
      
      
      }
    })


  if(_.isArray(this.props.programe_pie_response)){

    if(_.compact(this.props.programe_pie_response.length)){
    
return(

<View>
<ProgramSecond_Pie
  data={data}
  width={screenWidth}
  height={200}
  chartConfig={chartConfig}
  accessor="student"
  backgroundColor="transparent"
  paddingLeft="15"
  // absolute
/>

<Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>% of Students in Each Programe</Text>



</View>


)

    }else {


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
    
    )
      }
















}





  Programe_PieChart=()=>{


if(_.isArray(this.props.programe_pie_response)){

if(_.compact(this.props.programe_pie_response.length)){




  const { labelWidth, selectedSlice } = this.state;
  const { label, value } = selectedSlice;
  const keys = this.props.programe_pie_response.map(item=>{
    return(
      item.programe
    )
  });
  const values = this.props.programe_pie_response.map(item=>{
    return(
      item.total_students
    )
  });;
  const colors = ['#364b73', '#9900cc', '#4f83cc', '#007efc']
  const data = keys.map((key, index) => {
      return {
        key,
        value: values[index],
        svg: { fill: colors[index] },
        arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.2 : 0 },
        onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } })

      }
    })
  const deviceWidth = Dimensions.get('window').width

  return (
    <View style={{ justifyContent: 'center', flex: 1, marginTop:9,}}>

      <PieChart
        style={{ height: 200 }}
        outerRadius={'80%'}
        innerRadius={'45%'}
        data={data}
        
      />
      <Text
        onLayout={({ nativeEvent: { layout: { width } } }) => {
          this.setState({ labelWidth: width });
        }}
        style={{
          position: 'absolute',
          left: deviceWidth / 2 - labelWidth / 2,
          textAlign: 'center',
          fontWeight:'bold',
          color:'#364b73',
         
        }}>
        {`${label} \n ${value}`}
      </Text>




    </View>
  )







}else {

 
  return(
  
  
  <View style={{justifyContent:"center",alignItems:'center',marginTop:'93%'}}>
  
  
  <ActivityIndicator size="large" color="#364b73"/>
  
  </View>
  
  )
    }
  





}else {
  setTimeout(() => {
    Alert.alert('whoops !', 'Something Went Wrong with the server')
  }, 6000);

  return(
  
  
  <View style={{justifyContent:"center",alignItems:'center',marginTop:'93%'}}>
  
  
  <ActivityIndicator size="large" color="#364b73"/>
  
  </View>
  
  )
    }

  }









  gender_piechart=()=>{


    const colors = ['#364b73', '#9900cc', '#4f83cc', '#007efc']
  
    const keys = _.isArray(this.props.gender_pie_response)?this.props. gender_pie_response.map(item=>{
      return(
        item.gender
      )
    }):['value rendering'];

    const values = _.isArray(this.props.gender_pie_response)?this.props. gender_pie_response.map(item=>{
      return(
        item.number
      )
    }):[null];
  
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
  
  
  const data = keys.map((key, index) => {
        return {
          key,
          name: keys[index],
          student: values[index],
          color: colors[index],
          legendFontColor:colors[index] ,
          legendFontSize: 15
        
        
        }
      })
  
  
    if(_.isArray(this.props.gender_pie_response)){
  
      if(_.compact(this.props. gender_pie_response.length)){
      
  return(
  
  <View style={{padding:10}}>
  <Gender_Pie
    data={data}
    width={screenWidth}
    height={200}
    chartConfig={chartConfig}
    accessor="student"
    backgroundColor='transparent'
    paddingLeft="8"
    

    absolute
    
  />
  
  <Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>No of Male and Female Students</Text>
  
  
  
  </View>
  
  
  )
  
      }else {
  
  
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
      
      )
        }
  
  
 
  
  }
  
  




  
    
    
    
    








  verify_piechart=()=>{


    const colors = ['#4f83cc', '#c61aff']
  
    const keys = _.isArray(this.props.verify_pie_response)?this.props. verify_pie_response.map(item=>{
      return(
        item.status
      )
    }):[undefined];
    const values = _.isArray(this.props.verify_pie_response)?this.props. verify_pie_response.map(item=>{
      return(
        item.total_students
      )
    }):[undefined];
  
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
  
  
  const data = keys.map((key, index) => {
        return {
          key,
          name: keys[index],
          student: values[index],
          color: colors[index],
          legendFontColor:colors[index] ,
          legendFontSize: 15
        
        
        }
      })
  
  
    if(_.isArray(this.props.verify_pie_response)){
  
      if(this.props.verify_pie_response.length){
      
  return(
  
  <View style={{padding:10}}>
  <Verify_Pie
    data={data}
    width={screenWidth}
    height={200}
    chartConfig={chartConfig}
    accessor="student"
    backgroundColor='transparent'
    paddingLeft="8"
    

    absolute
    
  />
  
  <Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>No of students with dues clearification</Text>
  
  
  
  </View>
  
  
  )
  
      }else {
  
  
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
      
      )
        }
  

  
  }
  
  







  Semester_piechart=()=>{


    const colors = ['#778991', '#c61aff','#99aaff','#000000','#ff6b00','#c4005f','#00bf63','#4f83cc','#9b00a6','#001cab','#b80000','#c300ff']
  
    const keys = _.isArray(this.props.semester_pie_response)? this.props. semester_pie_response.map(item=>{
      return(
        item.semester
      )
    }):[undefined];
    const values = _.isArray(this.props.semester_pie_response)? this.props. semester_pie_response.map(item=>{
      return(
        item.students
      )
    }):[undefined];
  
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
  
  
  const data = keys.map((key, index) => {
        return {
          key,
          name: keys[index],
          student: values[index],
          color: colors[index],
          legendFontColor:colors[index] ,
          legendFontSize: 16,
        
        }
      })
  
  
    if(_.isArray(this.props.semester_pie_response)){
  
      if(this.props.semester_pie_response){
      
  return(
  
  <View style={{padding:10}}>
  <Verify_Pie
    data={data}
    width={screenWidth}
    height={200}
    chartConfig={chartConfig}
    accessor="student"
    backgroundColor='transparent'
    paddingLeft="8"
    hasLegend={true}

    // absolute
    
  />
  
  <Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>% of semester based Students</Text>
  
  
  
  </View>
  
  
  )
  
      }else {
  
  
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
      
      )
        }
  

  
  }
  
  





  degree_verify_piechart=()=>{


    const colors = ['#364b73','#007efc']
  
    const keys = _.isArray(this.props.degree_pie_response)?this.props.degree_pie_response.map(item=>{
      return(
        item.status
      )
    }):[undefined];
    const values = _.isArray(this.props.degree_pie_response)?this.props.degree_pie_response.map(item=>{
      return(
        item.number
      )
    }):[undefined];
  
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const screenWidth = Dimensions.get("window").width;
  
  
  const data = keys.map((key, index) => {
        return {
          key,
          name: keys[index],
          student: values[index],
          color: colors[index],
          legendFontColor:colors[index] ,
          legendFontSize: 15
        
        
        }
      })
  
  
    if(_.isArray(this.props.degree_pie_response)){
  
      if(this.props.degree_pie_response.length){
      
  return(
  
  <View style={{padding:10}}>
  <Verify_Pie
    data={data}
    width={screenWidth}
    height={200}
    chartConfig={chartConfig}
    accessor="student"
    backgroundColor='transparent'
    paddingLeft="8"
    

  
    
  />
  
  <Text style={{fontSize:16,fontWeight:"bold",textAlign:'center', color:'#364b73'}}>% of Verified and Not Verified Students</Text>
  
  
  
  </View>
  
  
  )
  
      }else {
  
  
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
      
      )
        }
  

  
  }
  
  




  










  render() {

return(
<Container>
<Content  refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }  >
<View>



{this.Programe_PieChart()}
{this.programSecond_PieChart()}

{this.gender_piechart()}
{this.verify_piechart()}
{this.Semester_piechart()}
{this.degree_verify_piechart()}

</View></Content>
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
semester_pie_response,
degree_pie_response,
  } = state.Charts_Data;


return{
  gender_pie_response:gender_pie_response,
  Line_Chart_Response:Line_Chart_Response,
  programe_pie_response:programe_pie_response,
  verify_pie_response:verify_pie_response,
  semester_pie_response:semester_pie_response,
  degree_pie_response:degree_pie_response,
}

}





export default connect(mapStatetoProps,{linechart,Programe_Pie_Chart,Gender_Pie_Chart,Verify_Pie_Chart,Semester_Pie_Chart,Degree_Verify_Pie_Chart})(Line_chart);







