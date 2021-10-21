import React from "react"
import { View, Text } from "react-native";
import  styles  from "./style";

export default function Titulo() {

    return (
        <View style={styles.boxTitle}>
            <Text style={styles.texTitle}>Rick e Morty</Text> 
        </View>
    );
}