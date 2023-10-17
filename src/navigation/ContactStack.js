import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../screens/Contact';
const Stack = createStackNavigator();

export default function ContactStack() {
    return (
        <Stack.Navigator  screenOptions={{ headerShown: false }}>
            <Stack.Screen name="contact" component={Contact}
                options={{ title: 'contact' }} />
        </Stack.Navigator>
    );
}
