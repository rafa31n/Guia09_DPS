import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
const Stack = createStackNavigator();

export default function AboutStack() {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="about" component={About}
                options={{ title: 'about' }} />
        </Stack.Navigator>
    );
}
