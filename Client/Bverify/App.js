import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

// imports for redux persists


import {persistStore,persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/es/integration/react';




//===================================================================




//import OfflineNotice from './Components/Screens/OfflineNotice';
// import 'react-native-gesture-handler';

import AsyncStorage from '@react-native-community/async-storage';
import Reducer from './Components/Redux/Reducers'

// you can persist data here

const persistConfig = {

  key: 'root',
 storage: AsyncStorage,
 whitelist:['FormHandler']


}

//=========================================



const persistedReducer = persistReducer(persistConfig,Reducer)



import Routes from './Components/Routes/Routes';







import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Thunk from 'redux-thunk';
import {Root} from "native-base";


console.disableYellowBox = true;

export default class App extends React.Component {
  render(){

    store = createStore(persistedReducer,{},applyMiddleware(Thunk));
    const Persist_Store = persistStore(store);

    
    return(

    <Provider store={store}>
        <PersistGate persistor={Persist_Store} loading={null}>

    <Root>
    <Routes/>
    </Root>
    </PersistGate>
    </Provider>
    
    )
    
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
