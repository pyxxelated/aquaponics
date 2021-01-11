import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details!</Text>
//     </View>
//   );
// }

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      /> */}
    </View>
  );
}

function ControlScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Control screen</Text>
    </View>
  );
}
function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dashboard</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/* <HomeStack.Screen name="Details" component={DetailsScreen} /> */}
    </HomeStack.Navigator>
  );
}

const ControlStack = createStackNavigator();

function ControlStackScreen() {
  return (
    <ControlStack.Navigator>
      <ControlStack.Screen name="Control" component={ControlScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </ControlStack.Navigator>
  );
}

const DashboardStack = createStackNavigator();

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      {/* <SettingsStack.Screen name="Details" component={DetailsScreen} /> */}
    </DashboardStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Control" component={ControlStackScreen} />
        <Tab.Screen name="Dashboard" component={DashboardStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
