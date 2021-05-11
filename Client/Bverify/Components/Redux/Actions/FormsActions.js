//these are the actions which are helping in the forms input through redux.
import moment from 'moment'


export const AlumniSystemForm=({key,value})=>{
  

return {

type:'AlumniSystemForm' ,
payload:{key,value},

}




}



export const Students_Form=({key,value})=>{
  

    return {
    
    type:'Students_Form',
    payload:{key,value},
    
    }
    
    
    
    
    }
    

    export const Fee_Form=({key,value})=>{
  

        return {
        
        type:'Fee_Form',
        payload:{key,value},
        
        }
        
        
        
        
        }
        




//on for all pickers

    export const dynamic_picker_form=({key,value})=>{
  

        return {
        
        type:'dynamic_picker_form',
        payload:{key,value},
        
        }
        
        
        
        
        }








export const picker_form=(value)=>{
  

    return {
    
    type:'picker_form' ,
    payload:value,
    
    }
    
    
    
    
    }






    export const date_picker=({key,value})=>{
  
new_value = moment(value).format("YYYY-MM-DD")


        return {
        
        type:'date_picker' ,
        payload:{key,new_value},
        
        }
        
        
        
        
        }







       
            