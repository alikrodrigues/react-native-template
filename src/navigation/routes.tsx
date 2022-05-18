import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from '../pages/home';


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export default Routes;
