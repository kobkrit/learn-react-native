import React, {Component} from 'react';
import {TouchableHighlight, AppRegistry, ListView, StyleSheet, Text, View, Image} from 'react-native';
import api from './api';

class ListScreen extends Component {
  constructor() {
   super();
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
     dataSource: ds.cloneWithRows([]),
   };
   api.search('harry').then((data)=>{
     this.setState({dataSource: ds.cloneWithRows(data)});
   });
  }

  render() {
    return (
      <ListView style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {
          return (
            <View style={styles.row}>
                <View style={{flex:3}}>
                  <Image style={styles.image} source={{uri: rowData.Poster}}/>
                </View>
                <View style={{flex:10, padding: 10}}>
                  <Text style={styles.title}>{rowData.Title} ({rowData.Year})</Text>
                </View>
                <View style={{flex:1, justifyContent:'center'}}>
                  <Text style={styles.title}>></Text>
                </View>
            </View>

          );
        }}
        renderSeparator={(sectionID, rowID, adjacentRowHighlighted) =>
          <View key={rowID} style={{height:1, backgroundColor: 'lightgray'}}/>
        }
      />
    );
  }
}
const styles = StyleSheet.create({
  container:{
    padding: 10,
    paddingTop:65,
    flex:1
  },
  row:{
    flexDirection: 'row',
    height: 100
  },
  image:{
    height: 100
  },
  title:{
    fontSize: 20
  }
});

export default ListScreen;
