import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import SwipeablePanel from 'rn-swipeable-panel';
import AdminBottomPanel from '../../../Drawer/AdminBottomPanel';
import Scanner from '../../Scanners/BarcodeScanner'
import IconEnt from 'react-native-vector-icons/Entypo';
import _ from 'lodash';

import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  FlatList,
  ActivityIndicator,
  Modal,
  LayoutAnimation,
Dimensions,
TouchableHighlight,
ImageBackground,
TouchableOpacityBase

} from 'react-native';

import 'react-native-gesture-handler';

import {
  Body,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Subtitle,
  Title,
  Item,
  Input,
  Button,
  Footer,
  FooterTab,
  Badge,
  Card,
  CardItem,
  Drawer,
  List,
  ListItem,
  

} from 'native-base';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {ScrollView} from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

 class FeeVerifyScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      //for aliasing when Colon is used
      isLoading: false,
      search: '',
      modalVisible:false,
      information_modal:false,
    };
  }
componentDidMount=()=>{


}


  setModalVisible = (visible) => {
    

    this.setState({ modalVisible: visible });

  }

// modal function from here

  setInformationModalVisible = (visible) => {
    // console.log(this.props.scan_response)
    if(this.props.scan_response){
      if(this.props.scan_response.length){
    this.setState({ information_modal: visible });
      }else{
   
        
        Alert.alert('We do not have any information for the scanned barcode in our records')
    
      
        }
  
  }

    else{
   
      Alert.alert('There seems some problem from the server side')
  
    
      }
  }


  updateSearch = search => {
    this.setState({search});
  };

  componentDidMount = async () => {
    //as soon as this second scene is lounched, this method would be automatically called.
  };

  openPanel = () => {
    this.setState({ swipeablePanelActive: true });
};

closePanel = () => {
    this.setState({ swipeablePanelActive: false });
};

  



  render() {
    const {search} = this.state;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 7,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderwidth: 1,
              marginBottom: -170,
            }}>
            <Image
              source={require('../../../Assets/loaderblack.gif')}
              style={{width: 56, height: 56}}
            />
            <Image
              source={require('../../../Assets/loadingText.gif')}
              style={{width: 70, height: 21, marginTop: 15}}
            />
          </View>

          <View
            style={{
              flex: 2,
              justifyContent: 'flex-start',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'gray',
                fontSize: 20,
              }}>
              Bverify
            </Text>
          </View>
        </View>
      );
    }
    /*<Left>
            <Button transparent onPress={() => this.Back()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>*/
    //header area starts from here*********************************************************************************
    return (
      
      <Container>


<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.information_modal}
          onRequestClose={() => {
           console.log('close')
          }}
 >


{/* starts from here */}

