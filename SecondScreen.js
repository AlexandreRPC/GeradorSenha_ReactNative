// screens/SecondScreen.js
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MinhasSenhas from './listaMinhasSenhas';

export default function SecondScreen() {
  const [sliderValue, setSliderValue] = useState(8);
  const {saveItem} = MinhasSenhas();

    async function handleCopySenhas(){
      await Clipboard.setSringAsync(senhas)
      await saveItem("@pass",senhas)
      
      alert("Senha salva com sucesso!")
      handleClose();
    }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textBtn}>Minhas Senhas</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("./assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>{sliderValue} Caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={8}
          maximumValue={20}
          step={1}
          value={sliderValue}
          onValueChange={value => setSliderValue(value)}
          maximumTrackTintColor='orange'
          minimumTrackTintColor='blue'
          thumbTintColor='#f3f3f3'
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>
          Gerar senha
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40
  },
  title: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 24, // Adicionado para maior destaque
    marginBottom: 14 // Espaçamento entre o título e a área do slider
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8
  },
  button: {
    padding: 12,
    marginBottom: 14,
    marginTop: 14,
    backgroundColor: '#FFF',
    borderRadius: 8,
    alignItems: 'center', // Alinhamento do texto no centro
  },
  textBtn: {
    fontWeight: 'bold',
    color: 'blue',
    fontSize: 16,
  },
  header: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20
  },
});
