//import <name> name is a variable from 'react etc'
import React, {Component} from 'react';
import {SearchBar} from 'react-native-elements';
import AdminBottomPanel from '../../../Drawer/AdminBottomPanel';
import SwipeablePanel from 'rn-swipeable-panel';
import ActionSheet from 'react-native-actionsheet';
import { AsyncStorage } from 'react-native';

import {AlumniSystemSearch,phd_students,Delete} from '../../../Redux/Actions'
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
  Platform,
  RefreshControl,
  InteractionManager,
  LayoutAnimation
} from 'react-native';


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
  Toast,
} from 'native-base';

import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {ScrollView, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import { connect } from 'react-redux';

 class AllStudents extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor(props) {
  super(props)
    this.state = {
      //for aliasing when Colon is used
      isLoading: false,
      search: '',
      setSearch:'',
      swipeablePanelActive: false,
      refreshing: false,
      setRefreshing:false,
      showToast: false,
      text: '',
      data: this.props.students_phd_data,
    
    }

    this.arrayholder = this.props.students_phd_data;



  }



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
  









  // updateSearch = search => {
  //   this.setState({search});
  // };

// for changing lines color in the flatlist
  itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgb(211,211,211)",
        }}
      />
    );
  }
//ends here

showActionSheet = () => {
  this.ActionSheet.show()
}


renderer=()=>{

  if(this.props.students_phd_data=='null'){
  
  
  
  }else{
  
  this.props.phd_students();
  
  }
  
  }

  
//for searching the data in the flatelist

  searchData(text) {
    
    const newData = this.arrayholder.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1
    });
 
    this.setState({
      data: newData,
      text: text
      })
  }

//searching ends here


//for the loader when you drage it down
   wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  

   onRefresh = () => {
    this.setState({setRefreshing:true});

    this.props.phd_students();

   
   this.wait(400).then(() => {
    this.setState({setRefreshing:false})
   this.setState({data:this.props.students_phd_data})
 //for refreshing the current scene
    // Actions.refresh({key: Math.random()})
   
  }
   );

  }
// ends here




sort=(Data)=>{

  Data.sort((a, b) => a.name.localeCompare(b.name))

}



  handledata = () => {
   this.props.phd_students()

  }



Flatlist_Creator=()=>{

if(this.state.data){

return(

  <FlatList

          ItemSeparatorComponent={this.itemSeparator}
          underlineColorAndroid='transparent'

          // style={{flex: 1, marginTop: 30}}
          data={this.state.data}
          // data={this.props.students_phd_data.sort((a, b) => a.name.localeCompare(b.name))}
          keyExtractor={ (item, index) => index.toString() }

        //   refreshControl={
        //   <RefreshControl
        //     colors={["red", "yellow"]}
        //     refreshing={this.state.refreshControl}
        //     onRefresh={() => this._onRefresh()}
        //   />
        // }

      

          renderItem={({item}) => {
            return (
              <ScrollView>
                <List>
                  <ListItem
                 
                  style={{height:60,}}
                

onPress={()=>{


 Actions.jump('StudentsShowScreen',{

  id:item.id,
  Registration_num:item.registration_num,
  Name:item.name,
  Father_name:item.father_name,
  Gender:item.gender,
  Address:item.address,
  Contact:item.contact_no,
  Programe:item.programe,
  Semester:item.semester,
  Admission_date:item.admission_date,
  Batch:item.batch,
  Email_address:item.email_address,
  Board:item.board,
  Ssc_total: item.ssc_total,
  Ssc_obtain: item.ssc_obtain,
  Hssc_total:item.hssc_total,
  Hssc_obtain:item.hssc_obtain,
  Created_at:item.created_at,
  Updated_at:item.updated_at,

 })

  

 


}}>


<View style={{
backgroundColor:'white',
width:45,height:45,
borderRadius:100,borderWidth:0,
paddingRight:10,
position:'relative',
left:'-20%',
justifyContent:"center",
alignSelf:'center',
alignItems:"center",
shadowOpacity:1,
      shadowRadius:1,
shadowColor:"#414685",
       shadowOffset: {
          width: 1,
          height: 2.5,
        },
        elevation: 6,
    
}}>
<Text style={{fontSize:18,
marginLeft:'35%',
fontWeight:'bold',
color:"black"}}>
{item.name.toString().substr(0,1)}

</Text>


</View>

                    <Left style={{flexDirection:"column",marginLeft:'3%'}}>
             


<Text style={{fontWeight:"bold", fontSize:19}}>{item.name}</Text>
 <Text style={{color:'gray'}}>Father Name:  {item.father_name}</Text>

   

                 
                    </Left>
                    



<Right>      
   <Text>
       <Icon name="arrow-forward" />
    </Text>
</Right>


                  </ListItem>
                </List>
              </ScrollView>
            );
            
          }
         
       }
          />



)


      }

else {

  if(this.props.students_phd_data){
    if(this.props.students_phd_data.length){
  setTimeout(() => {
        Actions.refresh({key: Math.random()})
  }, 500);
    }else{
    setTimeout(() => {
     
      Alert.alert('No Information !','Something went wrong with server')
     
    }, 3000);
     
  
    }
  }

   
 return (

    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      
        marginTop:'60%'
    
      }}>
           
        <Image
          source={require('../../../Assets/loaderblack.gif')}
          style={{width: 35, height: 35}}
        />
        <Image
          source={require('../../../Assets/loadingText.gif')}
          style={{width: 35, height: 10, marginTop: 15}}
        />
      

      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          justifyContent: 'center',
         paddingTop:'70%'
        
        }}>
        {/* <Text style={{fontWeight: 'bold', color: 'gray', fontSize: 20}}>
          Bverify
        </Text> */}
      </View>
  
    </View>
    
  ); 

}

}








  componentDidMount =  () => {
    //as soon as this second scene is lounched, this method would be automatically called.
   

    this.props.phd_students()

    this.willFocusSubscription = this.props.navigation.addListener(
      'willFocus',
      () => {
        this.onRefresh()
      }
    );




  };
 

  componentWillUnmount() {
    this.willFocusSubscription.remove();
  }





  openPanel = () => {
    this.setState({ swipeablePanelActive: true });
};

