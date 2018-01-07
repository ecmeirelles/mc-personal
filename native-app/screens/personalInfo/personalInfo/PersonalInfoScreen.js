import React from "react";
import {
    View,
    Text, StyleSheet
} from "react-native";
import MainHeader from "../../../shared/MainHeader";
import Colors from "../../../static/Colors";

export default class PersonalInfoScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Informações",
        backButton: false
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    PersonalInfoScreen
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