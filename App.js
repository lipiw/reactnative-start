import MeuComponente from './MeuComponente';
import React from 'react';                                //React é importado para utilizar o JSX.
import { StyleSheet, Text, View, ScrollView } from 'react-native';    //React Native é importado para conversão do codigo android e ios.
import { StatusBar } from 'expo-status-bar'; 

//Uma função retorna um unico componente

export default function App() {
  return (
    
  <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>React Native!</Text>
      
      <ScrollView>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
      </ScrollView>
      
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F8FF',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color: '#000080',
    fontSize: 24,
    marginBottom:24,
    marginTop:20,
  },
});
