import React from "react";
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import MainHeader from "../../../shared/MainHeader";
import Colors from "../../../static/Colors";
import Fonts from "../../../static/Fonts";
import CustomTextInput from "../../../shared/CustomTextInput";
import DateTime from "../../../static/DateTime";

export default class ClientScreen extends React.Component {
    static navigationOptions = MainHeader({
        title: "Alunos",
        backButton: true
    });

    onChangeUser = (field, value) => {
        console.log(field, value);
    }

    render() {
        const { client } = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                {this.renderSubheader()}
                {this.renderForm(client)}
            </View>
        );
    }

    renderSubheader() {
        return (
            <View style={styles.subheaderContainer}>
                <View style={styles.icon}>
                    <Icon
                        name="new-message"
                        type="entypo"
                        size={25}
                        color={Colors.white}
                    />
                </View>
                <Text style={styles.subheader}>
                    EDITAR ALUNO
                </Text>
            </View>
        )
    }

    renderForm(client) {
        return (
            <ScrollView>
                <CustomTextInput
                    label="Nome"
                    field="name"
                    value={client.name}
                    placeholder="Digite o nome do usuário"
                    onChangeInput={this.onChangeUser}
                />
                <CustomTextInput
                    label="Email"
                    field="email"
                    value={client.email}
                    placeholder="Digite o email do usuário"
                    onChangeInput={this.onChangeUser}
                />
                <CustomTextInput
                    label="Data de Nascimento"
                    field="birthDate"
                    value={DateTime("date", client.birthDate)}
                    placeholder="Digite a data de nascimento do usuário"
                    onChangeInput={this.onChangeUser}
                />
                <View style={{ flexDirection: "row" }}>
                    <CustomTextInput
                        style={{ flex: 1, marginRight: 10 }}
                        label="Peso (kg)"
                        field="weight"
                        value={client.weight.toString()}
                        placeholder="Digite o peso do usuário"
                        onChangeInput={this.onChangeUser}
                    />
                    <CustomTextInput
                        style={{ flex: 1 }}
                        label="Altura (m)"
                        field="height"
                        value={client.height.toString()}
                        placeholder="Digite o peso do usuário"
                        onChangeInput={this.onChangeUser}
                    />
                </View>
                {this.renderButton()}
            </ScrollView>
        )
    }

    renderButton() {
        return (
            <TouchableOpacity
                style={{ marginVertical: 20 }}
                onPress={() => console.log("Editar Usuário")}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Editar  Usuário
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: Colors.primaryGreen
    },
    subheaderContainer: {
        padding: 10,
        paddingLeft: 0,
        flexDirection: "row",
        backgroundColor: Colors.primaryBlue
    },
    icon: {
        flex: 0,
        width: 50
    },
    subheader: {
        flex: 1,
        ...Fonts.subheader,
        alignSelf: "center"
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        width: Dimensions.get("screen").width - 20,
        backgroundColor: Colors.primaryOrange,
    },
    buttonText: {
        ...Fonts.title,
        color: Colors.white
    }
});