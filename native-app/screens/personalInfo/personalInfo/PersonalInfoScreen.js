import React from "react";
import {
    View,
    Text
} from "react-native";

export default class PersonalInfoScreen extends React.Component {
    static navigationOptions = {
        title: "Informações",
    };

    render() {
        return (
            <View>
                <Text>
                    PersonalInfoScreen
                </Text>
            </View>
        );
    }
}