import React from "react";
import {
    Text,
    View,
    StatusBar,
    Platform,
    StyleSheet,
} from "react-native";
import RootNavigation from "./screens/RootNavigation";

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle="default"  />}
                {Platform.OS === "android" && <View style={styles.statusBarUnderlay} />}
                <RootNavigation />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingTop: 30
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
});
