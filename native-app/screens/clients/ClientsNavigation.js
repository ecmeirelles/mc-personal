import React from "react";
import {StackNavigator} from "react-navigation";

import ClientsScreen from "./clients/ClientsScreen";
import ClientScreen from "./client/ClientScreen";
import EditClientScreen from "./editClient/EditClientScreen";

export default StackNavigator(
    {
        Clients: {
            screen: ClientsScreen,
        },
        Client: {
          screen: ClientScreen,
        },
        EditClient: {
            screen: EditClientScreen,
        }
    },
    {headerMode: "none"}
);