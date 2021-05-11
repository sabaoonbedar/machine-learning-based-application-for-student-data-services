
Initial_States={
data:'',
delete:'',
refreshing:'false',
isLoading:'false',
redux_name:'',
}

export default (state=Initial_States,action)=>{

switch(action.type){


     // =============================================
    //                case for laoader
    // ============================================

case 'loading':
        return{...state,   loading:true}



    // =============================================
    //                 Degree verify table
    // =============================================

case 'getData':
    return {...state, alumni_data: action.payload, isLoading:false}

case 'Delete':
    return {...state, deletedData: action.payload, loading:false}

case 'Update':
    return { ...state, UpdateResponse:action.payload, }

case 'Insertion':
    return {...state,createresponse:action.payload}


    // =============================================
    //                 Degree verify table
    // =============================================


    // =============================================
    //                 students table
    // =============================================

case 'getData_students':

    return {...state,students_data:action.payload}
case 'students_Delete':

    return {...state,students_delete:action.payload, loading:false}

 case 'Students_Update':

    return {...state,students_update_response:action.payload}
    
case 'getData_msc_students':

    return {...state,students_msc_data:action.payload}

case 'getData_phd_students':

        return {...state,students_phd_data:action.payload}

case 'getData_bs_students':

            return {...state,students_bs_data:action.payload}

case 'getData_ms_students':

  return {...state,students_ms_data:action.payload}
        
case 'getData_male_students':

  return {...state,students_male_data:action.payload}
        
  case 'getData_female_students':

    return {...state,students_female_data:action.payload}



    // =============================================
    //                 Students Table
    // =============================================



    // =============================================
    //              Fee table
    // =============================================

          
    case 'getData_fee_students':

    return {...state,students_fee_data:action.payload}
          
    case 'Fee_Update':

        return {...state,fee_update_response:action.payload}

    case 'Fee_Delete':

            return {...state,fee_delete_response:action.payload, loading:false}
    


    // =============================================
    //                Fee table
    // =============================================


    // =============================================
    //              Scanner search
    // =============================================



    case 'ScanData':

        return {...state, scan_list_data:action.payload,loading:false}

case 'Degree_Scan_Data':

    return {...state, degree_list_Scan_information:action.payload,loading:false}


    // =============================================
    //              Scanner search
    // =============================================











    default:
    return {...state,loading:false};
}



}