import Barcode from "react-native-barcode-builder";
import React, {Component} from 'react';
import { View,Text } from "native-base";

export default class practice extends Component{

render(){return(

<View style={{top:100}}>
<Text>
<Barcode value="23123125435" format="CODE128" />
</Text>
</View>

)}







}