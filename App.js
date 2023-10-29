import React from "react";
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Home from "./src/telas/Home";

function App() {
  return <SafeAreaView>
    <Home />
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  flex: 1,
});

export default App;