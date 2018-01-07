import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";
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
                <View style={styles.dateContainer}>
                    {this.renderUserBirthDate(client)}
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
                <Text style={{ ...Fonts.subtitle }}>
                    {client.email}
                </Text>
            </View>
        )
    }

    renderUserBirthDate(client) {
        return (
            <Text style={{ ...Fonts.subtitle }}>
                {DateTime("date", client.birthDate)}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: Colors.black10
    },
    imageContainer: {
        flex: 0,
        width: 50,
        marginRight: 10,
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
    dateContainer: {
        flex: 0,
        width: 70
    }
});