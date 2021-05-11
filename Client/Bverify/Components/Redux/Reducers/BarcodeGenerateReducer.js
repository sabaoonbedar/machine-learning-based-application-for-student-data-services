
Initial_States={
    data:'',
    delete:'',
    refreshing:'false',
    isLoading:'false',
    redux_name:'',
    }
    
    export default (state=Initial_States,action)=>{
    
    switch(action.type){
    
        case 'loading':
            return {...state, loading:true} 
      
        case 'students_ocr_list':
    
    
            return {...state, students_information:action.payload,loading:false}
    

    
    
case 'BarcodeGenerator':
    
    
 return {...state, Ocr_Value:action.payload}
    






case 'WordList_Off':
    // console.log(action.payload)
    return {...state, wordListOff:action.payload}

        // =============================================
        //              Charts from here
        // =============================================

        default:
            return {...state,loading:false};

    }}