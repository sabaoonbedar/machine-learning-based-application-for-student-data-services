
Initial_States={
 
    Line_Chart_Response:[],
    programe_pie_response:[],
    gender_pie_response:[],
    semester_pie_response:[],
    degree_pie_response:[],
    graduated_line_response:[],
    
    }
    
    export default (state=Initial_States,action)=>{
    
    switch(action.type){
    
    
        // =============================================
        //              Charts from here
        // =============================================
    
    
        case 'Linechart':
    
    
            return {...state, Line_Chart_Response:action.payload,}
    
        case 'ProgramePieChart':
            
            return {...state, programe_pie_response:action.payload,}
    
            case 'GenderPieChart':
            
                return {...state, gender_pie_response:action.payload,}
        case 'VerifyPieChart':
            return {...state, verify_pie_response:action.payload,}


            case 'SemesterPieChart':
                return {...state, semester_pie_response:action.payload,}

                case 'DegreePieChart':
                    return {...state, degree_pie_response:action.payload,}


case 'GraduatedLineChart':
    return {...state, graduated_line_response:action.payload,}



        // =============================================
        //              Charts from here
        // =============================================

        default:
            return {...state};

    }}