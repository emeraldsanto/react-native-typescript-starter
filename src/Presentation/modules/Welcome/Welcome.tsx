import React, { Component } from "react";
import { View } from "react-native";
import LocalizedText from "../../components/LocalizedText/LocalizedText";

export default class Welcome extends Component {
    
    render() {
        return (
            <View style={{ flex : 1, alignItems : 'center', justifyContent : 'center', padding : 15 }}>
                <LocalizedText style={{ textAlign : "center", fontSize : 24, marginBottom : 15 }}>
                    welcomeToStarter
                </LocalizedText>

                <LocalizedText style={{ textAlign : "center", fontSize : 18 }}>
                    dependencyList
                </LocalizedText>
            </View>
        );
    }
}