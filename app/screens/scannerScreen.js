import React, { Component } from 'react';
import { Alert,Linking, Dimensions, LayoutAnimation,
  Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default class ScannerScreen extends Component {
  state = {
    hasCameraPermission: null
  };

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = result => {
    if(result.data === 'sfhacks') {
      Alert.alert(
        'Scan Successful',
        'Admission Granted!',
      );
    } else {
      Alert.alert(
        'Scan Successful',
        'Admission Denied',
      );
    }
    
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.hasCameraPermission === null ?
          <Text>Requesting for camera permission</Text> :
          this.state.hasCameraPermission === false ?
            <Text>Camera permission is not granted</Text> :
            <BarCodeScanner
              onBarCodeRead={this._handleBarCodeRead}
              style={{ height: 400, width: 400 }}
            />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
});
