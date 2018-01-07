import React from "react";
import {StackNavigator} from "react-navigation";

import PhysicalExaminationScreen from "./physicalExamination/PhysicalExaminationScreen";

export default StackNavigator(
    {
        PhysicalExamination: {
            screen: PhysicalExaminationScreen,
        }
    },
    {headerMode: "none"}
);