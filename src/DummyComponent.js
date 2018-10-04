import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'normal',
  },
});

class DummyComponent extends Component {
  componentDidMount() {
    this.commonCatchUp();
  }

  commonCatchUp = () => {
    // nothing its fine
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hey I am Dummy</Text>
      </View>
    );
  }
}

export default DummyComponent;
