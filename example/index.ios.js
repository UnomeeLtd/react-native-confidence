/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import RNConfidence from 'react-native-confidence';
import Config from './config'; 

export default class example extends Component {
  constructor() {
    super()

    this.confidence = new RNConfidence(Config);
  }
  render() {
    console.log(this.confidence);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          BUILD Environment: 
          { this.confidence.getBuildEnv() }
        </Text>
        <Text style={styles.instructions}>
          Value from InfoPlist: 
          { this.confidence.getPlist().CFBundleIdentifier }
        </Text>
        <Text style={styles.instructions}>
          Meta Filter: 
          { this.confidence.meta('/').description }
        </Text>
        <Text style={styles.instructions}>
          Filter: 
          { this.confidence.get('/apiURL') }
        </Text>
        <Text style={styles.instructions}>
          Deep Filter: 
          { this.confidence.get('/random/thing/that/isDeep') }
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('example', () => example);
