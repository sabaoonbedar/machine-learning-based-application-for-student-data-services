import { Actions } from "react-native-router-flux"

const Initial_states={
search:'',
picker_value:undefined,
date_picker_value:undefined,
}



export default (state=Initial_states,action)=>{

switch(action.type){

case 'loading':
    return {...state, loading:true}    

case 'Settings_Form':  


return  {...state, [action.payload.key]: action.payload.value}

case 'dynamic_picker_settings':
    return  {...state, [action.payload.key]: action.payload.value}

case 'RoleRegister':
    if(action.payload.code==300){
    return {...state, Role_Account_Response: action.payload, loading:false,
        redux_username:'',
        redux_email:'',
        redux_password:'',
        redux_confirm:''
        
    
    }
   
}  else{

    return {...state, Role_Account_Response: action.payload, loading:false,}
    }



case 'AdminRegister':
    if(action.payload.code==300){

return {...state, Admin_Account_Response: action.payload, loading:false,
    redux_username:'',
    redux_email:'',
    redux_password:'',
    redux_confirm:''
}
}
else{

    return {...state, Admin_Account_Response: action.payload, loading:false,}

}





case 'Accounts_Details':

    return {...state, Accounts_Response: action.payload}


case 'Delete_Administration':

   return{...state, Delete_Response:action.payload,loading:false}

case 'Change_Role':
    return{...state, Change_Role_Response:action.payload, loading:false}


case 'Change_Password_User':
    if(action.payload.code==300){
return {...state,Change_Password_Response:action.payload,loading:false,
    redux_old_password:'',
    redux_new_password:'',
    redux_confirm_password:'',

}
    }else{

        return {...state,Change_Password_Response:action.payload,loading:false}
 
    }



    default:
        return {...state, loading:false, Accounts_Response:''};
         
        
        }
        }