import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {Icon} from "react-native-elements";
import Colors from "../../../static/Colors";
import Fonts from "../../../static/Fonts";
import DateTime from "../../../static/DateTime";

export default class EachClient extends React.Component {
    render() {
        const { client, navigation } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("Client", { client })}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                        {this.renderUserAvatar(client)}
                        {this.renderUserDetails(client)}
                    </View>
                </View>
                <View style={styles.personDetailsContainer}>
                    {this.renderPersonDetails(client)}
                </View>
            </TouchableOpacity>
        );
    }

    renderUserAvatar(client) {
        return (
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: client.picture }}
                    resizeMode="cover"
                />
            </View>
        )
    }

    renderUserDetails(client) {
        return (
            <View style={styles.detailsContainer}>
                <Text style={{ ...Fonts.title }}>
                    {client.name}
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
                <Text style={{ ...Fonts.subtitle }}>
                    {client.email}
                </Text>
            </View>
        )
    }

    renderPersonDetails(client) {
        return (
            <View>
                <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "flex-end" }}>
                    <Icon
                        name="human-handsup"
                        type="material-community"
                        size={13}
                        color={Colors.black}
                    />
                    <Text style={{ ...Fonts.subtitle, marginLeft: 5 }}>
                        {client.height} m
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <Icon
                        name="weight"
                        type="material-community"
                        size={13}
                        color={Colors.black}
                    />
                    <Text style={{ ...Fonts.subtitle, marginLeft: 5 }}>
                        {client.weight} kg
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 5,
        paddingBottom: 15,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.black10
    },
    imageContainer: {
        flex: 0,
        width: 50,
        marginRight: 10,
        marginTop: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    detailsContainer: {
        marginTop: 10,
        flex: 1,
    },
    personDetailsContainer: {
        flex: 0,
        width: 70
    }
});