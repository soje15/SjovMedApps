import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBtQ2F5YjxFHVIXdp1nBO5w3OOV6swv304",
  authDomain: "my-app-63498.firebaseapp.com",
  databaseURL: "https://my-app-63498.firebaseio.com",
  projectId: "my-app-63498",
  storageBucket: "my-app-63498.appspot.com",
  messagingSenderId: "152586322436"
};
firebase.initializeApp(config);



export default class App extends React.Component {
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
