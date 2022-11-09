import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Add, Join, Signin} from '../screens/auth';
import {Home, profile} from '../screens/dashboard';
import {CustomDrawer} from '../src/component/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Drawer1() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} 
      options={{headerShown: false}}/>
      <Drawer.Screen name="profile" component={profile} 
      options={{headerShown: false}}/>
    </Drawer.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Join">
      <Stack.Screen
        name="Join"
        component={Join}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Add" component={Add} options={{headerShown: false}} />
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="drawer"
        component={Drawer1}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
