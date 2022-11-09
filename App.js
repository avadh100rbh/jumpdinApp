import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/authStack';


export default function App() {
  return (
    <NavigationContainer>
     <AuthStack/>
    </NavigationContainer>
  );
}