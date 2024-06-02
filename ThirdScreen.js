import { useState, useEffect } from 'react';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {useIsFocused} from '@react-navigation/native'
import MinhasSenhas from './listaMinhasSenhas';



export default function ThirdScreen() {
   const[MinhasSenhas, setMinhasSenhas ] = useState([])
   const focused =useIsFocused();
   const {getItem} = useStorage();

   useEffect(()=>{
      async function loadMinhasSenhas(){
        const senhas = await getItem("@pass")
        setMinhasSenhas(senhas);

      }

      loadMinhasSenhas();
   },[focused])

    return(
      <SafeAreaView style={{flex:1,}}>
        <view style={style.header}>
        <text style={style.title}>Minhas senhas</text>
        </view>

        <view style={style.content}>
          <FlatList
            style={{ flex:1, paddingTop:14,}}   
            data={MinhasSenhas}
            keyExtractor={ (item) => String(item)}
            renderItem={({Item}) => <Text>{item}</Text> }
            />

        </view>
      </SafeAreaView>
    )
}




const style = StyleSheet.create({
  header:{
    backgroundColor:"#392de9",
    paddingTop:58,
    paddingBottom:14,
    paddingLeft:14,
    paddingRight:14,
  
  },
   title:{
    fontSize: 20,
    color: "#FFF",
    fontWeight: 'bold'
  },
  content:{
    flex: 1,
    paddingLeft:14,
    paddingRight:14,
  }

   
})