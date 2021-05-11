
Initial_States={
    
   
    Authentication_Response:[],
    loading:false,
    }
    
    export default (state=Initial_States,action)=>{
    
    switch(action.type){
    
    
        // =============================================
        //             Authentication Reducer
        // =============================================
    
        
        case 'loading':
            return {...state,loading:true}

        case 'Auth_Form':  
           
            return  {...state, [action.payload.key]: action.payload.value}
            
            

        case 'Authentication':
    
    if(action.payload.code=="300"){

            return {...state, Authentication_Response:action.payload,loading:false,
            username:'',
            password:'',
            }
        
        }else{

                return {...state, Authentication_Response:action.payload,loading:false}

            }
    


        // =============================================
        //         Authentication Reducer
        // =============================================

        default:
            return {...state,loading:false,};

    }}