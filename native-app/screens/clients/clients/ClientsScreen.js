import React from "react";
import {
    View,
    Text
} from "react-native";

export default class ClientsScreen extends React.Component {
    static navigationOptions = {
        title: "Alunos",
    };

    render() {
        return (
            <View>
                <Text>
                    ClientsScreen
                </Text>
            </View>
        );
    }
}