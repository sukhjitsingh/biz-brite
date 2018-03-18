import React, { Component } from 'react';

import HomeTabs from './app/navigation/homeTabs'

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <HomeTabs />;
  }
}