import React, { Component } from "react";
import { 
  TouchableOpacity, 
  View, 
  Image, 
  Platform,
  Text 
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';

export const Constants = {
  ...RNCamera.Constants
};

export default class Camera extends Component {
  camera = null;
  state = {
    cameraType: Constants.Type.back,
    flashMode: Constants.FlashMode.off,
    recognizedText: null
  }

  componentDidMount() {
    this.setState({
      // If enabledOCR is true, then set the cameraType to back only
      cameraType: this.props.enabledOCR ? Constants.Type.back : this.props.cameraType,
      flashMode: this.props.flashMode,
      recognizedText: null
    });
  }

  takePicture = async() => {
    if (this.camera) {
      const options = { 
        quality: this.props.quality, 
        base64: true, 
        width: this.props.imageWidth, 
        doNotSave: true,
        fixOrientation: true,
        pauseAfterCapture: true
      };
      const data = await this.camera.takePictureAsync(options);
    
      this.props.onCapture && this.props.onCapture(data.base64, this.state.recognizedText); 
    }
  };

  onTextRecognized(data) {
    if(this.props.enabledOCR) {
      // console.log('onTextRecognized: ', data);
      if(data && data.textBlocks && data.textBlocks.length > 0) {
        this.setState({recognizedText: data})
      }
    }
  }

  render() {
   
    return(
      <View style={[styles.camera.container, this.props.style]}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera.preview}
          type={this.state.cameraType}
          flashMode={this.state.flashMode}
          ratio={this.props.ratio}
          captureAudio={false}
          autoFocus={this.props.autoFocus}
          whiteBalance={this.props.whiteBalance}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel'
          }}
          onTextRecognized={this.props.enabledOCR ? (data) => this.onTextRecognized(data) : undefined}
        />
        
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity 
            style={styles.camera.capture}
            onPress={_ => {
              switch(this.state.flashMode) {
                case Constants.FlashMode.off:
                  this.setState({flashMode: Constants.FlashMode.auto});
                  break;

                case Constants.FlashMode.auto:
                  this.setState({flashMode: Constants.FlashMode.on});
                  break;

                case Constants.FlashMode.on:
                  this.setState({flashMode: Constants.FlashMode.off});
                  break;
              }
            }}>
            <Image 
              source={
                this.state.flashMode === Constants.FlashMode.auto ?
                require("../../Assets/flashAuto.png")
                // <IconMat name='flash-auto' size={70} color={'white'}/>

                :
                (
                  this.state.flashMode === Constants.FlashMode.on ?
                  require("../../Assets/flashOn.png"):
                  require("../../Assets/flashOff.png")
                )
              } 
              style={{width: 30, height: 30}} resizeMode={'contain'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.camera.capture}>
            {/* <Image source={require("../../Assets/cameraButton.png")} style={{width: 50, height: 50}} resizeMode={'contain'} /> */}
          <IconMat name='circle-slice-8' size={70} color={'white'}/>
          
          </TouchableOpacity>
          {
            // If enabledOCR is true, don't allow user to change camera
            !this.props.enabledOCR ?
            <TouchableOpacity 
              style={styles.camera.capture}
              onPress={_ => {
                if(this.state.cameraType === Constants.Type.back) {
                  this.setState({cameraType: Constants.Type.front});
                }
                else {
                  this.setState({cameraType: Constants.Type.back});
                }
              }}>
              <Image source={require("../../Assets/cameraFlipIcon.png")} style={{width: 40, height: 40}} resizeMode={'contain'} />
            </TouchableOpacity>
            :
            <View style={[styles.camera.capture, {width: 70, height: 70}]}></View>
          }
        </View>
        {
          this.props.onClose && 
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              this.props.onClose && this.props.onClose();
            }}>
            <Icon name={'ios-close'} style={styles.closeButtonIcon} />
          </TouchableOpacity>
        
        }

        {
      
          <View
            style={{position:'absolute',
            top:'12%',left:'20%',right:'10%',
            justifyContent:"center",
            alignItems:"center",
            
            backgroundColor: 'rgba(31, 124, 218, 0.222)', 
  
    borderRadius: 25,
          height:'3%',
          width:'60%'
            }}>
    <Text style={{color:'white'}}>   Take a snap to recognise text   </Text>
          </View>
        }
      </View>
    );
  }
}

Camera.propTypes = {
  cameraType: PropTypes.any,
  flashMode: PropTypes.any,
  autoFocus: PropTypes.any,
  whiteBalance: PropTypes.any,
  ratio: PropTypes.string,
  quality: PropTypes.number,
  imageWidth: PropTypes.number,
  style: PropTypes.object,
  onCapture: PropTypes.func,
  enabledOCR: PropTypes.bool,
  onClose: PropTypes.func
};

Camera.defaultProps = {
  cameraType: Constants.Type.back,
  flashMode: Constants.FlashMode.off,
  autoFocus: Constants.AutoFocus.on,
  whiteBalance: Constants.WhiteBalance.auto,
  ratio: '4:3',
  quality: 0.5,
  imageWidth: 768,
  style: null,
  onCapture: null,
  enabledOCR: false,
  onClose: null,
};

const styles = {
  camera: {
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      //backgroundColor: '#f00',
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  },
  closeButton: {
    position: 'absolute',
    backgroundColor: 'rgba(31, 124, 218, 0.222)', 
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    top: Platform.OS === "ios" ? 55 : 10,
    left: 10
  },
  closeButtonIcon: {
    fontSize: Platform.OS === "ios" ? 35 : 35, 
    fontWeight: 'bold', 
    alignSelf: 'center', 
    color:'white',
    lineHeight: Platform.OS === "ios" ? 53 : 40
  }
};