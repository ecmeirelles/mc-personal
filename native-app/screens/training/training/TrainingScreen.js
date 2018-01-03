import React from "react";
import {
    View,
    Text
} from "react-native";

export default class TrainingScreen extends React.Component {
    static navigationOptions = {
        title: 'Treinos',
    };

    render() {
        return (
            <View>
                <Text>
                    TrainingScreen
                </Text>
            </View>
        );
    }
}