import React from "react";
import {StackNavigator} from "react-navigation";

import PhysicalExaminationScreen from "./physicalExamination/PhysicalExaminationScreen";

export default StackNavigator(
    {
        Training: {
            screen: PhysicalExaminationScreen,
        }
    },
    {headerMode: "none"}
);