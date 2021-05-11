//In this file there will be all actions of mysql remember this file must be exported from the index.js file of the Actions folder.
import {Actions} from 'react-native-router-flux';

// export const helloworld=()=> {
// return({
// type:'hello',
// payload: "hellow world"
// }
// )

// }





//this action is for the insertion into the MYSQL_Database. *************************




// =====================================================================================
// Crud operations for DegreeVerifies Table
// =====================================================================================





export const Insertion = (name,fathername,details) => {
  // // console.log(name,fathername,details)
    return dispatch => {
      fetch(
        'http://192.168.110.171:8000/api/create',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name,
            fathername:fathername,
            details: details,
          }),
        },
      ) 
        .then(response => response.json())
        .then(response => {
          dispatch({
            type: 'Insertion',
            payload: response,
         
          });
          
          
        })
        .catch(error => {
          dispatch({
            type: 'error',
            payload: error,
          });
        });
    };
  };
  //************************************************************************************
  
  
  //this is for taking list of data.
  export const listData = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData',
            payload: response,
          });
         //  console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  
//   //for deleting the selected id.
  
  export const Delete = id => {
    

    return dispatch => {


 dispatch({
        type:'loading'
      })


      
      fetch(
        'http://192.168.110.171:8000/api/data'+"/"+id,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify({
          //   id: id,
          // }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          dispatch({
            type: 'Delete',
            payload: responseJson,
          });
          // console.log(responseJson)
        })
        .catch(error => {
          dispatch({
            type: 'Delete',
            payload: error,
          });
        });
    };
  };
//   //***********************************************************************************
  
//   //this action is for the updation of the data
  
  export const Update = (id,name,fname,admission,graduation,email,cnic,passport,status) => {
    // console.log(name);
    // console.log(id)
    // console.log(fname)
    // console.log(admission)
    // console.log(graduation)
    // console.log(email)
    // console.log(cnic)
    // console.log(passport)
    // console.log(status)
    return dispatch => {


      fetch(
        'http://192.168.110.171:8000/api/data/'+id+'/update',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: id,
           name: name,
           father_name:fname,
           admission_date:admission,
           graduation_date:graduation,
           email_address:email,
           cnic:cnic,
           passport_num:passport,
           status:status,
            // password: password,
          }),
          
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          dispatch({
            type: 'Update',
            payload: responseJson,
          });
          // console.log(responseJson)
          // Actions.AlumniSystem();
          // Actions.refresh({key: Math.random()});
        })
        .catch(error => {
          // console.log(error);
          dispatch({
            type: 'errors',
            payload: error,
            
          });
       
        });
        
    };
  };
  //***********************************************************************************
  



  

// =====================================================================================
// Crud operations for Students Table
// =====================================================================================






 //************************************************************************************
  
  
  //this is for taking list of data.
  export const students_listData = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_students',
            payload: response,
          });
        //  // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  

 //************************************************************************************
  
//   //for deleting the selected id.
  
export const students_delete = id => {
  return dispatch => {

    dispatch({
      type:'loading'
    })

    fetch(
      'http://192.168.110.171:8000/api/students/data'+"/"+id,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   id: id,
        // }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'students_Delete',
          payload: responseJson,
        });
        // console.log(responseJson)
      })
      .catch(error => {
        dispatch({
          type: 'students_Delete',
          payload: error,
        });
      });
  };
};
//   //***********************************************************************************






//***********************************************************************************
  
//   //this action is for the updation of the data
  
