
//this reducer is for form handling and passing the states to the screens

import { Actions } from "react-native-router-flux"

const Initial_states={
search:'',
picker_value:undefined,
date_picker_value:undefined,
}



export default (state=Initial_states,action)=>{

switch(action.type){

case 'AlumniSystemForm':  
// console.log(action.payload.key)
return  {...state, [action.payload.key]: action.payload.value}

case 'Update':
    if(action.payload.code==300){
    return{
        ...state, 
    
        redux_name:'',
        redux_fname:'',
        redux_admission:'',
        redux_graduation:'',
        redux_email:'',
        redux_cnic:'',
        redux_passport:'',
        picker_value:'',

}}else return{...state}

case 'picker_form':  

    return  {...state, picker_value:action.payload}





case 'date_picker':
  
    console.log(action.payload.new_value)
    return  {...state, [action.payload.key]: action.payload.new_value}
    
 
case 'dynamic_picker_form':  
// console.log(action.payload.key)
// console.log(action.payload.value)

    return  {...state, [action.payload.key]: action.payload.value}




case 'Students_Form':  
// console.log(action.payload.key)
// console.log(action.payload.value)
    return  {...state, [action.payload.key]: action.payload.value}

    case 'Fee_Form':  
    // console.log(action.payload.key)
    // console.log(action.payload.value)
        return  {...state, [action.payload.key]: action.payload.value}
    
    
    
    case 'Students_Update':
        if(action.payload.code==300){
        return{
            ...state, 
        
            redux_name:'',
            redux_fname:'',
            redux_admission:'',
            redux_contact:'',
            redux_email:'',
            redux_gender:'',
            redux_programe:'',
            redux_address:'',
            redux_batch:'',
            redux_board:'',
            redux_ssc_total:'',
            redux_ssc_obtain:'',
            redux_hssc_total:'',
            redux_hssc_obtain:'',
            
    }}else return{...state}




    case 'Fee_Update':
        if(action.payload.code==300){
        return{
            ...state, 
            redux_regno:'',
            redux_name:'',
            redux_fname:'',
            redux_balance:'',
            redux_semester:'',
            redux_status:'',
    }}else return{...state}



default:
return state;
 

}
}