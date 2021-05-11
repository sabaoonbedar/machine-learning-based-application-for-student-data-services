




export const Settings_Form=({key,value})=>{

 


    return {
    type:'Settings_Form',
    payload:{key,value},
    
    }
    
    
    
    
    }




    //on for all pickers

    export const dynamic_picker_settings=({key,value})=>{
  

        return {
        
        type:'dynamic_picker_settings',
        payload:{key,value},
        
        }
        
        
        
        
        }


//**************************************************************************************** */


        export const Admin_Register = (username,email,password,roles,created_by) => {



          return dispatch => {

                dispatch({
                    type:'loading'
                    })


                fetch(
                  'http://192.168.110.171:8000/api/register_admin',
                  {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: username,
                      email:email,
                      password:password,
                      roles:roles,
                      created_by:created_by,
                    }),
                  },
                ) 
                  .then(response => response.json())
                 
                  .then(response => {
                    console.log(response)
                    dispatch({
                      type: 'AdminRegister',
                      payload: response,
                   
                    });
                    
                    
                  })
                  .catch(error => {
                    dispatch({
                      type: 'AdminRegister',
                      payload: error,
                    });
                  });
              };
            };
            //************************************************************************************
            



//**************************************************************************************** */


export const Role_Register = (username,email,password,roles,created_by) => {



  return dispatch => {

        dispatch({
            type:'loading'
            })


        fetch(
          'http://192.168.110.171:8000/api/register_role',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: username,
              email:email,
              password:password,
              roles:roles,
              created_by:created_by,
            }),
          },
        ) 
          .then(response => response.json())
         
          .then(response => {
            console.log(response)
            dispatch({
              type: 'RoleRegister',
              payload: response,
           
            });
            
            
          })
          .catch(error => {
            dispatch({
              type: 'RoleRegister',
              payload: error,
            });
          });
      };
    };
    //************************************************************************************
    


    //************************************************************************************
  
  
  //this is for taking list of data.
  export const Accounts_List = () => {
    return dispatch => {
      fetch('http://192.168.110.171:8000/api/AccountList', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'Accounts_Details',
            payload: response,
          });
          console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'Accounts_Details',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  
//   //for deleting the selected id.


export const Search_Function =()=>{



}







//   //************************************************************************************
  
//   //for deleting the selected id.
  
export const Delete_Administration = id => {
  console.log(id)

  return dispatch => {


dispatch({
      type:'loading'
    })


    
    fetch(
      'http://192.168.110.171:8000/api/administration'+"/"+id,
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
          type: 'Delete_Administration',
          payload: responseJson,
        });
        console.log(responseJson)
      })
      .catch(error => {
        dispatch({
          type: 'Delete_Administration',
          payload: error,
        });
      });
  };
};

//   //***********************************************************************************







export const Change_Role = (id,roles) => {
  console.log(id);
console.log(roles)

  return dispatch => {


    dispatch({
      type:'loading'
    })



    fetch(
      'http://192.168.110.171:8000/api/administrationRoles/'+id,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
         roles: roles,
        }),
        
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Change_Role',
          payload: responseJson,
        });
        // console.log(responseJson
      })
      .catch(error => {
        // console.log(error);
        dispatch({
          type: 'Change_Role',
          payload: error,
          
        });
     
      });
      
  };
};
//***********************************************************************************





//   //***********************************************************************************







export const Change_Password = (id,password) => {
  console.log(id);
console.log(password)

  return dispatch => {


    dispatch({
      type:'loading'
    })



    fetch(
      'http://192.168.110.171:8000/api/passwordChangeRole/'+id,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
         password: password,
        }),
        
      },
    )
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'Change_Password_User',
          payload: responseJson,
        });
        console.log(responseJson)
      })
      .catch(error => {
        // console.log(error);
        dispatch({
          type: 'Change_Password_User',
          payload: error,
          
        });
     
      });
      
  };
};
//***********************************************************************************


