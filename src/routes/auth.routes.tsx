import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from "../screens/Home";
import { SignIn } from "../screens/signIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {

    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}>
            <Screen
                name={'signIn'}
                component={SignIn}
            />
            <Screen
                name={'home'}
                component={Home}
            />
        </Navigator>
    )
}