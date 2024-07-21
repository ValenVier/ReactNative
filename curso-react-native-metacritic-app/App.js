import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native'; //importamos el componente Image

const icon = require('./assets/icon.png') //Importamos una imagen; no solo importar sino también capturar la url

/* otra opción de importar */
/* import icon from './assets/icon.png */

export default function App() {
  //mostramos la imagen con el componente Image
  //width: 100, height: 100 -> número de pixeles visuales teniendo en cuenta el dispositivo
  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 100, height: 100 }}/> 
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
