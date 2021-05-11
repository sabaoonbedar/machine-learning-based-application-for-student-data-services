




export const generate_barcode = (OCR_value) =>{

console.log(OCR_value)
    return {

        type:'BarcodeGenerator' ,
        payload:OCR_value,
        
        }





}



export const wordListOff = (value) =>{

   
        return {
    
            type:'WordList_Off' ,
            payload:value,
            
            }
    
    
    
    
    
    }








    //************************************************************************************
  
  
  //this is for taking list of data.
  export const students_ocr_information = (reg_no) => {
    return dispatch => {

dispatch({
type:'loading'
})

      fetch('http://192.168.110.171:8000/api/ocrStudents/'+reg_no, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
        .then(response => response.json())
  
        .then(response => {
          dispatch({
            type: 'students_ocr_list',
            payload: response,
          });
         console.log(response)
        })
        .catch(error => {
          dispatch({
            type: 'students_ocr_list',
            payload: error,
          });
        });
    };
  };
//   //************************************************************************************
  
