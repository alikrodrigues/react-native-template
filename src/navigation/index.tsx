import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthRoutes from './auth.routes';
import Routes from './routes';


const Navigation = () => {

    const isLogged = false;

    return (
        <NavigationContainer>
            {isLogged ? <AuthRoutes /> : <Routes />}
        </NavigationContainer>
    )

};

export default Navigation;