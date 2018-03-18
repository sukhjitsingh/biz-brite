import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, SafeAreaView, Platform, NativeModules } from 'react-native';

export default class AccountScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isBalanceLoading: true,
      balance: null,
    }
  }

componentDidMount() {
  this.getBalances()
}

  async getBalances() {
    try {
      let response = await fetch(`https://localhost:3000/api/balance`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });

      let responseJSON = null

      console.log(response.status)

      if (response.status === 200) {
        responseJSON = await response.json();
        console.log(responseJSON)

        this.setState({
          isBalanceLoading: false,
          balance: responseJSON,
        })


      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        console.log(responseJSON)

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

  render() {
    const { payment, isBalanceLoading } = this.state
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
          {!isBalanceLoading &&
            <View>
              <Text> Balance: {balance.balancef} </Text>
            </View>
          }
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : NativeModules.StatusBarManager.HEIGHT,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
