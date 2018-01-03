import React from "react";
import {StackNavigator} from "react-navigation";

import PersonalInfoScreen from "./personalInfo/PersonalInfoScreen";

export default StackNavigator(
    {
        PersonalInfo: {
            screen: PersonalInfoScreen,
        }
    },
    {headerMode: "none"}
);