<View style={{height:windowHeight}}>
    




    {_.isArray(this.props.scan_response) ? this.props.scan_response.map((item)=>{return(

    
    
    <ImageBackground source={require('../../../Assets/shap.jpg')} style={{
            resizeMode:"cover",
         height:windowHeight
            }}>
    
   
    <View style={{
      width:windowWidth,
    height:windowHeight,
    flex:1,
    top:'7%',
    }}>
    
    
    

    <View style={{flexDirection:"row"}}>
    <View style={{
                // backgroundColor:'white',
              
          //       borderTopLeftRadius:123,
          // borderBottomRightRadius:123,
                paddingLeft:'4%',
                paddingTop:'2%',
                paddingBottom:'2%',
              
              }}>
                    <Text style={{
                      fontSize:35,
                    textAlign:'left',
                    color:'#364b73',
                    fontWeight:'bold'
                    }}>
                    
    {item.name}
               </Text>
    </View>
    

<View  style={{position:"absolute",top:'8%',right:'10%'}}>
    <TouchableOpacity onPress={()=>{
this.setInformationModalVisible(false);
    }}>
<Text>
<IconEnt name="cross"  color={'#4f83cc'} size={34}/>  
</Text>

</TouchableOpacity>
 
</View>
    


    </View>


    
    <View style={{
     
    width:'96%',
    backgroundColor:'white',
    left:'2%',
    
         borderTopLeftRadius:10,
      height:'12%'
    
    }}>
    <ScrollView alwaysBounceVertical>
    
    <Text style={{
      fontSize:17,
    textAlign:'left',
    padding:'2%',
   
   
    }}>
    <Text style={{fontWeight:'bold', color:'#364b73' }}>{item.name}</Text> son of <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.father_name}</Text> has remaining balance of <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.balance} Rs.</Text> in <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.semester}</Text> Semester and his dues are <Text style={{fontWeight:'bold',color:'#364b73'}}>{item.status}</Text>. 
                      
       
      </Text>
    </ScrollView>
    
      </View>
    
    
     
    
    
    
    <View style={{ flex:1, width:'96%',left:'2%'}}>
    
                
    
    <ScrollView>
      
    
    
                    <List>
                   
                    
                <ListItem itemDivider  style={{backgroundColor:'#364b73',borderRadius:6,}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}>Personal Information</Text>
                </ListItem>                    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Registration No#:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.registration_num}</Text>
                </Body>
                
                </ListItem>
               
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Name:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.name}</Text>
                </Body>
                
                </ListItem>
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Father Name:</Text>
                  </Left>
                <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>
    
                    {item.father_name}
                     
                  
                  </Text>
                </Body>
                
                </ListItem>
               
    
    
    
            
                
            
    
                <ListItem itemDivider  style={{backgroundColor:item.status=="Cleared"||item.status=="cleared"?'#364b73':'#750909',borderRadius:6,}}>
                  <Text style={{fontSize:16,fontWeight:'bold',color:'white'}}> Fee Information</Text>
                </ListItem> 
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Semester:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.semester}</Text>
                  </Body>
              
                </ListItem>
    
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Balance:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:'#364b73',fontWeight:'bold'}}>{item.balance}</Text>
                  </Body>
              
                </ListItem>
    
                <ListItem>
                <Left>
                <Text style={{color:'#364b73'}}>Status:</Text>
                  </Left>
                  <Body>
                  <Text style={{color:item.status=="Cleared"||item.status=="cleared"?'#364b73':'#750909',fontWeight:'bold'}}>{item.status}</Text>
                  </Body>
              
                </ListItem>
  
    

    
    
              </List>
            
    
    
    
              
    
              </ScrollView> 
               
             
    
    </View>
      
    
    
    
    
    </View>
    
    <View></View>
    
    

    
    </ImageBackground>
    
    )}):<ActivityIndicator/>
    
    
    
    }

    </View>
      
         
    
    
    

 </Modal>



<Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
           console.log('close')
          }}

        
      
        >
    
        
<Scanner
 modalVisible={this.setModalVisible}
informationModal={this.setInformationModalVisible}
/>
            
           
      
        </Modal>









      <Header style={{backgroundColor:'white'}}>
            <View style={styles.columncontainer}>
              <View style={styles.rowcontainer}>
                <View style={styles.headerButtonsContainer}>
                  <Button transparent onPress={() => Actions.jump('AdminPanel')}>
                    <Icon name="arrow-back" style={[styles.iconSize,styles.iconColor]}  />
                  </Button>
                </View>
                <View style={styles.TitleContainer}>
                  <Title 
                  style={{

...Platform.select({
    ios: {
      
    },
    android: {
      
      color:"#364b73",
      fontWeight:'bold'
    },
    default: {
      // other platforms, web for example
    },
  }),}}
                  >Fee Verification</Title>
                </View>

                <View style={styles.headerButtonsContainer}>
                  <Button transparent onPress={() => this.openPanel()}>
                    <Icon name="menu" style={[styles.iconSize,styles.iconColor]} />
                  </Button>
                </View>
              </View>

              {/* <View style={styles.searchcontainer}>
                <SearchBar
                  platform="ios"
                  cancelButtonTitle="Search"
                  containerStyle={{
                    ...Platform.select({
                      ios: {},
                      android: {
                        backgroundColor: null,
                         },
                      default: {
                        // other platforms, web for example
                      },
                    }),
                  }}
                  //onCancel when you want to call function on cancel
                  inputContainerStyle={{backgroundColor: 'white'}}
                  placeholder="Search RegistrationNum"
                  onChangeText={this.updateSearch}
                  value={search}
                  cancelButtonProps={{
                    ...Platform.select({
                      ios: {},
                      android: {
                        color: 'white',
                        fontWeight: 'bold',
                      },
                      default: {
                        // other platforms, web for example
                      },
                    }),
                  }}
                  onCancel={() => Alert.alert('hellow')}
                />
              </View> */}
            </View>
          </Header>

        <Content>
          <View style={styles.MainContainer}>
            <View style={styles.ImageContainer}>
              <Image
                source={require('../../../Assets/feesverify.gif')}
                style={{width: 300, height: 130}}
              />
            </View>
            <Card style={{width: '100%'}} transparent>
              <CardItem>
                <Body>
                  <Text style={styles.textbody}>
                    To know that the dues are remaining on a student or not, press on the
                    below button and scan the barcode of the fee slip 
                    or you can search by name.
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <View style={styles.buttonContainer}>
              <Button
                style={styles.buttonvertical}
                onPressIn={() =>{
                  this.setState({modalVisible:true})
              
                } }>
                <Icon name="ios-barcode" />
                <Text style={styles.ButtonText}>Scan</Text>
              </Button>
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
             
            </View>
          </View>
        </Content>

        <SwipeablePanel
                    fullWidth
                    isActive={this.state.swipeablePanelActive}
                    onClose={this.closePanel}
                    onPressCloseButton
                >
