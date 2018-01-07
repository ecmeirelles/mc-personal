import React from "react";
import {
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import MainHeader from "../../../shared/MainHeader";
import Colors from "../../../static/Colors";
import EachClient from "./EachClient";

export default class ClientsScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Alunos",
        backButton: false
    });

    state = {
        clients: [
            {
                id: "123e4567-e89b-12d3-a456-426655440000",
                name: "Elaine Meirelles",
                email: "ecmperonico@gmail.com",
                height: 1.56,
                weight: 57,
                picture: "http://lorempixel.com/400/200/sports/1",
                birthDate: "1994-08-24T15:00:00Z",
                createdAt: "2018-01-05T15:00:00Z"
            },
            {
                id: "123e4567-e89b-12d3-a456-426655440123",
                name: "Outra Pessoa",
                email: "outrapessoa@email.com.br",
                height: 1.70,
                weight: 80,
                picture: "http://lorempixel.com/400/200/sports/2",
                birthDate: "1990-05-20T15:00:00Z",
                createdAt: "2018-01-05T15:00:00Z"
            },
            {
                id: "123e4567-e89b-12d3-a456-426655552123",
                name: "Lívia Sant'Anna",
                email: "liviasantanna@email.com.br",
                height: 1.65,
                weight: 65,
                picture: "http://lorempixel.com/400/200/sports/3",
                birthDate: "1994-05-09T15:00:00Z",
                createdAt: "2018-01-05T15:00:00Z"
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderListOfClients()}
            </View>
        );
    }

    renderListOfClients() {
        const { clients } = this.state;
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View>
                    { clients.map(client => (
                        <EachClient
                            key={client.id}
                            navigation={navigation}
                            client={client}
                        />
                    )) }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    }
});