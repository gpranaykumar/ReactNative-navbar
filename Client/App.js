import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import SettingsSecond from './screens/SettingsSecond';
import 'react-native-gesture-handler'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
const SettingDrawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Text style={{ color:"#FFFFFF", fontWeight: 'bold' }}>Profile Page Logo Fun</Text>
    // <Image
    //   style={{ width: 50, height: 50 }}
    //   source='./.expo/assets/icon.png'
    // /> 
  );
}

const HomeStackScreen = () => (
   <HomeStack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
        <HomeStack.Screen name="Home" component={Home} 
          options={{
            title: 'Home Page',
            headerRight: () => (
              <Button 
                onPress={() => alert('This is a button!')}
                title="Info"
                
              />
            ),}}
          />
        <HomeStack.Screen name="Profile" component={Profile} 
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }} 
          />
      </HomeStack.Navigator> 
)

const AboutStackScreen = () => (
    <AboutStack.Navigator initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <AboutStack.Screen name="About" component={About} initialParams={{ details: "Hello your in deatils tab" }} />
    </AboutStack.Navigator>  
)

const SettingDrawerScreen = () => (
  <SettingDrawer.Navigator initialRouteName="Home">
    <SettingDrawer.Screen name="Home" component={Settings} />
    <SettingDrawer.Screen name="second" component={SettingsSecond} />
  </SettingDrawer.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings-sharp' : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
        >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
        <Tab.Screen name="Settings" component={SettingDrawerScreen} />
        {/* <Tab.Screen name="About" component={About} options={{ tabBarBadge: 3 }}/> */}
      </Tab.Navigator>
      {/* <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
        <Stack.Screen name="Home" component={Home} 
        options={{
          title: 'Home Page'}}
        />
        <Stack.Screen name="About" component={About} 
         options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
      </Stack.Navigator> */}
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
