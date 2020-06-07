/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import {
  // Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
import CountTop from "./Component/CountTop";
import TwoTab from "./Component/TwoTab";
import { Content, Grid, Col, Header, Title, H3, H1, Body } from 'native-base';

export default class App extends React.Component {
  render() {
    return (

      <View style={{ flex: 1,}}>
        <Header>
          <Body>
            <Title>CheckBill</Title>
          </Body>
        </Header>
        <View style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
          <CountTop count={0} />
          <TwoTab />
        </View>
      </View>

    );
  }
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


