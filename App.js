import React from 'react';
import { StyleSheet, View } from 'react-native'
import Titulo from "./src/components/Titulo/"
import Form from "./src/components/Form/"

export default function App() {
  return (
    <View style={styles.container}>
      
      <Titulo/>
      <Form/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17203c',
    paddingTop: 80
  },
});
