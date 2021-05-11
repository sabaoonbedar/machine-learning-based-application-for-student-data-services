import React, {Component} from 'react';
import {Text, SafeAreaView, Image, View, Alert, StyleSheet} from 'react-native';
import {Left, Right, List, ListItem, Icon,Body} from 'native-base';
import {Actions} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import IconAnt from 'react-native-vector-icons/AntDesign';

export default class SideBar extends Component {
  
  



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
        
        <View>
          <List>


              <ListItem onPress={()=>{Actions.jump('UserManagement')}}>
                <Left style={styles.leftinlist}>           
                   <IconAnt name="addusergroup" size={20} color= '#4f83cc' />
</Left>
                <Body style={styles.listitemBody}>
                 
                    <Text style={styles.textinList}>User Management</Text>
               
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
         






    
              <ListItem onPress={()=>{Actions.jump('AboutUs')}}>
                <Left style={styles.leftinlist}><Icon name="ios-information-circle-outline" style={styles.iconSize}/></Left>
                <Body style={styles.listitemBody}>
                  
                    <Text style={styles.textinList}>About Us</Text>
               
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
           
           

           
              <ListItem onPress={()=>{

this.Logout()

              }}>
                <Left style={styles.leftinlist}><Icon name="ios-power" style={styles.iconSize}/></Left>
                <Body style={styles.listitemBody}>
                  
                    <Text style={styles.textinList}>LogOut</Text>
                  
                </Body>

                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
       

           
          </List>
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
  },

  imageContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textwithLogo: {
    fontSize: 20,
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

listitemBody:{
flex:3,


},

iconSize:{
fontSize:21,
color:"#4f83cc"
},

leftinlist:{
flex:0.5,
borderWidth:0
}



});
