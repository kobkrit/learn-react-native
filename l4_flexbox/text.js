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

class flexbox extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={{height:20}}/>


          <View>
            <Text style={{fontWeight: 'bold'}}>ABCDE</Text>
            <Text style={{color: 'red'}}>ABCDE</Text>
          </View>

          {/* Nested Text */}
          <Text style={{fontWeight: 'bold'}}>
             I am bold
             <Text style={{color: 'red'}}>
               and red and red and red and red
               and red and red and red
             </Text>
          </Text>
          <Text style={{fontSize: 30, fontWeight: '400',
            fontStyle: 'italic'}}>
            Big and italic
          </Text>
          <View style={{width:300, borderColor: '#000',
             borderWidth: 2}}>
            <Text style={{fontWeight: 'bold',
            textAlign: 'right', textDecorationLine: 'underline'}}>
              Underlined Bold and on the right
            </Text>
          </View>
          <Text style={{fontSize:50,
            textShadowOffset:{width:10,height:10},
            textShadowColor: '#aaa', textShadowRadius: 10}}>
            Huge with Shadow
          </Text>
        </View>
      </View>
    );
 }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('flexbox', () => flexbox);


{/* <View>
  {[...Array(3)].map((x, c) =>
    <View style={styles[`container${c+1}`]}>
    {[...Array(3)].map((x, i) =>
      <Text style={styles.big}>
        Container {c+1}: {i+1}
      </Text>
    )}
    </View>
  )}
</View> */}
