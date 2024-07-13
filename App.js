import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Appbar, PaperProvider } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import NewTask from "./Screens/NewTask";
import Home from "./Screens/Home";
import Login from "./Screens/Login";

export default function App() {
  const Stack  =createStackNavigator()

  const firebaseConfig = {
    apiKey: "AIzaSyAV9Zrvxt-nt2HPB1oTmV7PDnqzbOPGMDY",
    authDomain: "pillreminder-ce900.firebaseapp.com",
    projectId: "pillreminder-ce900",
    storageBucket: "pillreminder-ce900.appspot.com",
    messagingSenderId: "286207853954",
    appId: "1:286207853954:web:30ea546362a78150457b9b"
  };



  return (
    <PaperProvider>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="NewTask" component={NewTask}/>
      </Stack.Navigator>
     </NavigationContainer>
    </PaperProvider>
  );
}


