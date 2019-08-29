import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

//Components
import FBLoginButton from '../../components/FBLoginButton'

const slides = [
  {
    key: 'somethun',
    title: 'Welcome to Room.IO',
    text: 'The one app you need to find a new roommate!',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'read bio\'s',
    text: 'Match and shit',
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Get started',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];

export default class Onboarding extends React.Component {
  _renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({showRealApp: true});
  };
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 320,
    height: 320,
  },
  text: {
    color: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});
