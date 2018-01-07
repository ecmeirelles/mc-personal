import React from "react";
import {
    View,
    Text, StyleSheet
} from "react-native";
import MainHeader from "../../../shared/MainHeader";
import Colors from "../../../static/Colors";

export default class ClientsScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Alunos",
        backButton: false
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    ClientsScreen
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryBlue
    }
});