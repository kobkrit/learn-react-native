/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Navigator, TouchableHighlight, AppRegistry, StyleSheet, Text, View} from 'react-native';

const routes = [
  {
    title: 'First Scene',
    index: 0
  }, {
    title: 'Second Scene',
    index: 1
  }
]

class l7_movie extends Component {
  render() {
    return (
      <Navigator style={styles.container}
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={
          (route, navigator) => {
            let bgcolor = 'yellow';
              if (route.index == 1){
                  bgcolor = 'pink';
            }
            return (
            <TouchableHighlight style={{flex:1, marginTop: 50}} onPress={() => {
                if (route.index == 0) {
                  navigator.push(routes[1]);
                } else {
                  navigator.pop();
                }
              }}>
              <View style={{flex:1, backgroundColor: bgcolor}}>
                <Text>Hello {route.title}!</Text>
              </View>
            </TouchableHighlight>
            );
          }
        }
        // Navigator.SceneConfigs.PushFromRight (default)
        // Navigator.SceneConfigs.FloatFromRight
        // Navigator.SceneConfigs.FloatFromLeft
        // Navigator.SceneConfigs.FloatFromBottom
        // Navigator.SceneConfigs.FloatFromBottomAndroid
        // Navigator.SceneConfigs.FadeAndroid
        // Navigator.SceneConfigs.HorizontalSwipeJump
        // Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
        // Navigator.SceneConfigs.VerticalUpSwipeJump
        // Navigator.SceneConfigs.VerticalDownSwipeJump
        configureScene={
          (route, routeStack) =>
            Navigator.SceneConfigs.VerticalUpSwipeJump
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
                   <Text>Back</Text>
                 </TouchableHighlight>
               )
             },
             RightButton: (route, navigator, index, navState) =>
               { return (<Text>Done</Text>); },
             Title: (route, navigator, index, navState) =>
               { return (<Text>{route.title}</Text>); },
           }}
           style={{backgroundColor: 'gray', height: 50}}
         />
      }
    />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('l7_movie', () => l7_movie);
