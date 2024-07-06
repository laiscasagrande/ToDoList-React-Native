import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Appbar, PaperProvider } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import NewTask from "./Screens/NewTask";
import Home from "./Screens/Home";
import Login from "./Screens/Login";

export default function App() {
  const Stack  =createStackNavigator()

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


