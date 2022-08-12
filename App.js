import * as React from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator } from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'expo-dev-client';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from './components/AuthContext/context';
import SplashScreen from './components/Auth/SplashScreen';
import AuthScreenComponent from './components/Auth/AuthScreen';
import RecoveryScreenComponent from './components/Auth/RecoveryScreen';
import RegisterScreenComponent from './components/Auth/RegisterScreen';
import MyDeviceComponent from './components/Main/MyDevice';
import MenuScreenComponent from './components/Menu/MenuScreen';
import NewDeviceComponent from './components/Main/NewDevice';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  height: 90,
  backgroundColor: 'white',
  elevation: 0,
  borderTopColor: 'white',
  width: Dimensions.get('window').width - 50,
  marginTop: 0,
  marginRight: 'auto',
  marginBottom: 0,
  marginLeft: 'auto',
}


function SplashScreenPage({ navigation }) {
  return (
    <SplashScreen navigation={navigation} />
  );
}

function AuthScreen({ navigation }) {
  return (
    <AuthScreenComponent navigation={navigation} />
  );
}


function RecoveryScreen({ navigation }) {
  return (
    <RecoveryScreenComponent navigation={navigation} />
  );
}


function RegisterScreen({ navigation }) {
  return (
    <RegisterScreenComponent navigation={navigation} />
  );
}

function MyDeviceScreen({ navigation }) {
  return (
    <MyDeviceComponent navigation={navigation} />
  );
}

function MenuScreen({ navigation }) {
  return (
    <MenuScreenComponent navigation={navigation} />
  )
}

function NewDeviceScreen({ navigation }) {
  return (
    <NewDeviceComponent navigation={navigation} />
  )
}



export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);


  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };



  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser, callback) => {
      // setIsLoading(true);
      const userToken = String(foundUser.userToken);

      try {
        await AsyncStorage.setItem('userToken', userToken);
        console.log('userToken', userToken)
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', userToken: userToken });
      callback();
    },
    signOut: async (callback) => {
      try {
        await AsyncStorage.removeItem('userToken');

        setIsLoading(false);

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
      callback();
    },
    signUp: () => {
      // setIsLoading(false);
    }
  }), []);


  // Проверка при входе в приложение.

  React.useEffect(() => {
    setTimeout(async () => {

      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken, 'userToken');
        setIsLoading(false);
        console.log('test')

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', userToken: userToken });
    }, 1000);
  }, []);


  if (isLoading) {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="SplashScreenPage"
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,
              headerShown: false,
              tabBarActiveTintColor: '#2EB6A5',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: tabBarStyle,

            })}
          >
            <Tab.Screen name="SplashScreenPage" component={SplashScreen}
              options={({ route }) => ({
                tabBarButton: () => null,
                tabBarStyle: { display: 'none' }
              })}
            />

          </Tab.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }


  return (
    <AuthContext.Provider value={authContext}>
      <StatusBar
        animated={true}
        hidden={false}
        backgroundColor={'#fff'}
        barStyle="dark-content"
      />
      <NavigationContainer>



        <Tab.Navigator
          initialRouteName="AuthScreen"
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: '#2EB6A5',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: tabBarStyle,

          })}
        >
          <Tab.Screen name="AuthScreen" component={AuthScreenComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />
          <Tab.Screen name="RecoveryScreen" component={RecoveryScreenComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />

          <Tab.Screen name="RegisterScreen" component={RegisterScreenComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />

          <Tab.Screen name="MyDeviceScreen" component={MyDeviceComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />

          <Tab.Screen name="NewDeviceScreen" component={NewDeviceComponent}
            options={({ route }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />

          <Tab.Screen name="MenuScreen" component={MenuScreenComponent}
            options={({ route, navigation }) => ({
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' }
            })}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
