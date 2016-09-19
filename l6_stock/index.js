import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import StockButton from './StockButton.js';
import API from './api.js';

class l6_stock extends Component {
  constructor(props){
    super(props);
    this.state = {stockName: 'SET', stockCode: 'INDEXBKK:SET', stockIndex:'0.00', stockChangeRaw:'+0.00', stockChangePercent:'0.00%'};
    this.changeIndex = this.changeIndex.bind(this);
    this.changeIndex('SET', 'INDEXBKK:SET');
  }

  changeIndex(stockName, stockCode){
    API(stockCode).then((data)=>{
      this.setState({...data, stockName, stockCode});
    });
  }

  render() {
    let colorStyle = (this.state.stockChangeRaw && this.state.stockChangeRaw[0] == '+')? styles.green: styles.red;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.stockName}>
          {this.state.stockName}
        </Text>
        <Text style={styles.stockIndex}>
          {this.state.stockIndex}
        </Text>
        <Text style={[styles.stockChange, colorStyle]}>
          {this.state.stockChangeRaw} ({this.state.stockChangePercent})
        </Text>
        </View>
        <View style={styles.footer}>
          <StockButton name="SET" code="INDEXBKK:SET" onPress={this.changeIndex}/>
          <StockButton name="S&P" code="INDEXSP:.INX" onPress={this.changeIndex}/>
          <StockButton name="NASDAQ" code="INDEXNASDAQ:.IXIC" onPress={this.changeIndex}/>
          <StockButton name="Dow Jones" code="INDEXDJX:.DJI" onPress={this.changeIndex}/>
          <StockButton name="Shanghai" code="SHA:000001" onPress={this.changeIndex}/>
          <StockButton name="Nikkei" code="INDEXNIKKEI:NI225" onPress={this.changeIndex}/>
          <StockButton name="Hang Sang" code="INDEXHANGSENG:HSI" onPress={this.changeIndex}/>
          <StockButton name="TSEC" code="TPE:TAIEX" onPress={this.changeIndex}/>
          <StockButton name="IPC MEXICO" code="INDEXBMV:ME" onPress={this.changeIndex}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer:{
    flexDirection:'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockName:{
    fontSize:30
  },
  stockIndex:{
    fontSize: 80
  },
  stockChange:{
    fontSize: 40
  },
  button:{
    margin: 10,
    borderWidth: 1,
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'lightgray'
  },
  red:{
    color:'red'
  },
  green:{
    color:'green'
  }
});

AppRegistry.registerComponent('l6_stock', () => l6_stock);
