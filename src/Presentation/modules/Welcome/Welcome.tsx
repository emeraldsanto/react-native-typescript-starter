import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import ThemedComponent from "../../../Architecture/ThemedComponent";
import Column from "../../components/Column/Column";
import Themed from "../../components/Themed/Themed";

export default class Welcome extends ThemedComponent {
    
    render() {
        const { theme, supportedThemes, changeTheme } = this.context;

        return (
            <View style={[WelcomeStyle.container, { backgroundColor : theme.colors.background }]}>

                <Column alignItems='center' justifyContent='center' style={[WelcomeStyle.column, { borderColor : theme.colors.onSurface }]}>
                    <Themed.LocalizedText style={WelcomeStyle.title}>
                        welcomeToStarter
                    </Themed.LocalizedText>

                    <Themed.LocalizedText style={WelcomeStyle.sub}>
                        dependencyList
                    </Themed.LocalizedText>
                </Column>

                <View style={WelcomeStyle.buttons}>
                    {supportedThemes.map(t => (
                        <TouchableOpacity key={t.name} style={[WelcomeStyle.button, { backgroundColor : theme.colors.primary }]} onPress={() => changeTheme(t.name)}>
                            <Themed.Text context='onPrimary' style={{ textAlign : 'center' }}>
                                Change to {t.name}
                            </Themed.Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const WelcomeStyle = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : "center",
        justifyContent : 'center',
        padding : 15
    },

    column : {
        width : '100%',
        padding : 15,
        borderRadius : 6,
        borderWidth : 1
    },

    title : {
        textAlign : 'center',
        fontSize : 24,
        marginBottom : 14
    },

    sub : {
        textAlign : 'center',
        fontSize : 18,
        marginBottom : 15
    },

    buttons : {
        width : '100%',
        marginTop : 15
    },

    button : {
        width : '100%',
        padding : 10,
        marginBottom : 15,
        borderRadius : 6
    }
});