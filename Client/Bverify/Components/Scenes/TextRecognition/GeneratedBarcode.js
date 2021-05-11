/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Barcode from "react-native-barcode-builder";

import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions,
  
} from 'react-native';

import {generate_barcode} from '../../Redux/Actions'

import { Container, Header, Left, Body, Right, Button, Title, Icon, Content } from 'native-base';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';

import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';




import { useNavigation } from '@react-navigation/native';

// import Api from '../../lib/api';
import Helper from './helper';
// import WordDefinition from '../../components/wordDef';
// import Header from '../../components/header';
import commonStyles from './commonStyles';
import Iconionic from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux'

import Camera, { Constants } from "./TextDetectorCamera";
import WordSelector from "./WordSelector";
import { Actions } from 'react-native-router-flux';

class GeneratedBarcode extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
    



      };
  }




  headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={styles.headerButtonsContainer}>
                      <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                        <IconAnt name="menufold"  size={25} color={"#4f83cc"}/>
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Text style={{fontSize:13,justifyContent:'center',alignSelf:'center'}}>Generated Barcode</Text>
      </Body>
      <Right>
      {/* <Button transparent      onPress={this.showActionSheet} >
          <IconSimple size={25} name='options' color={'#4f83cc'}/>

        </Button> */}
      </Right>
    
    
    </Header></View>
    
    )
    
    
    }else{
    
    
    
    
      return(
        <Header style={styles}>
        <Left>
        
        <View style={styles.headerButtonsContainer}>
                      <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                      <IconAnt name="menufold"  size={25} color={"#4f83cc"}/>
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title>Generated Barcode</Title>
        </Body>
        <Right>
        {/* <Button transparent      onPress={this.showActionSheet} >
        <IconSimple size={25} name='options' color={'#4f83cc'}/>
    
          </Button> */}
        </Right>
      
      
      </Header>
      
      )
    
    
    
    }
    
    
    
    }
    

//this function is for wordselector class



componentDidMount(){
  
}




 


  render() {

    const { height, width } = Dimensions.get('window');


    return (
      <Container>
      {this.headerfunction()}
<Content>
<View>
<Text style={{justifyContent:'center',alignSelf:'center',
fontSize:18, textAlign:'justify',
color:'#364b73',paddingTop:'5%'}}>
Your Generated Barcode by Bverify

</Text>
</View>

<View style={{
  
  paddingTop:'2%',
 height:'100%',
 justifyContent:'center',
 alignSelf:'center',
 color:'#364b73',
 shadowOpacity:1,
 elevation:5,
 
 
 }}>




<Text>

<Barcode value={this.props.barcode_value} format="CODE128"

height={110}
width={1}
lineColor={'#364b73'}
// background={'red'}
 />

</Text>
</View>

<View style={{position:'absolute' ,justifyContent:'center',
  alignSelf:'center', top:'100%'}}>

<Text style={{
  
  
  fontSize:18, 
  textAlign:'justify',
  
  

  }}>{this.props.barcode_value}</Text>

</View>



<View
              style={{
               alignSelf:"center",
                justifyContent: 'center',
             top:'73%'
              }}>

<Button style={styles.buttonvertical} onPressIn={()=> {
  
  Actions.popTo('TextRecogniser')

}}>
                <IconFeather name="repeat"  color={'white'} size={25} style={{left:10}}/>
                <Text style={styles.ButtonText}>Generate Again</Text>
              </Button>
          
            </View>







</Content>



      </Container>
    );
  }
}





const styles = StyleSheet.create({
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingLeft: 4, 
    paddingRight: 4, 
    paddingTop: 2, 
    paddingBottom: 2,
    color:'black',
    borderWidth:4,
  },
  searchInput: {
    padding: 0,
    flex: 1
  },
  // 20200502 - JustCode:
  // Camera icon style
  searchCamera: {
    maxWidth: 50,
    marginLeft: 5,
    padding: 0,
    alignSelf: 'center'
  },


  buttonvertical: {
    width: 200,
    backgroundColor: '#4f83cc',
   
    borderRadius: 12,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    elevation: 7,
  },


  ButtonText: {
    textAlign: 'left', 
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 35,
    width: 200,
 
    color: 'white',
  },



});



const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data,refreshing} = state.Crud_Data;

  const{
    Ocr_Value,
    

  
  
  } = state.BarcodeGenerator;



return{
 

  Ocr_Value:Ocr_Value
}

}



export default connect(mapStatetoProps,{generate_barcode}) (GeneratedBarcode);