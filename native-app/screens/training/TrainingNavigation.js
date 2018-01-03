import React from "react";
import {StackNavigator} from "react-navigation";

import TrainingScreen from "./training/TrainingScreen";

export default StackNavigator(
    {
        Training: {
            screen: TrainingScreen,
        }
    },
    {headerMode: "none"}
);