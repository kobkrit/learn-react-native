/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Navigator, StatusBar, TouchableHighlight, AppRegistry, StyleSheet, Text, View} from 'react-native';

const routes = [
  {
    title: 'Movie Explorer',
    index: 0
  }, {
    title: 'Movie Detail',
    index: 1
  }
]

class l7_movie extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="darkred"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={
            (route, navigator) =>
            <View style={{padding: 100}}>
              <TouchableHighlight onPress={() => {
                  if (route.index == 0) {
                    navigator.push(routes[1]);
                  } else {
                    navigator.pop();
                  }
                }}>
                <Text style={styles.titleText}>Hello {route.title} World!!</Text>
              </TouchableHighlight>
            </View>

          }
          configureScene={
            (route, routeStack) =>
              Navigator.SceneConfigs.FloatFromBottom
          }
          navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) => {
                 if (route.index == 0){
                   return null;
                 }
                 return (
                   <TouchableHighlight onPress={()=>navigator.pop()}>
                     <Text style={styles.navigationBarText}>Back</Text>
                   </TouchableHighlight>
                 )
               },
               RightButton: (route, navigator, index, navState) => { return null; },
               Title: (route, navigator, index, navState) =>
                 { return (<Text style={[styles.navigationBarText, styles.titleText]}>{route.title}</Text>); },
             }}
             style={styles.navigationBar}
           />
        }
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBar:{
    backgroundColor: 'darkred',
  },
  navigationBarText:{
    color: 'white',
    padding: 10,
    fontSize: 15
  },
  titleText:{
    fontSize: 20,
    paddingTop:5
  }

});

AppRegistry.registerComponent('l7_movie', () => l7_movie);
