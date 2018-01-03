import React from "react";
import {
    View,
    Text
} from "react-native";

export default class PhysicalExaminationScreen extends React.Component {
    static navigationOptions = {
        title: 'Avaliação Física',
    };

    render() {
        return (
            <View>
                <Text>
                    PhysicalExaminationScreen
                </Text>
            </View>
        );
    }
}