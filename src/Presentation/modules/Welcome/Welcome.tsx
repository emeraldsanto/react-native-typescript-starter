import React, { FunctionComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Column } from "../../../Architecture/Components/Flex/Flex";
import { Themed } from "../../../Architecture/Components/Themed/Themed";
import { useLocalization } from "../../../Architecture/Contexts/LocalizedContext/LocalizationContext";
import { useTheme } from "../../../Architecture/Contexts/ThemeContext/ThemeContext";

export const Welcome : FunctionComponent = () => {
    const { theme, supportedThemes, changeTheme } = useTheme();
    const { supportedLanguages, changeLanguage } = useLocalization();

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
                    <Themed.Button key={t.name} context='primary' effect='opacity' style={WelcomeStyle.button} onPress={() => changeTheme(t)}>
                        <Themed.LocalizedText context='onPrimary' style={{ textAlign : 'center' }}>
                            changeTo 

                            <Themed.Text context='onPrimary'>
                                {t.name}
                            </Themed.Text>
                        </Themed.LocalizedText>
                    </Themed.Button>
                ))}
            </View>

            <View style={WelcomeStyle.buttons}>
                {supportedLanguages.map(t => (
                    <Themed.Button key={t} context='secondaryVariant' effect='opacity' style={WelcomeStyle.button} onPress={() => changeLanguage(t)}>
                        <Themed.LocalizedText context='onPrimary' style={{ textAlign : 'center' }}>
                            changeTo 

                            <Themed.Text context='onPrimary'>
                                {t.toUpperCase()}
                            </Themed.Text>
                        </Themed.LocalizedText>
                    </Themed.Button>
                ))}
            </View>
        </View>
    );
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
        borderWidth : 1,
        marginBottom : 15,
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
    },

    button : {
        width : '100%',
        marginBottom : 15,
        borderRadius : 6
    }
});