import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { persistor, store } from './ReduxStore/store';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'; 
import Test from './Test';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './PaperTheme/Theme';
export default function App() {
  return (
   <Provider store={store} >
   <PersistGate loading={null} persistor={persistor}>
   <PaperProvider theme={theme}>
   <Test/>
   </PaperProvider>
   </PersistGate>
   </Provider>
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
