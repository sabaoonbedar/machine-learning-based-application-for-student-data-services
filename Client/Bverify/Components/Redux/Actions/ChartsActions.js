//************************************************************************************
  
  
  //this is for taking list of data.
  export const linechart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/linechart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'Linechart',
            payload: response,
          });
        //  console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'Linechart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  





//************************************************************************************
  
  
  //this is for taking list of data.
  export const Programe_Pie_Chart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/ProgramePieChart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'ProgramePieChart',
            payload: response,
          });
        //  console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'ProgramePieChart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  



//************************************************************************************
  
  
  //this is for taking list of data.
  export const Gender_Pie_Chart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/GenderPieChart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'GenderPieChart',
            payload: response,
          });
        //  console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'GenderPieChart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  





//************************************************************************************
  
  
  //this is for taking list of data.
  export const Verify_Pie_Chart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/VerificationPieChart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'VerifyPieChart',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'VerifyPieChart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  





//************************************************************************************
  
  
  //this is for taking list of data.
  export const Semester_Pie_Chart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/SemesterPieChart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'SemesterPieChart',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'SemesterPieChart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  



//************************************************************************************
  
  
  //this is for taking list of data.
  export const Degree_Verify_Pie_Chart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/DegreePieChart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'DegreePieChart',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'DegreePieChart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  


//************************************************************************************
  
  
  //this is for taking list of data.
  export const Graduated_Line_Chart = () => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/graduatedLineChart', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'GraduatedLineChart',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'GraduatedLineChart',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  