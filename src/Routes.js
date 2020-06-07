import React from 'react'
import { Text } from 'react-native'
import Main from './pages/Main/Main'
import Splash from './pages/Splash/Splash'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import EmailVerification from './pages/EmailVerification/EmailVerification'
import Salao from './pages/Salao/Salao'
import Cozinha from './pages/Cozinha/Cozinha'
import Perfil from './pages/Perfil/Perfil'
import CompanyData from './pages/CompanyData/CompanyData'
import Dashboard from './pages/Dashboard/Dashboard'
import Scanner from './pages/Scanner/Scanner'
import Employees from './pages/Employees/Employees'


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
      <Stack.Screen name="Scanner" component={Scanner} />

      <Stack.Screen name="EmailVerification" component={EmailVerification} />
      <Stack.Screen name="ComanDash" component={comandashTabs} />

    </Stack.Navigator>
  )
}

function mainTabRoutes() {
  return (
    <Tab.Navigator
      backBehavior={"none"}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'qrcode-scan' : 'qrcode-scan';
            color = focused ? Colors.red : "#FFF";

          } else if (route.name === 'Salao') {
            iconName = focused ? 'silverware-fork-knife' : 'silverware-fork-knife';
            color = focused ? Colors.green : "#FFF";


          } else if (route.name === 'Cozinha') {
            iconName = focused ? 'stove' : 'stove';
            color = focused ? Colors.blue : "#FFF";

          } else if (route.name === 'Perfil') {
            iconName = focused ? 'qrcode' : 'qrcode';
            color = focused ? Colors.red : "#FFF";

          }


          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarLabel: ({ color, focused }) => {
          let labelName;


          if (route.name === 'Home') {
            labelName = 'Home'
            color = focused ? Colors.red : "#FFF";

          } else if (route.name === 'Salao') {
            labelName = 'Salão';
            color = focused ? Colors.green : "#FFF";


          } else if (route.name === 'Cozinha') {
            labelName = 'Cozinha';
            color = focused ? Colors.blue : "#FFF";

          } else if (route.name === 'Perfil') {
            labelName = 'Perfil';
            color = focused ? Colors.red : "#FFF";
          }
          return <Text style={{ color: color, fontFamily: 'Century Gothic' }}>{labelName}</Text>
        }

      })}

      tabBarOptions={{
        activeTintColor: Colors.red,
        style: { borderTopColor: Colors.primary },

        inactiveTintColor: "#FFF",
        activeBackgroundColor: Colors.primary,
        inactiveBackgroundColor: Colors.primary,
      }}


    >
      <Tab.Screen name="Home" component={Main} />
      <Tab.Screen name="Salao" component={Salao} />
      <Tab.Screen name="Cozinha" component={Cozinha} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  )
}

function comandashTabs() {
  return (
    <Tab.Navigator
      backBehavior={"none"}

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'view-dashboard' : 'view-dashboard';
            color = focused ? Colors.red : "#FFF";

          } else if (route.name === 'Employees') {
            iconName = focused ? 'account-settings' : 'account-settings';
            color = focused ? Colors.green : "#FFF";

          } else if (route.name === 'CompanyData') {
            iconName = focused ? 'store' : 'store';
            color = focused ? Colors.blue : "#FFF";

          }


          return <Icon name={iconName} size={size} color={color} />;
        },

        tabBarLabel: ({ color, focused }) => {
          let labelName;


          if (route.name === 'Dashboard') {
            labelName = 'Dashboard'
            color = focused ? Colors.red : "#FFF";

          } else if (route.name === 'Employees') {
            labelName = 'Funcionários';
            color = focused ? Colors.green : "#FFF";

          } else if (route.name === 'CompanyData') {
            labelName = 'Empresa';
            color = focused ? Colors.blue : "#FFF";
          }
          return <Text style={{ color: color, fontFamily: 'Century Gothic' }}>{labelName}</Text>
        }

      })}

      tabBarOptions={{
        activeTintColor: Colors.red,
        style: { borderTopColor: Colors.primary },

        inactiveTintColor: "#FFF",
        activeBackgroundColor: Colors.primary,
        inactiveBackgroundColor: Colors.primary,
      }}


    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Employees" component={Employees} />
      <Tab.Screen name="CompanyData" component={CompanyData} />
    </Tab.Navigator>
  )
}


