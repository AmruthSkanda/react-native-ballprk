import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  Image,
  ScrollView,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-fa-icons';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import PageDetails from './PageDetails';
import BottomTab from './BottomTab';
import pageData from '../utils/store';
const profileData = pageData.Athelets[0].AthleteProfile;

const window = Dimensions.get('window');
const PARALLAX_HEADER_HEIGHT = 200;
const STICKY_HEADER_HEIGHT = 60;

class MainApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView
          stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
          parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
          backgroundSpeed={10}
          renderBackground={() => (
            <View key="background">
              <Image source={{uri: 'http://www.schoolofheart.com/wp-content/uploads/2016/05/basketball.jpg',
                              width: window.width,
                              height: PARALLAX_HEADER_HEIGHT}}/>
              <View style={styles.opaqueBackground}/>
            </View>
          )}

          renderForeground={() => (
            <View key="parallax-header" style={ styles.parallaxHeader }>
              <Text style={ styles.sportsManName }>
                {profileData.name}
              </Text>
              <Text style={ styles.sectionTitleText }>
                {profileData.sport} {"\n"}
                {profileData.education}
              </Text>
            </View>
          )}

          renderStickyHeader={() => (
            <View key="sticky-header" style={styles.stickySection}>
              <Text style={styles.stickySectionText}>{profileData.name}</Text>
            </View>
          )}

          renderFixedHeader={() => (  
            <View key="fixed-header" style={styles.fixedSection} elevation={10}>
              <Text style={styles.fixedBackIcon}>
                  <Icon name="long-arrow-left"  />
              </Text>
              <Text style={styles.fixedBellIcon}>
                  <Icon name="bell-o" />
              </Text>
            </View>
          )}>
          <PageDetails />
        </ParallaxScrollView>
        <BottomTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  opaqueBackground: {
    position: 'absolute',
    top: 0,
    width: window.width,
    backgroundColor: 'rgba(59,52,52,.3)',
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3434'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    //margin: 10,
  },
  fixedSection: {
    width: window.width,
    height: STICKY_HEADER_HEIGHT,
    position: 'absolute',
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fixedBackIcon: {
    fontSize: 20,
    color:'white',
    left:10,
  }, 
  fixedBellIcon: {
    position: 'absolute',
    right:10,
    fontSize: 20,
    color:'white',
  },
  parallaxHeader: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 120,
    paddingLeft:10
  },
  sportsManName: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 15,
    paddingVertical: 5
  },
});

export default MainApp;