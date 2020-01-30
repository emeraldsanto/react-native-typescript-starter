import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import ThemedComponent from "../../../Architecture/ThemedComponent";
import Column from "../../components/Column/Column";
import Themed from "../../components/Themed/Themed";
import LocalizedContext from "../../components/LocalizedContext/LocalizedContext";

export default class Welcome extends ThemedComponent {
    
    render() {
        const { theme, supportedThemes, changeTheme } = this.context;

        return (
            <LocalizedContext.Consumer>
                {({ language, supportedLanguages, changeLanguage, translate }) => (
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
                                <Themed.Button key={t.name} context='primary' effect='opacity' style={WelcomeStyle.button} onPress={() => changeTheme(t.name)}>
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
                )}
            </LocalizedContext.Consumer>
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
        padding : 10,
        marginBottom : 15,
        borderRadius : 6
    }
});