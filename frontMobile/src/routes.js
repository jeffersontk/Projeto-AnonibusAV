import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login'
import BusMaps from './pages/map'
import Register from './pages/Register'
import Room from './pages/Room'
import RoomChat from './pages/RoomChat'
import Profile from './pages/Profile'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="BusMaps" component={BusMaps} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Room" component={Room} />
                <AppStack.Screen name="RoomChat" component={RoomChat} />
                <AppStack.Screen name="Profile" component={Profile} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}