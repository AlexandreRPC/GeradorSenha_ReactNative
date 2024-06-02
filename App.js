import * as React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import MinhasSenhas from './listaMinhasSenhas';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Registro do componente App como componente raiz do aplicativo
AppRegistry.registerComponent('GeradorSenha', () => App); // Substitua 'NomeDoSeuApp' pelo nome do seu aplicativo

export default App;
