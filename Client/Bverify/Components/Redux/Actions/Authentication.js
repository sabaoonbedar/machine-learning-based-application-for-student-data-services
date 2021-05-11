


 export const Auth_Form=({key,value})=>{
  console.log(key,value)

    return {
    
    type:'Auth_Form',
    payload:{key,value},
    
    }
    
    
    
    
    }







export const Authentication = (email,password) => {

      return dispatch => {

        dispatch({
            type:'loading'
            })


        fetch(
          'http://192.168.110.171:8000/api/login',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email:email,
              password: password,
            }),
          },
        ) 
          .then(response => response.json())
          .then(response => {
            dispatch({
              type: 'Authentication',
              payload: response,
           
            });
            
            // console.log(response)
          })
          .catch(error => {
            dispatch({
              type: 'Authentication',
              payload: error,
            });
          });
      };
    };
    //************************************************************************************
    





