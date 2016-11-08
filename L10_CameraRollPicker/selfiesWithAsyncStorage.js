var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  Slider,
  AsyncStorage
} from 'react-native';

export default class L10_CameraRollPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      star3: [],
      star2: [],
      star1: [],
      image: null,
      modalVisible: false,
      value: 3,
      fullScreenImage: null,
      fullScreenModalVisible: false
    };
    AsyncStorage.getItem('state').then((myState) => {
      console.log(myState);
      this.setState(JSON.parse(myState || '{}'));
    });
    this.clearState = this.clearState.bind(this);
    this.takePhoto = this.takePhoto.bind(this);
    this.chooseImage = this.chooseImage.bind(this);
    this.setImage = this.setImage.bind(this);
    this.putImageIntoList = this.putImageIntoList.bind(this);
    this.openFullScreenModal = this.openFullScreenModal.bind(this);
  }

  saveState(){
    AsyncStorage.setItem('state', JSON.stringify(this.state));
  }

  clearState(){
    AsyncStorage.removeItem('state');
    this.setState({star3:[], star2:[], star1:[]});
  }

  putImageIntoList() {
    this.setState({
      ['star' + this.state.value]: [
        ...this.state['star' + this.state.value],
        this.state.image
      ],
      modalVisible: false,
      value: 3
    });
    setTimeout(() => this.saveState(), 0);
  }

  takePhoto() {
    ImagePicker.launchCamera({
      noData: true
    }, this.setImage);
  }

  chooseImage() {
    ImagePicker.launchImageLibrary({
      noData: true
    }, this.setImage);
  }

  openFullScreenModal(source) {
    this.setState({fullScreenImage: source, fullScreenModalVisible: true});
  }

  setImage(response) {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      //If it is iOS, remove 'file://' prefix
      let source = {
        uri: response.uri.replace('file://', ''),
        isStatic: true
      };

      //If android, don't need to remove the 'file://'' prefix
      if (Platform.OS === 'android') {
        source = {
          uri: response.uri,
          isStatic: true
        };
      }
      this.setState({image: source, modalVisible: true});
    }
  }

  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Modal animationType={"slide"} transparent={false} visible={this.state.fullScreenModalVisible} onRequestClose={() => {
          alert("Modal has been closed.")
        }}>
          <TouchableOpacity style={{
            flex: 1
          }} onPress={() => this.setState({fullScreenModalVisible: false})}>
            <Image style={{
              flex: 1
            }} source={this.state.fullScreenImage}></Image>
          </TouchableOpacity>
        </Modal>
        <Modal animationType={"slide"} transparent={true} visible={this.state.modalVisible} onRequestClose={() => {
          alert("Modal has been closed.")
        }}>
          <View style={styles.modal}>
            <View>
              <TouchableOpacity style={styles.closeButton} onPress={() => this.setState({modalVisible: false})}>
                <Text>X</Text>
              </TouchableOpacity>
              <Text>Please select coolness of this picture.</Text>
              <Text style={styles.headerText}>{this.state.value}</Text>
              <Slider maximumValue={3} minimumValue={1} step={1} value={3} onValueChange={(value) => this.setState({value: value})}></Slider>
              <TouchableOpacity style={styles.submitButton} onPress={() => {
                this.putImageIntoList();
              }}>
                <Text style={styles.buttonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={{
          flex: 1,
          paddingTop: 22
        }}>
          <View style={styles.title}>
            <Text style={styles.titleText}>3 Stars</Text>
          </View>
          <View style={styles.row}>
            {this.state.star3.map((source, i) => <TouchableOpacity onPress={() => this.openFullScreenModal(source)}>
              <Image key={"star3-" + i} style={styles.image} source={source}></Image>
            </TouchableOpacity>)}
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>2 Stars</Text>
          </View>
          <View style={styles.row}>
            {this.state.star2.map((source, i) => <TouchableOpacity onPress={() => this.openFullScreenModal(source)}>
              <Image key={"star2-" + i} style={styles.image} source={source}></Image>
            </TouchableOpacity>)}
          </View>
          <View style={styles.title}>
            <Text style={styles.titleText}>1 Star</Text>
          </View>
          <View style={styles.row}>
            {this.state.star1.map((source, i) => <TouchableOpacity onPress={() => this.openFullScreenModal(source)}>
              <Image key={"star1-" + i} style={styles.image} source={source}></Image>
            </TouchableOpacity>)}
          </View>
        </View>
        <View style={styles.rowCenter}>
          <TouchableOpacity style={styles.button} onPress={this.takePhoto}>
            <Text style={styles.buttonText}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.chooseImage}>
            <Text style={styles.buttonText}>Gallery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowCenter}>
        <TouchableOpacity style={styles.button} onPress={this.clearState}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100
  },
  button: {
    backgroundColor: 'gray',
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white'
  },
  modal: {
    height: 200,
    width: 300,
    marginTop: 200,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    alignSelf: 'flex-end'
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: 'darkblue',
    width: 100,
    height: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center'
  },
  title: {
    backgroundColor: 'gray',
    padding: 5
  },
  titleText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('L10_CameraRollPicker', () => L10_CameraRollPicker);
