import React, {Component} from 'react';
import {Button, Text, Dimensions, View, Alert,StyleSheet,Animated, Modal, TouchableHighlight,LayoutAnimation,ActivityIndicator,TouchableOpacity,UIManager,TouchableWithoutFeedback} from 'react-native';
import {RNCamera} from 'react-native-camera';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconfont from 'react-native-vector-icons/FontAwesome5';
import IconEnt from 'react-native-vector-icons/Entypo';
import {connect} from 'react-redux';
import  ActionSheet  from 'react-native-actionsheet';
import { Container, Header, Content, List, ListItem } from 'native-base';
import {scan_list} from '../../Redux/Actions'
import {Actions} from 'react-native-router-flux';
import BarcodeMask from 'react-native-barcode-mask';
import { ScrollView } from 'react-native-gesture-handler';




if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


 class BarcodeScanner extends Component {



  constructor(props) {
    super(props);

    this.camera = null;

    this.barcodeCodes = [];

    this.state = {
   
      isLoading: false,
      scanned_result:'',

      torchOn: false,
      barcode_type:'',
      animationValue : new Animated.Value(200),
      barcode_height_value:230,
      barcode_line_value:true,
      modalVisible: false,

      DataModal_Visible: false, 


      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },
    };
  }



sanned_history=()=>{

  return(
  
  <View style={{width:'100%'}}> 
  





            {this.barcodeCodes.map(item => {return (
             
             
              <List style={{width:'100%'}}>
                           
            <ListItem  style={{width:'100%'}} onPress={()=>{
if(this.barcodeCodes.length){

if(item.length!==0){
this.props.scan_list(item)
this.setState({modalVisible:false})
this.props.modalVisible(false)
setTimeout(()=>{
  
 
this.props.informationModal(true)
},600)
}


}


            }}>
              <Text>{item}</Text>
            </ListItem>
            </List>
              
              
              )})}
   </View>  

          
  
);

}

setModalVisible = (visible) => {
  this.setState({ modalVisible: visible });
}



 
  componentDidMount=()=>{

  
  }






  CheckQR = (scanresult) => {

    // fetch(
    //   'http://192.168.0.31/COVID19/COVID19/Components/Syncing/PostGRESync_CheckQR.php',
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       qrcode: scanresult,
    //     }),
    //   },
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {


    //     var qrcode = responseJson.qrcode;
        

    //     if (qrcode === -1) {
    //        Alert.alert("Invalid QR Code");
    //     }
    //     else {
    //       Actions.MainScreen({qrcode:responseJson.qrcode});

    //       Alert.alert("Successfully Logged In");
    //     }

    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });

  };

  SurveyResults = (scanresult) => 
  {
    // Actions.SurveyResults({qrcode:scanresult});
  };




  barcodeAnimation=()=>{

    if(this.state.barcode_type=='org.gs1.EAN-13' || this.state.barcode_type=='org.iso.Code128'  ){
    Animated.timing(this.state.animationValue, {
      toValue : 100,
      timing : 800
    }).start(()=>{
      this.setState({viewState : false})
    });
    }
    else{
      Animated.timing(this.state.animationValue, {
        toValue : 200,
        timing : 800
      }).start(this.setState({viewState: true})
      );
    }
  }






  showActionSheet = () => {
    this.ActionSheet.show()
  }
  






  handleTourch= () =>{
    if (this.state.torchOn == true) {
        
        return(


<View style={{position: 'absolute',                                          
       bottom: "13%",                                                    
       right: "37%",
       width:"22%",
       height:"10%",
      //  backgroundColor:'rgba(1,1,1,0.2)',
      //  borderRadius:50,
      //  borderWidth:1,
       borderColor:'#62B1F6',
     
alignItems:'center',
justifyContent:"center"
       }}>
       <TouchableOpacity onPress={()=>{
this.setState({torchOn:false})

       }}>

<IconMaterial name="flashlight-off" color={'#62B1F6'} size={37}/>  
</TouchableOpacity>
</View>


        )
    } else {
    
return(


<View style={{position: 'absolute',                                          
       bottom: "13%",                                                    
       right: "37%",
       width:"22%",
       height:"10%",
      //  backgroundColor:'rgba(1,1,1,0.2)',
      //  borderRadius:50,
      //  borderWidth:1,
       borderColor:'#62B1F6',
     
alignItems:'center',
justifyContent:"center"
       }}>
       <TouchableOpacity onPress={()=>{

this.setState({torchOn:true})
       }}>

<IconMaterial name="flashlight" color={'#62B1F6'} size={37}/>  
</TouchableOpacity>
</View>




)






    }
}


  onBarCodeRead(scanResult) {
    //Author: Sabaoon Bedar
    // console.warn(scanResult.type);
    // console.warn(scanResult.data);
   
 
    if (scanResult.data !== null && scanResult.data.length) {
   
      

      this.setState({barcode_type:scanResult.type})
      this.setState({scanned_result:scanResult.data})
      if(this.state.barcode_type=='org.gs1.EAN-13' || this.state.barcode_type=='org.iso.Code128' || this.state.barcode_type=='org.ansi.Interleaved2of5' ){
         LayoutAnimation.spring()
     this.setState({barcode_height_value:100})
     this.setState({barcode_line_value:false})
      }else{

        this.setState({barcode_height_value:230})
        this.setState({barcode_line_value:true})

      }
      // console.log(scanResult.type)

      if (!this.barcodeCodes.includes(scanResult.data)) {
       
        this.setState({scanned_result:scanResult.data})
        const scanresult = scanResult.data;

        this.barcodeCodes.push(scanResult.data);
        //console.warn('onQRCodeRead call');
        
        /*  Alert.alert(
          'QRCode value is' + scanResult.data,
          'QRCode type is' + scanResult.type,
        );
        */
        const scanresulttype = scanResult.type;
        if(scanResult.data.length){
setTimeout(() => {
  this.showActionSheet()
}, 500);

        }
} 




        




        // const str = scanresult.slice(1, 9);
        // Actions.HomeScreen2({scanresult_1: str});
    //     Alert.alert(
    //       'Barcode Scanned Successfully',
    //       '' + '\n' + 'Scanned : ' + scanresult+'  '+scanresulttype,
    //       [
    //         {
    //           text: 'Cancel',
    //           onPress: () => {console.log('cancel pressed')},
              
    //          // onPress: () => console.log('Cancel Pressed'),
    //           style: 'cancel',
    //         },
    //         {
    //           text: 'Show Results',
    //           onPress: () => this.SurveyResults(scanresult),
    //           //onPress: () => this.CheckQR(scanresult),
    //         },
    //       ],
    //       {cancelable: false},
    //     );

    //   }
    // }
    // return;
  
}}

  async takePicture() {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }



  MainScreen() {
  
  }



  
 

  render() {
   /* <View style={[styles.overlay, styles.bottomOverlay]}>
    <Text>
      Username : {this.props.username}
      Password : {this.props.password}
    </Text>
  </View>
  */
 const { height, width } = Dimensions.get('window');
 const maskRowHeight = Math.round((height - 300) / 6);
 const maskColWidth = (width - 300) / 2;
    return (
      


      
        
      <View style={styles.container}>





{/* information model starts from here */}

    
    <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        // Alert.alert("");
      }}
    >



 <View style={{flex:1,justifyContent:"flex-start",alignItems:'center'}}>

 <View style={{position:"absolute",top:'9%',right:'12%' }}> 


