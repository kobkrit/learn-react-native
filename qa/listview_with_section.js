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
  View,
  ListView
} from 'react-native';

export default class qa extends Component {
  constructor(props){
    super(props);
    let dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: dataSource.cloneWithRowsAndSections({
        Cat:[
          {name: 'David'},
          {name: 'Razor'},
          {name: 'Tiger'},
          {name: 'Lion'},
        ],
        Dog:[
          {name: 'Buff'},
          {name: 'Puffy'},
          {name: 'Leo'},
          {name: 'Numnim'},
        ]
      })
    };
  }

  renderRow(obj){
    return (
      <View style={styles.data}>
        <Text>{obj.name}</Text>
      </View>
    )
  }

  renderSectionHeader(sectionData, category){
    return(
      <View style={styles.category}>
        <Text style={styles.categoryText}>{category}</Text>
      </View>
    );
  }


  render() {
    return (
      <View style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSectionHeader={this.renderSectionHeader}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  category:{
    backgroundColor: '#555555',
    padding: 10
  },
  categoryText:{
    color: '#fff'
  },
  data:{
    padding: 10,
    borderBottomWidth: 1,
  }
});

AppRegistry.registerComponent('qa', () => qa);
