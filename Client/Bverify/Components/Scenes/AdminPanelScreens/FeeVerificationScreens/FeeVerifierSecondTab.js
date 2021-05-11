

import React from 'react';
import {View} from 'react-native'

import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeeVerifier from './FeeVerifier';
import FeeVerifyList from './FeeVerifyList';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';




const Tab = createBottomTabNavigator();


export default function FeeVerifierSecondTab() {
  return (
<View style={{flex:1}}>
    <NavigationContainer>
      <Tab.Navigator

        screenOptions={({ route }) => ({
        
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
let Size
            if (route.name === 'Scan Code') {
              
              iconName = focused
                ? 'barcode-scan'
                : 'credit-card-scan';
               
                Size = focused ? 30 : 25;


            } else if (route.name === 'Search') {
              iconName = focused ? 'account-search' : 'account-search-outline';
              Size = focused ? 30 : 25;
            }

            // You can return any component that you like here!
            return <IconMaterial name={iconName} size={Size} color={color} />;
          },
        })}
       
        tabBarOptions={{
          activeTintColor: '#4f83cc',
          inactiveTintColor: 'gray',
    
        }}
initialRouteName="Search"

      >
    
        <Tab.Screen name="Scan Code" component={FeeVerifier} />
        <Tab.Screen name="Search" component={FeeVerifyList} />
      </Tab.Navigator>
    </NavigationContainer>

    </View>
  );
}