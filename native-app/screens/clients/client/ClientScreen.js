import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";
import MainHeader from "../../../shared/MainHeader";
import DateTime from "../../../static/DateTime";
import bmiCalculate from "../bmiCalculate";
import riskValues from "../riskValues";
import {Icon} from "react-native-elements";
import Fonts from "../../../static/Fonts";
import Colors from "../../../static/Colors";

export default class ClientScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Alunos",
        backButton: true
    });

    render() {
        const {client} = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.avatarContainer}>
                    {this.renderAvatar(client)}
                </View>
                {this.renderUserDetails(client)}
                {this.renderUserMetrics(client)}
                {this.renderUserBmi(client)}
            </View>
        );
    }

    renderAvatar(client) {
        return (
            <Image
                style={styles.avatar}
                source={{ uri: client.picture }}
                resizeMode="cover"
            />
        )
    }

    renderUserDetails(client) {
        return (
            <View style={styles.userDetails}>
                <Text style={{ ...Fonts.maxTitle, marginTop: 20 }}>
                    {client.name}
                </Text>
                <Text style={{ ...Fonts.maxSubtitle }}>
                    {client.email}
                </Text>
                <View style={{ flexDirection: "row" }}>
                    <Icon
                        name="cake-variant"
                        type="material-community"
                        size={13}
                        color={Colors.black}
                    />
                    <Text style={{ ...Fonts.subtitle, marginLeft: 5 }}>
                        {DateTime("date", client.birthDate)}
                    </Text>
                </View>
            </View>
        )
    }

    renderUserMetrics(client) {
        return (
            <View style={styles.userMetrics}>
                <View style={{ flex: 1 }}>
                    <Icon
                        name="human-handsup"
                        type="material-community"
                        size={50}
                        color={Colors.black}
                    />
                    <Text style={{ ...Fonts.maxSubtitle, textAlign: "center" }}>
                        {client.height} m
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Icon
                        name="weight"
                        type="material-community"
                        size={50}
                        color={Colors.black}
                    />
                    <Text style={{ ...Fonts.maxSubtitle, textAlign: "center" }}>
                        {client.weight} kg
                    </Text>
                </View>
            </View>
        )
    }

    renderUserBmi(client) {
        const bmiCalculated = bmiCalculate({
            weight: client.weight,
            height: client.height,
            birthDate: client.birthDate
        });
        return (
            <View style={[styles.userBmi, { backgroundColor: riskValues[bmiCalculated.risk].color }]}>
                <Text style={{ ...Fonts.title }}>
                    IMC: {bmiCalculated.value}
                </Text>
                <Text style={{ ...Fonts.maxSubtitle }}>
                    {bmiCalculated.classification}
                </Text>
                <Text style={{ ...Fonts.maxSubtitle }}>
                    Risco {riskValues[bmiCalculated.risk].name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 20,
        alignItems: "center"
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45
    },
    userDetails: {
        alignItems: "center",
        paddingBottom: 20,
        marginHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black50
    },
    userMetrics: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    userBmi: {
        padding: 5,
        borderRadius: 5,
        marginBottom: 20,
        marginHorizontal: 20,
        alignItems: "center"
    }
});