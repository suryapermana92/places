import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Header from './src/components/Header'
import PlacesList from './src/components/PlacesList'
import axios from 'axios'

export default class App extends Component {
  
  render() {
    return (
      <View style={{backgroundColor: '#f8fccf'}}>
        <Header title={'Food Hunting Places'} />
        <ScrollView>
          <PlacesList />
        </ScrollView>
      </View>
    );
  }
}