<View>
<View style={styles.rowcontainer}>
  <View style={{flex:5}}></View>
                  <TouchableOpacity style={{flex:0.5,alignItems:"flex-start", paddingLeft:10}} onPress={()=>this.closePanel()}>
                  <Icon name="ios-close-circle" style={styles.iconSizeAndcolor}/>

                  </TouchableOpacity>
                  </View></View>
                  <View style={{paddingTop:20}}></View>
					<AdminBottomPanel/>
				</SwipeablePanel>




        {/* <Footer>
          <FooterTab>
            
            <Button vertical>
              <Icon name="md-barcode" style={styles.iconAndText} />
              <Text style={styles.iconAndText}>RegRecog</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-stats" style={styles.iconAndText}/>
              <Text style={styles.iconAndText}>Stats</Text>
            </Button>

            <Button vertical onPress={()=>Alert.alert("icon is pressed","okay")}>
              <Icon name="md-paper" style={styles.iconAndText}/>
              <Text style={styles.iconAndText}>AlumniSystem</Text>
            </Button>


            <Button vertical>
              <Icon name="md-search" style={styles.iconAndText}/>
              <Text style={styles.iconAndText}>DegreeVerify</Text>
            </Button>
          </FooterTab>
        </Footer> */}


      </Container>
    );
  }
}

const styles = StyleSheet.create({


  headerButtonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
   
  },

  TitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3.5,
  },
  TitleSize: {
    fontSize: 15,
  },

  iconSize:{
    fontSize:30
    
      },



  columncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    flexDirection: 'column',
  },

  rowcontainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },

  MainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  

  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
    flex: 1,
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginVertical:25
  },

  loginButton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0b6fd4',
  },

  buttonvertical: {
    width: 200,
    backgroundColor: '#4f83cc',
    marginVertical: 45,
    borderRadius: 12,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      width: 0.1,
      height: 0.1,
    },
    elevation: 7,
  },

  white: {
    fontSize: 14,
    // Define your HEX color code here.
    color: '#FFFFFF',
  },
  icon: {
    // Define your HEX color code here.
    color: '#FFFFFF',
  },

  innerView: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    backgroundColor: '#808080',
  },

  paragraph_Hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  textbody: {
    color: 'gray',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'left',
    paddingHorizontal: 6,
  },

  ButtonText: {
    textAlign: 'left', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 35,
    width: 200,
    color: 'white',
  },
  iconSizeAndcolor:{
    fontSize: 27,
    color:"#4f83cc",
    shadowOpacity: 0.1,
  shadowRadius:1,
      shadowOffset: {
        width: 0.1,
        height: 0.1,
      },
      elevation: 20,
  },

  iconAndText:{

    ...Platform.select({
      ios: {},
      android: {
        color: 'white',
      },
      default: {
        // other platforms, web for example
      },
    }),




  },



  iconColor:{


    ...Platform.select({
      ios: {
        color:'#4f83cc'
      },
      android: {
        
        color:'#364b73',
        
      },
      default: {
        // other platforms, web for example
      },
    }),
  
  }
  





});


const mapStatetoProps = (state)=>{

  const {


  } = state.FormHandler;

  const{
    
    scan_list_data

  } = state.Crud_Data;


return{

scan_response:scan_list_data

}

}




export default connect(mapStatetoProps,{})(FeeVerifyScreen);