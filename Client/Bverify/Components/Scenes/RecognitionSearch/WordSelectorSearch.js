import React, { Component } from "react";
import { 
  StyleSheet,
  TouchableHighlight, 
  ScrollView,
  View, 
  Text,
  Button
} from "react-native";
import PropTypes from 'prop-types';
import { SafeAreaView } from "react-native-safe-area-context";
import { shadow } from "react-native-paper";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Actions } from "react-native-router-flux";
import {connect} from 'react-redux'
import Loader from '../Loader'
import {wordListOff} from '../../Redux/Actions'


 class WordSelector extends Component {
  state = {
    selectedWordIdx: -1,
    wordList: null
  }

  componentDidMount() {
    let wordList = [];

    // Break down all the words detected by the camera
    if(this.props.wordBlock && 
       this.props.wordBlock.textBlocks && 
       this.props.wordBlock.textBlocks.length > 0) {
      for(let idx=0; idx < this.props.wordBlock.textBlocks.length; idx++) {
        let text = this.props.wordBlock.textBlocks[idx].value;
        if(text && text.trim().length > 0) {
          let words = text.split(/[\s,.?]+/);
          if(words && words.length > 0) {
            for(let idx2=0; idx2 < words.length; idx2++) {
              if(words[idx2].length > 0)
                wordList.push(words[idx2]);
            }
          }
        }
      }

      this.setState({wordList: wordList});
    }
  }

  // Pupulate the words UI for the user to select
  populateWords() {
    const wordViews = [];
   
    if(this.state.wordList && this.state.wordList.length > 0) {
      for(let idx=0; idx < this.state.wordList.length; idx++) {
        wordViews.push(
          <TouchableHighlight key={'Word_' + idx} underlayColor={'#ededed'} 
            onPress={() => {
              this.setState({selectedWordIdx: idx});
            }}
            style={this.state.selectedWordIdx == idx ? styles.selectedWord : styles.nonSelectedWord}
          >
            <Text style={styles.word}>{this.state.wordList[idx]}</Text>
          </TouchableHighlight>
        );
      }
    }

    return wordViews;
  }

  render() {
   
    return(
      
      <View style={[styles.container, this.props.style]}>
       

<View>

<Loader/>

</View>



     <View>
                <Text style={{marginTop:'28%',top:-5,justifyContent:'center',alignSelf:'center',color:'#364b73',fontSize:14,fontWeight:'bold'}}>Select any recognised word to search for the information</Text>
                </View>
                


      
        <ScrollView>
          <View style={styles.wordList}>
            { this.populateWords() }
          </View>
        </ScrollView>
        <View style={{backgroundColor:'#364b73',
     left:'20%',
     
      width:'60%',
        borderRadius:50,
      
        }}>
        <Button title="Search" color="white"  
          disabled={!(this.state.selectedWordIdx >= 0 && this.state.wordList && this.state.wordList.length > this.state.selectedWordIdx)}
          onPress={() => {
            this.props.onWordSelected && this.props.onWordSelected(this.state.wordList[this.state.selectedWordIdx]);
          }}/>
          
         
          
        </View>



{/* header buttons starts from here */}

<View style={{position:'absolute',left:'5%',top:'7%',justifyContent:'flex-start',
alignSelf:'flex-start',}}>          
<View style={{


backgroundColor:'#364b73',

padding:6,
borderRadius:50,


}} > 
<TouchableWithoutFeedback onPress={()=>{
// this.props.showCamera(true)
this.props.showWordList(false)
}}>

  <Text style={{color:'white'}}> Cancel </Text>
</TouchableWithoutFeedback>
</View>



</View>  


<View style={{position:'absolute',right:'5%',top:'7%',justifyContent:'flex-end',
alignSelf:'flex-end',}}>          
<View style={{


backgroundColor:'#364b73',

padding:6,
borderRadius:50,


}} > 
<TouchableWithoutFeedback onPress={()=>{
this.props.showCamera(true)
this.props.showWordList(false)
}}>

  <Text style={{color:'white'}}> Detect Again </Text>
</TouchableWithoutFeedback>
</View>



</View>  

{/* buttons ends here */}







        <View style={{minHeight: 30}}></View>
      </View>
    );
  }
}

WordSelector.propTypes = {
  wordBlock: PropTypes.object,
  onWordSelected: PropTypes.func
};

WordSelector.defaultProps = {
  wordBlock: null,
  onWordSelected: null
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'white'
  },
  header: {
    padding: 4,
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    fontSize: 20
  },
  wordList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  paddingTop:8,
  },
  selectedWord: {
    flex: 0,
    borderWidth: 1,
    borderColor: '#364b73',
    backgroundColor: '#f7f7f7',
    padding: 4,
    borderRadius:100,
  },
  nonSelectedWord: {
    flex: 0,
    borderWidth: 0,
    padding: 4,
    
  },
  word: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#364b73'
  },
  okButton: {
    marginBottom: 50,
    fontSize: 30,
  }
});




const mapStatetoProps = (state)=>{
  const {search} = state.FormHandler;
  const{alumni_data,refreshing} = state.Crud_Data;

  const{
    Ocr_Value,
    wordListOff,
  } = state.BarcodeGenerator;



return{
  wordListOff:wordListOff,
  Ocr_Value:Ocr_Value
}

}



export default connect(mapStatetoProps,{wordListOff}) (WordSelector);