import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState("Hello, World!");

  const changeText = () => {
    setText("Text Changed!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button title="Change Text" onPress={changeText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
