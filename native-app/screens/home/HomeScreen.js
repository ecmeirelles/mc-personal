import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import MainHeader from "../../shared/MainHeader";
import Colors from "../../static/Colors";

export default class HomeScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Home",
        backButton: false
    });

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    HomeScreen
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