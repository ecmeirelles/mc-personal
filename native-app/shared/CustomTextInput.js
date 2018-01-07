import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions
} from "react-native";
import Fonts from "../static/Fonts";
import Colors from "../static/Colors";

export default class CustomTextInput extends React.Component {
    render() {
        const {
            style,
            label,
            field,
            value,
            placeholder,
            onChangeInput,
        } = this.props;
        return (
            <View style={style ? [styles.container, style] : styles.container}>
                <Text style={styles.formLabel}>
                    {label}
                </Text>
                <TextInput
                    style={styles.formInput}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.black30}
                    underlineColorAndroid="#FFF"
                    onChangeText={(value) => onChangeInput(field, value)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("screen").width - 20
    },
    formLabel: {
        ...Fonts.subtitle,
        marginVertical: 10,
    },
    formInput: {
        ...Fonts.subtitle,
        color: Colors.black70,
        height: 50,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: Colors.white
    },
});