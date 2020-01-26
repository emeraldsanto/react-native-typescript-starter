import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ThemedComponent from "../../../Architecture/ThemedComponent";
import LocalizedText from "../../components/LocalizedText/LocalizedText";

export default class Welcome extends ThemedComponent {
    
    render() {
        const { theme, supportedThemes, changeTheme } = this.context;

        return (
            <View style={{ flex : 1, alignItems : 'center', justifyContent : 'center', padding : 15, backgroundColor : theme.colors.background }}>

                <View style={{ width : '100%', alignItems : 'center', justifyContent : 'center', padding : 15, borderRadius : 6, borderWidth : 1, borderColor : theme.colors.onSurface, backgroundColor : theme.colors.surface }}>
                    <LocalizedText style={{ textAlign : "center", fontSize : 24, marginBottom : 15, color : theme.colors.onSurface }}>
                        welcomeToStarter
                    </LocalizedText>

                    <LocalizedText style={{ textAlign : "center", fontSize : 18, marginBottom : 15, color : theme.colors.onSurface }}>
                        dependencyList
                    </LocalizedText>
                </View>

                <View style={{ width : '100%', marginTop : 15 }}>
                    {supportedThemes.map(t => (
                        <TouchableOpacity key={t.name} style={{ width : '100%', padding : 10, marginBottom : 15, borderRadius : 6, backgroundColor : theme.colors.primary }} onPress={() => changeTheme(t.name)}>
                            <Text style={{ textAlign : 'center', color : theme.colors.onPrimary }}>
                                Change to {t.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}