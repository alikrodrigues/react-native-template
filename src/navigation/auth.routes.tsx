import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

        </Stack.Navigator>
    );
}

export default AuthRoutes;
