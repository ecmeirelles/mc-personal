import React from "react";
import {StackNavigator} from "react-navigation";

import ClientsScreen from "./clients/ClientsScreen";

export default StackNavigator(
    {
        Clients: {
            screen: ClientsScreen,
        }
    },
    {headerMode: "none"}
);