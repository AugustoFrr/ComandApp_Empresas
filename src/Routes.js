import React from 'react'

import Main from './pages/Main/Main'
import Splash from './pages/Splash/Splash'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import EmailVerification from './pages/EmailVerification/EmailVerification'
import Main2 from './pages/Main2/Main2'
import Main3 from './pages/Main3/Main3'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from './styles/colors'


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Main" component={mainTabRoutes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} />

    </Stack.Navigator>
  )
}

// function TabRoutes() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Comanda" component={Comanda} />
//             <Tab.Screen name="ProductMenu" component={ProductMenu} />
//         </Tab.Navigator>
//     )
// }

function mainTabRoutes() {
  return (
    <Tab.Navigator tabBarOptions={{
      style:{borderTopColor: Colors.primary},
      activeTintColor: Colors.red,
      inactiveTintColor: "#FFF",
      activeBackgroundColor: Colors.primary,
      inactiveBackgroundColor: Colors.primary,
    }}

    backBehavior={"none"}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
          } else if (route.name === 'Buscar') {
            iconName = focused ? 'feature-search' : 'feature-search';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'qrcode' : 'qrcode';
          }


          return <Icon name={iconName} size={size} color={color} />;
        },
      })}


    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Buscar" component={Main2} />
      <Tab.Screen name="Perfil" component={Main3} />
    </Tab.Navigator>
  )
}


