import NetInfo from '@react-native-community/netinfo';
import {Toast } from 'native-base'
import { Alert } from 'react-native';



export const internet_connection=()=>{

return (dispatch)=>{
   
    NetInfo.addEventListener(state => {

        // console.log(
        //   'Connection type: ' +
        //   state.type +
        //   ', Is connected?: ' +
        //   state.isConnected,
        // );
    
        if (state.isConnected == true) {

            
          dispatch({
           type:'connected',
           payload:state.isConnected,
          })

  
        }
        else {
           

            dispatch({
                type:'connected',
                payload:state.isConnected,
               })

        }
       }
     );
}
    

    

}



export const connect_once =()=>{

    return dispatch =>{

NetInfo.fetch().then(state => {
        if (state.isConnected == true) {
          
            dispatch({
type:'connected_once',
payload:state.isConnected
            })
          
   
        } else if(state.isConnected==false){
        
            dispatch({
                type:'connected_once',
                payload:state.isConnected
                            })



        }else{

Alert.alert('Something Went Wrong !','there might some problem in internet connection')

        }
   
      });

    }



}