closePanel = () => {
    this.setState({ swipeablePanelActive: false });
};


  render() {
    const {search} = this.state;


  


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
            style={{width: 35, height: 35}}
          />
          <Image
            source={require('../../../Assets/loadingText.gif')}
            style={{width: 35, height: 10, marginTop: 15}}
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
         <View style={{aspectRatio:2.3,backgroundColor:'#f7f7f7'}}>
            <View style={styles.columncontainer}>
              <View style={styles.rowcontainer}>
                <View style={styles.headerButtonsContainer}>
                  <Button transparent onPress={() => Actions.jump('CurrentStudents')}>
                    <Icon name="arrow-back" style={styles.iconSize} />
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
  }),



                  }}
                  
                  >PHD Students</Title>
                </View>

                <View style={styles.headerButtonsContainer}>
                  <Button transparent onPress={this.showActionSheet}>
                    <Icon name="menu" style={styles.iconSize} />
                  </Button>
                </View>
              </View>

              <View style={styles.searchcontainer}>
                <SearchBar
                  platform="ios"
                  // cancelButtonTitle="Cancel"
                  containerStyle={{
                    ...Platform.select({
                      ios: {backgroundColor:'#f7f7f7'},
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
                  placeholder="Search here"
                 
                  onChangeText={(text) => this.searchData(text)} 
                  value={this.state.text}

                  cancelButtonProps={{
                    ...Platform.select({
                      ios: {},
                      android: {
                        color: 'white',
                      },
                      default: {
                        // other platforms, web for example
                      },
                    }),
                  }}
                  // onCancel={() => Alert.alert('hellow')}
                  autoCorrect={false}             
                />
              </View>
            </View>
         </View>
         
         
          <Content  
           refreshControl={
          <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }  
        >
           
        


        {this.Flatlist_Creator()}



         
          </Content>
        
          


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
            <Button vertical onPress={()=>Alert.alert("icon is pressed","okay")}>
              <Icon name="ios-cash" style={styles.iconAndText}/>
              <Text style={styles.iconAndText}>FeeVerify</Text>
            </Button>
            <Button vertical>
              <Icon name="md-barcode" style={styles.iconAndText} />
              <Text style={styles.iconAndText}>RegRecog</Text>
            </Button>
            <Button vertical>
              <Icon active name="ios-stats" style={styles.iconAndText}/>
              <Text style={styles.iconAndText}>Stats</Text>
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
    top:'11%'
  },

  TitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3.5,
    top:'11%'
  },
  TitleSize: {
    fontSize: 16,

  },

  iconSize: {
    fontSize: 30,
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
  searchcontainer: {
    flex: 1.8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    top: 19
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

  paragraph_Hr: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },

  ButtonText: {
    textAlign: 'left', // <-- the magic
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 35,
    width: 200,
    color: 'white',
  },

  searchButtonColor: {
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



  }




});

const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{students_phd_data} = state.Crud_Data;
return{

search:search,

students_phd_data:students_phd_data,


}

}



export default connect(mapStatetoProps,{AlumniSystemSearch,phd_students,Delete}) (AllStudents);