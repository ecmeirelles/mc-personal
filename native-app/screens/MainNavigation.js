import React from "react";
import {
    TabBarBottom,
    TabNavigator,
} from "react-navigation";
import {Icon} from "react-native-elements";
import Colors from "../static/Colors";

import TrainingNavigation from "./training/TrainingNavigation";
import PhysicalExaminationNavigation from "./physicalExamination/PhysicalExaminationNavigation";
import HomeScreen from "./home/HomeScreen";
import ClientsNavigation from "./clients/ClientsNavigation";
import PersonalTrainerInfoNavigation from "./personalInfo/PersonalInfoNavigation";

export default TabNavigator (
    {
        Training: {
            screen: TrainingNavigation,
        },
        PhysicalExamination: {
            screen: PhysicalExaminationNavigation,
        },
        Home: {
            screen: HomeScreen,
        },
        Clients: {
            screen: ClientsNavigation,
        },
        PersonalTrainerInfo: {
            screen: PersonalTrainerInfoNavigation,
        },
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarLabel: () => {
                const {routeName} = navigation.state;
                switch (routeName) {
                    case "Training": return "Treinos";
                    case "PhysicalExamination": return "Avaliação";
                    case "Home": return "";
                    case "Clients": return "Alunos";
                    case "PersonalTrainerInfo": return "Info";
                }
                return null;
            },
            tabBarIcon: ({focused}) => {
                const {routeName} = navigation.state;

                switch (routeName) {
                    case "Training":
                        return <Icon
                            name="stopwatch"
                            type="entypo"
                            size={20}
                            color={focused ? Colors.primaryOrange : Colors.white}
                        />
                    case "PhysicalExamination":
                        return <Icon
                            name="documents"
                            type="entypo"
                            size={20}
                            color={focused ? Colors.primaryOrange : Colors.white}
                        />
                    case "Home":
                        return <Icon
                            name="home"
                            type="entypo"
                            size={35}
                            color={focused ? Colors.primaryOrange : Colors.white}
                            iconStyle={{
                                position: "relative",
                                bottom: -8
                            }}
                        />
                    case "Clients":
                        return <Icon
                            name="users"
                            type="entypo"
                            size={20}
                            color={focused ? Colors.primaryOrange : Colors.white}
                        />
                    case "PersonalTrainerInfo":
                        return <Icon
                            name="dial-pad"
                            type="entypo"
                            size={20}
                            color={focused ? Colors.primaryOrange : Colors.white}
                        />
                }
            },
        }),
        tabBarComponent: TabBarBottom,
        tabBarOptions: {
            activeTintColor: Colors.primaryOrange,
            labelStyle: {
                fontSize: 10,
                paddingBottom: 5
            },
            style: {
                backgroundColor: Colors.black90,
            },
        },
        tabBarPosition: "bottom",
        animationEnabled: false,
        swipeEnabled: true
    }
);
