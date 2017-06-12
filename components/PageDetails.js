import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';
import Icon from 'react-native-fa-icons';
import pageData from './utils/store';
const profileData = pageData.Athelets[0].AthleteProfile;

class PageDetails extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<View style={styles.pageContainer}>
				<TouchableHighlight	underlayColor="transparent" onPress={()=>{}}>
					<View style={[styles.msgButton,{backgroundColor:'#3B3434'}]}>
						<Text style={styles.btnText}>
							Message
						</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight underlayColor="transparent" onPress={()=>{}}>
					<View style={[styles.msgButton,{backgroundColor:'#497A3A'}]}>
						<Text style={styles.btnText}>
							Book Session
						</Text>
					</View>
				</TouchableHighlight>
				<View style={styles.quoteContainer}>
					<Text style={styles.quoteLeft}>
		                <Icon name="quote-left" />
		                <Text style={styles.quoteText}>  
		                	{profileData.quotes[0].quote}
		                </Text>
		            </Text>
		            <Text style={styles.quotedBy}>{profileData.quotes[0].quotedBy}</Text>
		            <View style={{paddingTop:20, width: 150, borderBottomColor: '#3B3434', borderBottomWidth: 1, marginLeft:50}}/>
				</View>
				<View style={styles.textContainer}>
					<Text style={{fontSize:18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac nulla erat. Suspendisse mattis egestas tincidunt. Ut eleifend rutrum commodo. Nam pharetra dolor in risus placerat scelerisque et vel purus. Fusce suscipit tellus a metus gravida, sed accumsan ante congue. Vivamus sed elementum libero, quis tincidunt risus. Curabitur et blandit nulla. Morbi risus leo, rutrum porta mi ut, molestie suscipit nisl. Proin varius, tellus vel condimentum aliquet, tellus ligula egestas lectus, eget consectetur nisl enim sit amet felis. Suspendisse varius ultrices quam. Nulla quis efficitur mi. Donec eu suscipit felis, ut accumsan eros. Nam feugiat, elit sed tempus ullamcorper, massa ligula tristique erat, non consectetur augue justo ut mauris.
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	pageContainer:{
		flex:1,
		margin:10,
		paddingTop:15,
		alignItems:'center',
	},
	msgButton:{
		margin:10,
		width:300,
		height:50,
		alignItems:'center',
		justifyContent:'center',
	},
	btnText:{
		fontSize:16,
		color:'white'
	},
	quoteContainer:{
		width:260,
		margin:20,
	},
	quoteLeft:{
		fontSize:30,
		color:'#3B3434',
	},
	quotedBy:{
		textAlign: 'right',
		color: '#3B3434',
		fontSize:20,
		paddingTop:10,
		fontFamily: 'sans-serif-light',
		fontStyle: 'italic'
	},
	quoteText:{
		color: '#3B3434',
		fontSize:18,
	},
	textContainer:{
		margin:14,
		paddingTop:20,
	}
});

export default PageDetails;