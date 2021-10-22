import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Share
    } from "react-native";
import styles from "./style";


export default function ResultMedia(props) {

    const onShare = async () => {

        const result = await Share.share({
            message: "A sua média é: " + props.resultMedia,
        })
    }

    return(

        <View style={styles.resultMedia}>
            <View style={styles.boxShareButton}>
              
                <Text style={styles.informa}>{props.msgResultMedia}</Text>
                <Text style={styles.numeroMedia}>{props.resultMedia}</Text>

                <TouchableOpacity 
                    onPress={onShare}
                style={styles.shared}>
                    <Text style={styles.sharedText}>Compartilhar</Text>
                </TouchableOpacity>    
        </View>
    </View>
    );
}
