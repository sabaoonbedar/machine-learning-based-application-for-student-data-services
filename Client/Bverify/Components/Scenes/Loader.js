import React, { Component } from "react";
import {connect} from 'react-redux';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from "react-native";

class Loader extends Component {
    constructor(){
        super()
 this.state = {
    
  };
}

//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: this.props.loading });
//   }

  render() {
    const { modalVisible } = this.state;

    return (
        
      <View style={styles.centeredView}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.props.loading}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ActivityIndicator size="large" color="#364b73"/>
            </View>
          </View>
        </Modal>

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 40,
    padding: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 5,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});



const mapStatetoProps = (state)=>{
  
  
    const{
     
      loading,
    
  
    } = state.Crud_Data;
  
  
  return{
  
  loading:loading,
 
  
  }
  
  }
  
  
  


export default connect(mapStatetoProps,{})( Loader);