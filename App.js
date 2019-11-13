/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Root } from "./src/Root";
import { Provider } from "react-redux";
import getStore from "./src/store/index";
import { PersistGate } from "redux-persist/integration/react";
import * as Font from "expo-font";

const { store, persistor } = getStore();

export default class App extends Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      // 'SCRATCHMYBACK': require('./assets/fonts/SCRATCHMYBACK.TTF'),
      PacificoRegular: require("./assets/fonts/Pacifico-Regular.ttf"),
      PattayaRegular: require("./assets/fonts/Pattaya-Regular.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    // if (this.state.fontLoaded) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/*<View style={{paddingTop: 40}}>*/}
          <StatusBar
            backgroundColor="transparent"
            translucent
            barStyle={"dark-content"}
          />
          <Root fontLoaded={this.state.fontLoaded} />
          {/*</View>*/}
        </PersistGate>
      </Provider>
    );
    // }
  }
}

// const styles=StyleSheet.create({
//     statusBar: {
//         height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT:0,
//     }
// })
