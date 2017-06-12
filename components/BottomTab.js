import React, {Component} from 'react'
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native'
import Icon from 'react-native-fa-icons';
const icons = ["home","search","inbox","user-o"];

class BottomTab extends Component{
	render(){
		let iconsView = icons.map((icon)=>{
			return(
				<Icon name={icon} style={styles.iconStyle}/>
			)
		});
		return(
			<View style={styles.bottomContainer} elevation={10}>
				{iconsView}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	bottomContainer:{
		height:50,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems:'center',
		justifyContent:'space-around'
	},
	iconStyle:{
		fontSize:23,
		color:'#3B3434'
	}
});

export default BottomTab;