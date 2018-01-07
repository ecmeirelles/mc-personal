import React from "react";
import {
    View,
    StatusBar,
    Platform,
    StyleSheet,
} from "react-native";
import {
    AppLoading,
    Font
} from "expo";
import RootNavigation from "./screens/RootNavigation";

export default class App extends React.Component {
    state = {
        isReady: false
    }

    componentWillMount() {
        (async() => { await Font.loadAsync({
            "Slabo 27px": require("./assets/fonts/Slabo_27px/Slabo27px-Regular.ttf"),
            "Alegrya Sans": require("./assets/fonts/Alegreya_Sans/AlegreyaSans-Regular.ttf"),
            "Alegrya Sans Bold": require("./assets/fonts/Alegreya_Sans/AlegreyaSans-Bold.ttf")
        });
            this.setState({ isReady: true});
        })();
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
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
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: "rgba(0,0,0,0.2)",
    },
});
