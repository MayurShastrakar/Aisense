import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // ***********
  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#3855f5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/> 
        {/* <Stack.Screen name="login" component={Login} /> */}
        {/* <Stack.Screen name="SignUp" component={Signup} /> */}
       {/* <Stack.Screen name="Capture" component={Capture} /> */}
      </Stack.Navigator>
    </NavigationContainer>
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


//  Blue :- #3855f5
// Orange :- #f56738 