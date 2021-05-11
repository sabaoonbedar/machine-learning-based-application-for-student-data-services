/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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

import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';





import { useNavigation } from '@react-navigation/native';

// import Api from '../../lib/api';
import Helper from '../TextRecognition/helper';
// import WordDefinition from '../../components/wordDef';
// import Header from '../../components/header';
import commonStyles from './commonStyles';
import Iconionic from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux'

import Camera, { Constants } from "../TextRecognition/TextDetectorCamera";
import WordSelector from "./WordSelector";
import { Actions } from 'react-native-router-flux';

class TextRecogniser extends React.Component {
  constructor(props) {
    super(props);
  
    // Add in showCamera, showWordList and recogonizedText state
    this.state = {
      userWord: '',
      errorMsg: '',
      loading: false, 
       definition: null,
       showCamera: false, 
       showWordList: false, 
       recogonizedText: null};
  }




  headerfunction(){

    if(Platform.OS == 'ios'){
    return(
      <View>
      <Header transparent>
      <Left>
    
      <View style={styles.headerButtonsContainer}>
                      <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                        <Icon name="arrow-back"   />
                      </Button>
                    </View>
       
      </Left>
      <Body>
        <Title style={{fontSize:15}}>Recognise</Title>
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
                        <Icon name="arrow-back"  />
                      </Button>
                    </View>
         
        </Left>
        <Body>
          <Title style={{fontSize:15}}>Recognise</Title>
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

onCancelProcess=()=>{

  this.setState({showWordList: false});


}

componentDidMount(){
  if(this.props.wordListOff==false){
    console.log(this.props.wordListOff)
  this.setState({showWordList: this.props.wordListOff});
  }
}




  onUserWordChange(text) {
    this.setState({userWord: text});
  }

//   async onSearch() {
//     if(this.state.userWord.length <= 0) {
//       this.setState({errorMsg: 'Please specify the word to lookup.'})
//       return;
//     }

//     try {
//       this.setState({loading: true});
//       let lemmas = await Api.getLemmas(this.state.userWord);
//       console.log('Lemmas: ', lemmas);
//       if(lemmas.success) {
//         let headWord = Helper.carefullyGetValue(lemmas, ['payload', 'results', '0', 'lexicalEntries', '0', 'inflectionOf', '0', 'id'], '');
//         console.log('Headword is: ', headWord);
//         if(headWord.length > 0) {
//           let wordDefinition = await Api.getDefinition(headWord);
//           if(wordDefinition.success) {
//             this.setState({errorMsg: '', loading: false, definition: wordDefinition.payload});
//             console.log('Word Definition: ', wordDefinition.payload);
//           }
//           else {
//             this.setState({errorMsg: 'Unable to get result from Oxford: ' + wordDefinition.message, loading: false, definition: null});
//           }
//         }
//         else {
//           this.setState({errorMsg: 'Invalid word. Please specify a valid word.', loading: false, definition: null});
//         }
//       }
//       else {
//         this.setState({errorMsg: 'Unable to get result from Oxford: ' + lemmas.message, loading: false, definition: null});
//       }
//     } catch (error) {
//       console.log('Error: ', error);
//       this.setState({loading: false, errorMsg: error.message, definition: null});
//     }
//   }

  
  // Receive the recogonizedText from the Camera module
  onOCRCapture(recogonizedText) {
    console.log('onCapture', recogonizedText);
    this.setState({showCamera: false, showWordList: Helper.isNotNullAndUndefined(recogonizedText), recogonizedText: recogonizedText});
  }

  // Author Sabaoon bedar
  // Receive the word selected by the user via WordSelector component
  onWordSelected(word) {
    this.setState({showWordList: false, userWord: word});
    if(word.length > 0) {
      // setTimeout(() => {
        
      
      // }, 200);
      Actions.GeneratedBarcode({
        barcode_value:word
        
               })
    }
  }

  render() {

    const { height, width } = Dimensions.get('window');


    return (
      <>
      <ImageBackground source={require('../../Assets/shap.jpg')} style={{
        resizeMode:"cover",
        width:'100%', 
        height:'100%',
        }}>
<View style={{flex:1,}}>
{this.headerfunction()}



       
         <Content>
            



  
          

            {/* <View style={styles.searchBox}>
              <TextInput style={styles.searchInput}
                onChangeText={text => this.onUserWordChange(text)}
                placeholder={'key for making barcode'}
                value={this.state.userWord}
              />
         
            </View> */}

          
       {   Platform.OS == 'ios'?
         
           <View style={{height:230,width:230, backgroundColor:'#364b73', borderRadius:200,top:height/4.3, justifyContent:'center',alignSelf:'center',}}>
            <View style={{height:230,width:190, backgroundColor:'#2f72ed', borderRadius:200,top:height/700, justifyContent:'center',alignSelf:'center',shadowOpacity:1}}>

</View>
</View>
:

 <View></View>


       }      
  
{ 
  Platform.OS == 'ios'?

  <TouchableWithoutFeedback style={{height:30}} onPress={() => {
                this.setState({showCamera: true});
              }} >        
<View style={{
height:200,
width:200,
borderRadius:200,
justifyContent:'center',
alignItems:'center',
position:'absolute',
top:height/4,
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',
shadowOpacity:1,
elevation:7,
shadowOffset:{
  width:2,
  height:2
},
borderWidth:0.2,
shadowColor:'#364b73'
}}>
          {/* <Text style={{color:'#4f83cc',justifyContent:"center",alignItems:"center",fontSize:35}}>Generate {'\n'} barcode</Text> */}
                <IconMat name="barcode-scan" size={106} color="#364b73"  />
                        <Text style={{color:'#364b73',justifyContent:"center",alignItems:"center",fontSize:28,position:'absolute',top:140}}>Generate </Text>

</View>
</TouchableWithoutFeedback>  
:

<TouchableOpacity onPress={() => {
                this.setState({showCamera: true});
              }}


style={{
height:200,
width:200,
marginTop:'50%',
borderRadius:200,
justifyContent:'center',
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
backgroundColor:'white',

shadowOpacity:1,
elevation:7,
shadowOffset:{
  width:2,
  height:2
},
borderWidth:0.4,
shadowColor:'#364b73',
borderColor:'#364b73'


}}>
 <IconMat name="barcode-scan" size={100} color="#364b73"  />
                        <Text style={{color:'#364b73',justifyContent:"center",alignItems:"center",fontSize:25,position:'absolute',top:140}}>Generate </Text>

</TouchableOpacity>

}
            <View style={{minHeight: 10, maxHeight: 10}}></View>

            {/* <Button
              title="Search"
              onPress={() => this.onSearch()}
            /> */}

            {
              this.state.errorMsg.length > 0 &&
              <Text style={commonStyles.errMsg}>{this.state.errorMsg}</Text>
            }

            {/* Display word definition as custom component */}
            </Content>
            
            </View></ImageBackground>
        {
   
          // Display the camera to capture text
          this.state.showCamera &&
          <Camera
            cameraType={Constants.Type.back}
            flashMode={Constants.FlashMode.off}
            autoFocus={Constants.AutoFocus.on}
            whiteBalance={Constants.WhiteBalance.auto}
            ratio={'4:3'}
            quality={0.5}
            imageWidth={800}
            enabledOCR={true}
            onCapture={(data, recogonizedText) => this.onOCRCapture(recogonizedText)} 
            onClose={_ => {
              this.setState({showCamera: false});
            }}
          />
        }
        {
 
          // Display the word list capture by the camera and allow user to select
          this.state.showWordList &&
         
          <WordSelector wordBlock={this.state.recogonizedText} onWordSelected={(word) => this.onWordSelected(word)}
          
          showWordList={(value)=>{this.setState({showWordList:value})}} 
          showCamera={(value)=>{this.setState({showCamera:value})}} 

           />
        }
        {
          this.state.loading &&
          <ActivityIndicator  size="large" color={'#219bd9'} />
        }
      </>
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
  }
});



const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data,refreshing} = state.Crud_Data;

  const{
    Ocr_Value,
    
    wordListOff,
  
  
  } = state.BarcodeGenerator;



return{
  wordListOff:wordListOff,

  Ocr_Value:Ocr_Value
}

}



export default connect(mapStatetoProps,{generate_barcode}) (TextRecogniser);