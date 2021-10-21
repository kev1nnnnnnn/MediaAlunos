import React from "react";
import {View, Text} from "react-native";
import styles from "./style";


export default function ResultMedia(props) {
    return(

        <View style={styles.resultMedia}>
            <Text style={styles.informa}>{props.msgResultMedia}</Text>
            <Text style={styles.numeroMedia}>{props.resultMedia}</Text>
        </View>

    );
}
