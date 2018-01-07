import React from "react";
import { StackNavigator } from "react-navigation";
import MainNavigation from "./MainNavigation";

const RootNavigation = StackNavigator(
    {
        Main: {
            screen: MainNavigation,
        },
    },
    {
        navigationOptions: () => ({
            headerTitleStyle: {
                fontWeight: "normal",
            },
        }),
    }
);

export default class RootNavigator extends React.Component {
    render() {
        return <RootNavigation />;
    }
}