import React, {Component} from 'react';
import {Text, SafeAreaView, Image, View, Alert, StyleSheet,ActivityIndicator} from 'react-native';
import {Left, Right, List, ListItem, Icon, Body} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import IconFeather from 'react-native-vector-icons/Feather';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash'


 class SideBar extends Component {

constructor(){

super()
this.state={



}


}


drawerhelper=()=>{
Actions.DegreeVerifyScreen();
Actions.drawerClose();

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

      Actions.DegreeVerifyScreen();



    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }



profile_name=()=>{
if(this.props.Authentication_Response)
if(_.isArray(this.props.Authentication_Response.information)){
if(this.props.Authentication_Response.information.length){


  return(

this.props.Authentication_Response ? this.props.Authentication_Response.information.map((item)=>{
    return(
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:25, color:'#364b73',fontWeight:'bold',bottom:'100%'}}>{item.name}</Text>
    <Text style={{fontSize:16, color:'#364b73',bottom:'100%'}}>{item.email}</Text>
    
    
    
    </View>
    
    
    
    )
  }):console.log(' '))



  

}else{


return(
  <ActivityIndicator/>
)


  
}




}else{


  return(
    <ActivityIndicator/>

  )
  


}

}




  /* async ForgotPassword() {
    try {
      const userID = await AsyncStorage.getItem('userToken');

      //  Actions.ForgotPassword(userID);

      Alert.alert('Under Construction');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }

  async Profile() {
    try {
      const userID = await AsyncStorage.getItem('userToken');

      // Actions.Profile(userID);

      Alert.alert('Under Construction');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }

  async ChangePassword() {
    try {
      const userID = await AsyncStorage.getItem('userToken');
     // Actions.ChangePassword(userID);

      Alert.alert('Under Construction');
    } catch (err) {
      console.log(`The error is: ${err}`);
    }
  }*/

  render() {
    return (
      <SafeAreaView style={styles.safeareaContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../Assets/Splashlogo.png')}
            style={{width: 60, height: 60}}
          />
          {/* <Text style={styles.textwithLogo}>Bverify</Text> */}
        </View>

        <View>


<View>

{this.profile_name()}



</View>




        

          <List>



            
              {/* <ListItem>
                <Left style={styles.leftinlist}>
                <IconMaterial name="information-outline" size={23} color= '#4f83cc' />

                </Left>
                <Body style={styles.listitemBody}>
                  <Text style={styles.textinList}>About Us</Text>
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
             */}



       
             
           

             <ListItem 
              
              onPress={()=>{
                Actions.drawerClose()
                Actions.SearchRecognizer()
                }}>
                <Left style={styles.leftinlist}>
                <Text>
              <IconMaterial name="nfc-search-variant" size={20} color= '#4f83cc' />
</Text>
                </Left>
                <Body style={styles.listitemBody}>
                  <Text style={styles.textinList}>Text Recognition Search</Text>
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>







          
            
              <ListItem onPress={()=>{


Alert.alert(
      "Log Out !",
      "Are you sure you want to log out ?",
      [
    
        { text: "Yes", onPress: () => this.Logout() },
        {
          text: "No",
          onPress: () => console.log("Cancel"),
         
        }
       
      ],
      { cancelable: false }
    );


              } }
                >
                <Left style={styles.leftinlist}>
                <IconAnt name="logout" size={20} color= '#4f83cc' />

                </Left>
                <Body style={styles.listitemBody}>
                  <Text style={styles.textinList}>Log out</Text>
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>



         
          </List>





         











<ListItem 
              
              onPress={()=>{
                Actions.drawerClose()
                Actions.Settings()
                }}>
                <Left style={styles.leftinlist}>
                <Text>
              <IconFeather name="settings" size={20} color= '#4f83cc' />
</Text>
                </Left>
                <Body style={styles.listitemBody}>
                  <Text style={styles.textinList}>Settings</Text>
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>








        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeareaContainer: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    flexDirection: 'column',
    bottom:'5%'
  },

  imageContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textwithLogo: {
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  textinList: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    paddingVertical: 5,
  },

  listitemBody: {
    flex: 3,
  },

  iconSize: {
    fontSize: 21,
    color: '#4f83cc',
  },

  leftinlist: {
    flex: 0.5,
    borderWidth: 0,
  },
});


const mapStatetoProps = (state)=>{
  const {} = state.FormHandler;
  const{
    Authentication_Response
  } = state.Authentication;
return{

  Authentication_Response:Authentication_Response

}

}





export default connect(mapStatetoProps,{})(SideBar);