import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './global.css';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import MainPage from './pages/MainPage';
import { PreferencesProvider } from './context/Preferences';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <PreferencesProvider>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="main" component={MainPage} />
        </Stack.Navigator>
      </PreferencesProvider>
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