export const Students_Update = (id,name,fname,admission,email,batch,gender,programe,contact,address,board,ssc_total,ssc_obtain,hssc_total,hssc_obtain) => {
  // console.log(name);
  // console.log(id)
  // console.log(fname)
  // console.log(admission)
  // console.log(email)
  // console.log(batch)
  // console.log(gender)
  // console.log(programe)
  // console.log(contact)
  // console.log(address)
  // console.log(board)
  // console.log(ssc_total)
  // console.log(ssc_obtain)
  // console.log(hssc_total)
  // console.log(hssc_obtain)

  return dispatch => {


    fetch(
      'http://192.168.110.171:8000/api/students/data/'+id+'/update',
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
         name: name,
         father_name:fname,
         admission_date:admission,
         email_address:email,
         batch:batch,
         gender:gender,
         programe:programe,
         contact_no:contact,
         address:address,
         board:board,
         ssc_total:ssc_total,
         ssc_obtain:ssc_obtain,
         hssc_total:hssc_total,
         hssc_obtain:hssc_obtain
          // password: password,
        }),
        
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Students_Update',
          payload: responseJson,
        });
        // console.log(responseJson)
        // Actions.AlumniSystem();
        // Actions.refresh({key: Math.random()});
      })
      .catch(error => {
        // console.log(error);
        dispatch({
          type: 'errors',
          payload: error,
          
        });
     
      });
      
  };
};
//***********************************************************************************








//************************************************************************************
  
  
  //this is for taking list of data.
  export const msc_students = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/msc/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_msc_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_msc_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  


//************************************************************************************
  
  
  //this is for taking list of data.
  export const phd_students = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/phd/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_phd_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_phd_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  






//************************************************************************************
  
  
  //this is for taking list of data.
  export const bs_students = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/bs/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_bs_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_bs_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  



//************************************************************************************
  
  
  //this is for taking list of data.
  export const ms_students = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/ms/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_ms_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_ms_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  






//************************************************************************************
  
  
  //this is for taking list of data.
  export const male_students = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/male/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_male_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_male_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  



//************************************************************************************
  
  
  //this is for taking list of data.
  export const female_students = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/students/female/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_female_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_female_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  





// ===================================================================================
//  operations for Feeverify Table
// ===================================================================================




//************************************************************************************
  
  
  //this is for taking list of data.
  export const fee_students_list = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/fee/students/data', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'getData_fee_students',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'getData_fee_students',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  



//***********************************************************************************
  
//   //this action is for the updation of the data
  
export const Fee_Update = (id,registration_no,name,fname,semester,balance,status) => {
  // console.log(name);
  // console.log(id)
  // console.log(fname)
// console.log(registration_no)
// console.log(semester)
// console.log(balance)

  // console.log(status)
  return dispatch => {

    dispatch({
      type:'loading'
    })

    fetch(
      'http://192.168.110.171:8000/api/fee/data/'+id+'/update',
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
         registration_num:registration_no,
         name: name,
         father_name:fname,
         semester:semester,
         balance:balance,
         status:status,
          // password: password,
        }),
        
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Fee_Update',
          payload: responseJson,
        });
        // console.log(responseJson)
        // Actions.AlumniSystem();
        // Actions.refresh({key: Math.random()});
      })
      .catch(error => {
        // console.log(error);
        dispatch({
          type: 'Fee_Update',
          payload: error,
          
        });
     
      });
      
  };
};
//***********************************************************************************


//************************************************************************************
  
//   //for deleting the selected id.
  
export const fee_delete = id => {
  return dispatch => {

    dispatch({
      type:'loading'
    })


    fetch(
      'http://192.168.110.171:8000/api/fee/delete/'+id,
      {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   id: id,
        // }),
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Fee_Delete',
          payload: responseJson,
        });
        // console.log(responseJson)
      })
      .catch(error => {
        dispatch({
          type: 'Fee_Delete',
          payload: error,
        });
      });
  };
};
//   //***********************************************************************************








 //************************************************************************************
  
  
  //this is for taking list of data.
  export const scan_list = (reg_no) => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/scanned/data/'+reg_no, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'ScanData',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'ScanData',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  







//************************************************************************************
  
  
  //this is for taking list of data.
  export const degree_scan_list = (reg_no) => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/degree/scanned/data/'+reg_no, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'Degree_Scan_Data',
            payload: response,
          });
         // console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'Degree_Scan_Data',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  





 