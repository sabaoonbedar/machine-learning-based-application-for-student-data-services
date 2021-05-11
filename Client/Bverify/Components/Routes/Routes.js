import React, {Component, Text} from 'react';
import {StyleSheet,View,Image} from 'react-native';



// ================================================================================================
// Scene routes starts from here
// ================================================================================================


import {Router, Scene,Drawer,ActionConst} from 'react-native-router-flux';
import SplashScreen from "../Scenes/SplashScreen";
import WelcomeScreen from "../Scenes/WelcomeScreen";
import DegreeVerifyScreen from "../Scenes/DegreeVerifyScreen";
import AdminLoginScreen from "../Scenes/AdminLoginScreen";
import AdminPanel from "../Scenes/AdminPanel";
import AlumniSystem from "../Scenes/AdminPanelScreens/AlumniSystem";
import AdminDegreeVerify from "../Scenes/AdminPanelScreens/DegreeVerifierScreens/AdminDegreeVerify";
import FeeVerifier from "../Scenes/AdminPanelScreens/FeeVerificationScreens/FeeVerifier";
import Sidebar from '../Drawer/Sidebar';
import practice from '../Scenes/practice';
import AlumniUpdateScreen from '../Scenes/UpdateScreens/AlumniUpdateScreen';
import AlumniShowScreen from '../Scenes/ShowScreens/AlumniShowScreen';
import InternetconnectionScreen from '../Scenes/InternetconnectionScreen';
import BarcodeScanner from '../Scenes/Scanners/BarcodeScanner';
import CurrentStudents from '../Scenes/AdminPanelScreens/CurrentStudents';
import AllStudents from '../Scenes/AdminPanelScreens/StudentsScreens/AllStudents';
import StudentsShowScreen from '../Scenes/ShowScreens/StudentsShowScreen';
import MscStudents from '../Scenes/AdminPanelScreens/StudentsScreens/MscStudents';
import PhdStudents from '../Scenes/AdminPanelScreens/StudentsScreens/PhdStudents';
import BsStudents from '../Scenes/AdminPanelScreens/StudentsScreens/BsStudents';
import MsStudents from '../Scenes/AdminPanelScreens/StudentsScreens/MsStudents';
import MaleStudents from '../Scenes/AdminPanelScreens/StudentsScreens/MaleStudents';
import FemaleStudents from '../Scenes/AdminPanelScreens/StudentsScreens/FemaleStudents';
import FeeVerifierTabs from '../Scenes/AdminPanelScreens/FeeVerificationScreens/FeeVerifierTabs';
import FeeVerifyList from '../Scenes/AdminPanelScreens/FeeVerificationScreens/FeeVerifyList'
import FeeShowScreen from '../Scenes/ShowScreens/FeeShowScreen';
import FeeVerifySecondTab from '../Scenes/AdminPanelScreens/FeeVerificationScreens/FeeVerifierSecondTab';
import Loader from '../Scenes/Loader';
import DegreeVerifyTabs from '../Scenes/AdminPanelScreens/DegreeVerifierScreens/DegreeVerifyTabs';
import DegreeVerifyList from '../Scenes/AdminPanelScreens/DegreeVerifierScreens/DegreeVerifyList';
import DegreeVerifySecondTab from '../Scenes/AdminPanelScreens/DegreeVerifierScreens/DegreeVerifySecondTab'
import DegreeVerifyShowScreen from '../Scenes/ShowScreens/DegreeShowScreen';
import Degree_Panel_Scanner from '../Scenes/Scanners/Degree_Panel_Scanner';
import LineChart from '../Scenes/AdminPanelScreens/Statistics/LineChart';
import StatesScreen from '../Scenes/AdminPanelScreens/Statistics/StatesScreen';
import TabSecondCharts from '../Scenes/AdminPanelScreens/Statistics/TabSecondCharts'
import Settings from '../Scenes/AdminPanelScreens/Settings/Settings'
import Profile from '../Scenes/AdminPanelScreens/Settings/Profile'
import AboutUs from '../Scenes/AdminPanelScreens/Settings/AboutUs'
import UserManagement from '../Scenes/AdminPanelScreens/Settings/UserManagement'
import AdminAccount from '../Scenes/AdminPanelScreens/Settings/AdminAccount'
import OtherRoles from '../Scenes/AdminPanelScreens/Settings/OtherRoles'
import TextRecogniser from '../Scenes/TextRecognition/TextRecogniser'
import GeneratedBarcode from '../Scenes/TextRecognition/GeneratedBarcode'
import SearchRecognizer from '../Scenes/RecognitionSearch/RecognizerSearch'

