import React, { Component } from 'react';
import {StyleSheet,View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {linechart,Gender_Pie_Chart,Programe_Pie_Chart} from '../../../Redux/Actions'
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,Right,Left,Body,Button } from 'native-base';
import Tab1 from './LineChart';
import Tab2 from './TabSecondCharts';
import ActionSheet from 'react-native-actionsheet';
import { AsyncStorage } from 'react-native';


 class StatesScreen extends Component {




  Logout = async()=>{
    try {
      
  await AsyncStorage.removeItem('userToken', (err, result) => {
        console.log(result);});
  
  await AsyncStorage.removeItem('email', (err, result) => {
        console.log(result);});
  
  await AsyncStorage.removeItem('password', (err, result) => {
          console.log(result);});
  await AsyncStorage.removeItem('Role', (err, result) => {
            console.log(result);});
            
      Actions.reset('DegreeVerifyScreen')
  
  
  
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }
  




  showActionSheet = () => {
    this.ActionSheet.show()
  }


componentDidMount=()=>{

}




  render() {
    return (
      <Container>
        <Header 
        hasTabs>


<Left>

<Button transparent onPress={() => Actions.jump('AdminPanel')}>
                    <Icon name="arrow-back" style={styles.iconSize} />
                  </Button>
</Left>

<Body><Text 

style={{

...Platform.select({
    ios: {
      
    },
    android: {
      
      color:"white",
      fontWeight:'bold'
    },
    default: {
      // other platforms, web for example
    },
  }),



                  }}


>Statistics</Text></Body>


<Right>

<Button transparent onPress={this.showActionSheet}>
                    <Icon name="menu" style={styles.iconSize} />
                  </Button>
</Right>


        </Header>
        <Tabs>
          <Tab heading={ <TabHeading><IconAnt name="piechart" style={styles.iconColor} size={20}></IconAnt>
<Text>Students Stats</Text></TabHeading>}>
            <Tab1 />
          </Tab>



           <Tab heading={ <TabHeading><IconAnt name="linechart" style={styles.iconColor}  size={20}/>
           <Text>Addmission Stats</Text></TabHeading>}>
            <Tab2/>
          </Tab>
          {/* <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
            <Tab3 />
          </Tab>  */}

          
        </Tabs>





        <View>
        {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Select any of the action below to proceed'}
          options={[
            
            // 'User Management',
            // 'About Us',
           
            'Logout',
            
            'cancel',
           
           ]}
          cancelButtonIndex={1}
          destructiveButtonIndex={0}
          onPress={(index) => {  

if(index===0){

this.Logout()

}else if ( index===1){
  


  
 
  }else if (index==2){


  }else if (index==3){


}





          }}
        />


      </View>

        



      </Container>
    );
  }
}


const styles = StyleSheet.create({


  iconSize:{
    fontSize:30
    
      },

iconColor:{


  ...Platform.select({
    ios: {
      color:'#4f83cc'
    },
    android: {
      
      color:'white',
      
    },
    default: {
      // other platforms, web for example
    },
  }),

}





});

const mapStatetoProps = (state)=>{

  const {}= state.FormHandler;

  const{
    
Line_Chart_Response,
programe_pie_response,
gender_pie_response,
  } = state.Charts_Data;


return{
  gender_pie_response:gender_pie_response,
  Line_Chart_Response:Line_Chart_Response,
  programe_pie_response:programe_pie_response,
}

}





export default connect(mapStatetoProps,{linechart,Programe_Pie_Chart,Gender_Pie_Chart})(StatesScreen);

