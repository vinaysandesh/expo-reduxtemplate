import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();
const RootScreen = ()=>{
    return(
       <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name={"Home"}  component={HomeScreen}/>
          </Stack.Navigator>
       </NavigationContainer>
    )
}
export default RootScreen;