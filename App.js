import * as React from 'react';
import { StyleSheet, Button, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> WELCOME</Text>
      <Text style={styles.text1}> TO </Text>
      <Text style={styles.text2}> SMART AQUAPONICS </Text>
    </View>
  );
}


function ControlScreen() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text1}>Feed Fish</Text>
       {/* <Button onPress = { () => { console.log("DONE!")} } title="Open" /> */}
       <Button title="Click Here" color="blue" onPress = {()=>{ Alert.alert("Done!")}}/>
    </View>
  );
}
function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
      color: 'black',
      fontSize: 45,
      fontWeight: 'bold',
      textAlignVertical: 'top',
      marginTop: 0,
  },
  text1:{
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlignVertical: 'top',
    marginTop: 0,
},
text2:{
  color: 'black',
  fontSize: 40,
  fontWeight: 'bold',
  textAlignVertical: 'top',
  marginTop: 0,
},
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

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
