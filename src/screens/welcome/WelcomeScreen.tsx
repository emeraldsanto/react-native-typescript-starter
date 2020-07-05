import { Route } from "models/constants/Route";
import React from "react";
import { StyleSheet } from "react-native";
import { Column, Row } from "../../components/Flex/Flex";
import { useLocalization } from "../../components/LocalizedContext/LocalizationContext";
import { useTheme } from "../../components/ThemeContext/ThemeContext";
import { Themed } from "../../components/Themed/Themed";
import { NavigationScreen } from "../../navigation/NavigationTypings";

export const WelcomeScreen : NavigationScreen<Route.WELCOME> = props => {
    const { navigation } = props;
    const { theme, supportedThemes, changeTheme } = useTheme();
    const { supportedLanguages, changeLanguage } = useLocalization();

    const showHelp = () => {
        navigation.navigate(Route.MODAL, {
            builder : () => (
                <Column alignItems='center' justifyContent='center'>
                    <Themed.LocalizedText style={style.modalTitle}>
                        starterHelp
                    </Themed.LocalizedText>

                    <Column>
                        <Themed.LocalizedText style={[style.modalText, { marginBottom : 15 }]}>
                            editThemes
                        </Themed.LocalizedText>

                        <Themed.LocalizedText style={style.modalText}>
                            editLanguages
                        </Themed.LocalizedText>
                    </Column>
                </Column>   
            )
        });
    }

    return (
        <Column alignItems="center" justifyContent="center" style={[style.container, { backgroundColor : theme.colors.background }]}>
            <Column alignItems='center' justifyContent='center' style={[style.column, { borderColor : theme.colors.onSurface }]}>
                <Themed.LocalizedText style={style.title}>
                    welcomeToStarter
                </Themed.LocalizedText>

                <Themed.LocalizedText style={style.sub}>
                    dependencyList
                </Themed.LocalizedText>
            </Column>

            <Column style={style.buttons}>
                {supportedThemes.map(t => (
                    <Themed.Button key={t.name} context='primary' effect='opacity' style={style.button} onPress={() => changeTheme(t)}>
                        <Themed.LocalizedText context='onPrimary' style={style.center}>
                            changeTo 

                            <Themed.Text context='onPrimary'>
                                {t.name}
                            </Themed.Text>
                        </Themed.LocalizedText>
                    </Themed.Button>
                ))}
            </Column>

            <Column style={style.buttons}>
                {supportedLanguages.map(t => (
                    <Themed.Button key={t} context='secondary' effect='opacity' style={style.button} onPress={() => changeLanguage(t)}>
                        <Themed.LocalizedText context='onPrimary' style={style.center}>
                            changeTo 

                            <Themed.Text context='onPrimary'>
                                {t.toUpperCase()}
                            </Themed.Text>
                        </Themed.LocalizedText>
                    </Themed.Button>
                ))}
            </Column>

            <Row justifyContent='space-between' style={style.buttons}>
                <Themed.Button context='secondaryVariant' effect='opacity' style={style.smallButton} onPress={showHelp}>
                    <Themed.LocalizedText context='onPrimary' style={style.center}>
                        showHelp
                    </Themed.LocalizedText>
                </Themed.Button>

                <Themed.Button context='secondaryVariant' effect='opacity' style={style.smallButton}>
                    <Themed.LocalizedText context='onPrimary' style={style.center}>
                        showCredits
                    </Themed.LocalizedText>
                </Themed.Button>
            </Row>
        </Column>
    );
}

const style = StyleSheet.create({
    container : {
        flex : 1,
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
    },
    smallButton : {
        width : '48%',
        borderRadius : 6
    },
    center : {
        textAlign : 'center'
    },
    modalTitle : {
        fontSize : 18,
        fontWeight : '700',
        marginBottom : 15
    },
    modalText : {
        fontSize : 14
    }
});