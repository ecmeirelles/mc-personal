import React from "react";
import {StackNavigator} from "react-navigation";

import ClientsScreen from "./clients/ClientsScreen";
import ClientScreen from "./client/ClientScreen";

export default StackNavigator(
    {
        Clients: {
            screen: ClientsScreen,
        },
        Client: {
            screen: ClientScreen,
        }
    },
    {headerMode: "none"}
);