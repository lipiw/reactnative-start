import React from 'react';                                //React é importado para utilizar o JSX.
import { StyleSheet, Text, View } from 'react-native';


export default function App(){
    return(
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Esse é o titulo do card</Text>
            <Text style={styles.cardSubTitle}>Esse é o sub-titulo</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        padding:12,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:15,
        borderRadius:15,
        borderWidth:3
      },
      cardTitle:{
        fontSize:18,
        fontWeight:'bold',
      },
      cardSubTitle:{
        color:'#999',
        fontSize:16
      }
});