<TouchableOpacity onPress={()=>{this.setModalVisible(modalVisible=false)}}>
 <Text>
 <IconMaterial name="close-circle" color={'#364b73'} size={22}/>  
</Text>

</TouchableOpacity>

</View>



   <View style={{position:"relative",top:'15%'}}>
     <Text style={{color:'#364b73',fontSize:18,fontWeight:"bold"}}>Scanned History</Text>
   </View>   

<View style={{position:"relative",top:'18%',width:'100%',flex:1}}>
<ScrollView>
          {this.sanned_history()}
</ScrollView>
</View>

</View>

          
        
    </Modal>
  
  
  {/* ends here */}



        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          
          useNativeDriver
          captureAudio={false}
          defaultTouchToFocus={true}
          flashMode={this.state.torchOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
          mirrorImage={true}
          onBarCodeRead={this.onBarCodeRead.bind(this)}
          onFocusChanged={() => {this.onBarCodeRead.bind(this)}}
          style={styles.cameraView}
          
          onZoomChanged={() => {}}
          // playSoundOnCapture
         
          // permissionDialogTitle={'Permission to use camera'} 
          // permissionDialogMessage={
          //   'We need your permission to use your camera phone'
          // }

          androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }} >




         <BarcodeMask edgeColor={'#62B1F6'}
          height={this.state.barcode_height_value} 
          showAnimatedLine={this.state.barcode_line_value}
          animatedLineColor={'#62B1F6'}
         />





<View style={{position: 'absolute',                                          
       top: "8%",                                                    
      right:'-32%',
       width:"49%",
      
       borderRadius:50
       }}>

<TouchableOpacity onPress={()=>{

this.setState({modalVisible:true})

}}>

<Text>

<Iconfont name="history" color={'#62B1F6'} size={20}/>  



</Text>


</TouchableOpacity>
  
</View>





<View style={{position: 'absolute',                                          
       top: "8%",                                                    
      left:'10%',
       width:"49%",
      
       borderRadius:50
       }}>

<TouchableOpacity 


onPress={()=>{

this.props.modalVisible(false)

}}>

<Text>

<IconEnt name="cross" color={'#62B1F6'} size={30}/>  



</Text>


</TouchableOpacity>
  
</View>










      
<View style={{position: 'absolute',                                          
       top: "18%",                                                    
       right: "24%",
       width:"49%",
      
       backgroundColor:'rgba(1,1,1,0.2)',
       borderRadius:50
       }}>

<Text style={{color:'white',fontSize:18,fontWeight:'bold',}}>  Find a code to Scan</Text>
  
</View>








{/* {this.state.barcodeCodes}      */}


{this.handleTourch()}

     
   
      
      </RNCamera>



      <View>
        {/* <Text  style={{marginTop:70}}>Open ActionSheet</Text> */}
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title={'Scanned: ' +this.state.scanned_result}
          options={[
         
            'Search',
            'Scan Again',
            'Scanned Codes History',
            
            'cancel',
           
           ]}
          cancelButtonIndex={3}
          // destructiveButtonIndex={2}
          onPress={(index) => {  

if(index===0){

const reg_no = this.state.scanned_result;


this.props.scan_list(reg_no)
 

this.props.modalVisible(false)

setTimeout(()=>{

this.props.informationModal(true)

},300)
       
           

}else if ( index===1){

  
  if (this.barcodeCodes.includes(this.state.scanned_result)) {
     

       this.barcodeCodes.pop(this.state.scanned_result);
       
      
  
  
 
  }}
  
  else if (index==2){

   this.setState({modalVisible:true})

  }





          }}
        />


      </View>



       </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    // borderWidth: 1,
  },
  maskFrame: {
    // backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },




centeredView: {
  
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}





});



const mapStatetoProps = (state)=>{

  const {


  } = state.FormHandler;

  const{
    scan_list_data

  } = state.Crud_Data;


return{
scan_response:scan_list_data,
}

}







export default connect(mapStatetoProps,{scan_list})(BarcodeScanner);