export default class Routes extends Component {



    render() {
      return (
        <Router>
          <Scene key="root">
           
           
            <Scene
              key="SplashScreen"
              component={SplashScreen}
              title="SplashScreen"
              initial
            />

  <Scene
              key="WelcomeScreen"
              component={WelcomeScreen}
              title="WelcomeScreen"
        type={ActionConst.REPLACE}
              //this is use for disabling swiping screen in ios for welcome screen spacifically
            />
  

  <Scene
              key="DegreeVerifyScreen"
              component={DegreeVerifyScreen}
              title="DegreeVerifyScreen"
        
              type="replace"


            />
  

  <Scene
              key="AdminLoginScreen"
              component={AdminLoginScreen}
              title="AdminLoginScreen"
              hideNavBar

          
            />



<Scene key="AdminPanel" hideNavBar type="replace">

<Drawer
                        Open={false}
                        key="drawer"
                        contentComponent={Sidebar}
                        drawerWidth={320}
                        hideNavBar
                        drawerPosition="left"
                        drawerType="displace"
                        tapToClose={true}
                        duration={0}
                        openDrawerOffset={0.2}
          panCloseMask={0.2}
                        tweenHandler={(ratio) => ({
            main: { opacity: Math.max(0.54, 1 - ratio) }
          })}   
                    >


<Scene
              key="AdminPanelMain"
              component={AdminPanel}
              title="AdminPanel"
          
             
           
            />




</Drawer>

</Scene>


<Scene
              key="AlumniShowScreen"
              component={AlumniShowScreen}
              title="AlumniShowScreen"
  
          

            />

<Scene
              key="AlumniUpdateScreen"
              component={AlumniUpdateScreen}
              title="AlumniUpdateScreen"
             
            />


<Scene
              key="AllStudents"
              component={AllStudents}
              title="AllStudents"
           
            />

<Scene
              key="StudentsShowScreen"
              component={StudentsShowScreen}
              title="StudentsShowScreen"
             
            />


<Scene
              key="BarcodeScanner"
              component={BarcodeScanner}
              title="BarcodeScanner"
              hideNavBar

            />


<Scene
              key="CurrentStudents"
              component={CurrentStudents}
              title="CurrentStudents"
              hideNavBar
         
            />



<Scene
              key="PhdStudents"
              component={PhdStudents}
              title="PhdStudents"
              hideNavBar
            
            />



<Scene
              key="MscStudents"
              component={MscStudents}
              title="MscStudents"
              hideNavBar
            
            />


<Scene
              key="MaleStudents"
              component={MaleStudents}
              title="MaleStudents"
              hideNavBar
            
            />

<Scene
              key="FemaleStudents"
              component={FemaleStudents}
              title="femaleStudents"
              hideNavBar
            
            />



<Scene
              key="MsStudents"
              component={MsStudents}
              title="MsStudents"
              hideNavBar
            
            />

<Scene
              key="BsStudents"
              component={BsStudents}
              title="BsStudents"
              hideNavBar
            
            />

<Scene
              key="InternetconnectionScreen"
              component={InternetconnectionScreen}
              title="InternetconnectionScreen"
              type="replace"

            />


<Scene
              key="AlumniSystem"
              component={AlumniSystem}
              title="Alumni System"
              hideNavBar
            

            />


<Scene
              key="practice"
              component={practice}
              title="practice"
              hideNavBar
    
   />





<Scene
              key="AdminDegreeVerify"
              component={AdminDegreeVerify}
              title="AdminDegreeVerify"
              hideNavBar
              tabBarLabel="Activity"
        

         
            />






<Scene
              key="FeeVerifier"
              component={FeeVerifier}
              title="FeeVerifier"
              hideNavBar
            

  
            />



<Scene
              key="FeeVerifierTabs"
              component={FeeVerifierTabs}
              title="FeeVerifierTabs"
              hideNavBar
            

  
            />

<Scene
              key="FeeVerifyList"
              component={FeeVerifyList}
              title="FeeVerifyList"
              hideNavBar
            

  
            />

<Scene
              key="FeeVerifySecondTab"
              component={FeeVerifySecondTab}
              title="FeeVerifySecondTab"
              hideNavBar
      

  
            />

<Scene
              key="FeeShowScreen"
              component={FeeShowScreen}
              title="FeeShowScreen"
              hideNavBar
            

  
            />




<Scene
              key="Loader"
              component={Loader}
              title="Loader"
              hideNavBar
            

  
            />

<Scene
              key="DegreeVerifyTabs"
              component={DegreeVerifyTabs}
              title="DegreeVerifyTabs"
              hideNavBar
            

  
            />

<Scene
              key="DegreeVerifyList"
              component={DegreeVerifyList}
              title="DegreeVerifyList"
              hideNavBar
            

  
            />

<Scene
              key="DegreeVerifySecondTab"
              component={DegreeVerifySecondTab}
              title="DegreeVerifySecondTab"
              hideNavBar
            

  
            />

<Scene
              key="DegreeVerifyShowScreen"
              component={DegreeVerifyShowScreen}
              title="DegreeVerifyShowScreen"
              hideNavBar
            

  
            />



<Scene
              key="Degree_Panel_Scanner"
              component={Degree_Panel_Scanner}
              title="Degree_Panel_Scanner"
              hideNavBar
            

  
            />


<Scene
              key="LineChart"
              component={LineChart}
              title="LineChart"
              hideNavBar
            

  
            />




<Scene
              key="StatesScreen"
              component={StatesScreen}
              title="StatesScreen"
              hideNavBar
            

  
            />


<Scene
              key="TabSecondCharts"
              component={TabSecondCharts}
              title="TabSecondCharts"
              hideNavBar
            

  
            />


<Scene
              key="Settings"
              component={Settings}
              title="Settings"
              hideNavBar


  
            />



<Scene
              key="Profile"
              component={Profile}
              title="Profile"
              hideNavBar


  
            />


<Scene
              key="AboutUs"
              component={AboutUs}
              title="AboutUs"
              hideNavBar


  
            />




<Scene
              key="UserManagement"
              component={UserManagement}
              title="UserManagement"
              hideNavBar


  
            />



<Scene
              key="AdminAccount"
              component={AdminAccount}
              title="AdminAccount"
              hideNavBar


  
            />



<Scene
              key="OtherRoles"
              component={OtherRoles}
              title="OtherRoles"
              hideNavBar


  
            />




<Scene
              key="TextRecogniser"
              component={TextRecogniser}
              title="TextRecogniser"
              hideNavBar

  
            />


<Scene
              key="GeneratedBarcode"
              component={GeneratedBarcode}
              title="GeneratedBarcode"
              hideNavBar

  
            />





<Scene
              key="SearchRecognizer"
              component={SearchRecognizer}
              title="SearchRecognizer"
              hideNavBar

  
            />








</Scene>








        
</Router>
);

}








}








const styles = StyleSheet.create({
  tabBar: {
  height: 70,
  borderTopColor: 'darkgrey',
  borderTopWidth: 0.5,

  justifyContent:'space-between'
  }
  });




