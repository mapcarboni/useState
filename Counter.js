import React, { useState } from 'react'; // Importa React e o hook useState do React
import { View, Text, Button, StyleSheet } from 'react-native'; // Importa componentes View, Text e Button do React Native

export default function Counter() { // Define um componente funcional chamado Counter
  const [count, setCount] = useState(0); // Declara uma variável de estado 'count' e uma função 'setCount' para atualizá-la, inicializando com 0

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você clicou {count} vezes</Text>
      <Button title="Clique aqui" onPress={() => setCount(count + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
});
