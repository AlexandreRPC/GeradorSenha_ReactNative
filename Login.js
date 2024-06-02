// LoginScreen.js
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import firebaseApp from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const auth = getAuth(firebaseApp); // Obtenha a instância de autenticação usando a instância do aplicativo Firebase

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login bem-sucedido
                navigation.navigate('SecondScreen'); // Navega para a segunda tela
            })
            .catch((error) => {
                Alert.alert("Erro", error.message);
            });
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/logo.png')}
                style={styles.logo}
            />

            <TextInput 
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
            />
            
            <TextInput
                style={styles.input} 
                secureTextEntry={true}
                placeholder="Digite sua Senha"
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={handleLogin}
            >
                <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    input: {
        marginTop: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        padding: 10
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
});
