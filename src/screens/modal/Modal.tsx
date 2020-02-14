import { Column, Row } from "@components/Flex/Flex";
import { Themed } from "@components/Themed/Themed";
import { NavigationScreenProps } from "@navigation/NavigationScreenProps";
import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";

export const ModalScreen : FunctionComponent<NavigationScreenProps<'Modal'>> = props => {
    const { navigation, route } = props;

    return (
        <Column alignItems='center' justifyContent='center' style={style.background}>
            <Themed.View style={style.modal}>
                <Row alignItems='center' justifyContent='flex-end' style={style.controls}>
                    
                </Row>

                <Column alignItems='center' justifyContent='center' style={style.body}>
                    {route.params.builder?.()}
                </Column>
            </Themed.View>
        </Column>
    );
}

const style = StyleSheet.create({
    background : {
        flex : 1
    },
    modal : {
        borderRadius : 8,
    },
    controls : {
        padding : 5
    },
    body : {
        padding : 20
    }
});