import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./style";

export default function Form() {

    const [n1, setN1] = useState(null)
    const [n2, setN2] = useState(null)
    const [n3, setN3] = useState(null)

    const [msgMedia, setMsgMedia] = useState("Preenha os campos");
    
    const [media, setMedia] = useState(null)

    const [textButton, setTextButton] = useState("Enviar")

    function calculaMedia() {

        return setMedia( (parseFloat(n1)  + parseFloat(n2) + parseFloat(n3)) / 3 .toFixed(2))
    }

    function validaMedia() {

        if (n1 != null && n2 != null && n3 != null) {
            
            calculaMedia()
            setN1(null)
            setN2(null)
            setN3(null)
            setMsgMedia("Sua média é : ")
            setTextButton("Calcular novamente: ")
            return
        } 

        setMedia(null)
        setTextButton("Calcular: ")
        setMsgMedia("Preencha os campos novamente")
    }

    return (

        <View style={styles.FormContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Informe a 1º nota</Text>
                <TextInput style={styles.formInput}
                    keyboardType="numeric"
                    onChangeText={setN1}
                    value={n1}
                />

                <Text style={styles.formLabel}>Informe a 2º nota</Text>
                <TextInput style={styles.formInput}
                    keyboardType="numeric"
                    onChangeText={setN2}
                    value ={n2}
                />

                <Text style={styles.formLabel}>Informe a 3º nota</Text>
                <TextInput style={styles.formInput}
                    keyboardType="numeric"
                    onChangeText={setN3}
                    value={n3}
                /> 

               <TouchableOpacity  style={styles.buttonCalcular}
                onPress = {() =>{
                    validaMedia()
                }}
               >    
               <Text  style={styles.textButton}>{textButton}</Text>
                   </TouchableOpacity>
            </View>
            <ResultMedia msgResultMedia={msgMedia} resultMedia={media}/>
        </View>

    );
}