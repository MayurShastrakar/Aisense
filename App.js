import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './component/Home';
import Record from './component/Record';
import Demo from './component/Demo';
import Welcome from './component/Welcome';
import LogoHeader from './component/LogoHeader';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  // ***********
  const Stack = createNativeStackNavigator();

  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <LogoHeader />, // Use the LogoHeader component as the header
        }}
      >
         <Stack.Screen name="Home" component={Home} options={{
          // title: 'Home',
          // headerStyle: {
          //   backgroundColor: '#3855f5',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
        }}/> 
        
        <Stack.Screen name="Welcome" component={Welcome} />
       <Stack.Screen name="Record" component={Record} />
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


//  Blue :- #0074d9
// Orange :- #ff4136 