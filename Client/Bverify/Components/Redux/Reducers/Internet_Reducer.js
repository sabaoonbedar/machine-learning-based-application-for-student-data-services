
Initial_States={
  isConnected:'',
  notConnected:'',
    }
    
    export default (state=Initial_States,action)=>{
    
    switch(action.type){
    
    case 'connected':
        return {...state, isConnected: action.payload}
    
    case 'connected_once':
        return {...state, connected_once: action.payload }

    case 'not_connected_once':
         return {...state, not_connected_once: action.payload }

    

        default:
        return state;
    }
    
    
    
    }