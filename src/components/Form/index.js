import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration, //sensor de vibrar API
    Pressable, //area clicável
    Keyboard
    } from "react-native";
import ResultMedia from "./ResultMedia";
import styles from "./style";

export default function Form() {

    const [n1, setN1] = useState(null)
    const [n2, setN2] = useState(null)
    const [n3, setN3] = useState(null)

    const [msgMedia, setMsgMedia] = useState("Preenha os campos");
    
    const [media, setMedia] = useState(null)

    const [textButton, setTextButton] = useState("Enviar")

    const [errorMsg, setErrorMsg] = useState(null)

    function calculaMedia() {

        //formatação
        let n1Format = n1.replace(",", ".")
        let n2Format = n2.replace(",", ".")
        let n3Format = n3.replace(",", ".")

        return setMedia( (parseFloat(n1Format)  + parseFloat(n2Format) + parseFloat(n3Format)) / 3 .toFixed(2) )
    }

    function verificaMedia() {

        if (media == null) {
            Vibration.vibrate() //vibrar a tela 
            setErrorMsg("Campo obrigatório*") 
        }
    }

    function validaMedia() {

        if (n1 != null && n2 != null && n3 != null) {
            
            calculaMedia()
            setN1(null)
            setN2(null)
            setN3(null)
            setMsgMedia("Sua média é : ")
            setTextButton("Calcular novamente ")
            setErrorMsg(null)

        } else {
            verificaMedia()
            setMedia(null)
            setTextButton("Calcular: ")
            setMsgMedia("Preencha os campos novamente")
        }
       
    }

    return (

        <View style={styles.FormContext}>
            {/* se não existir a media  */}
            {media == null ?  
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Informe a 1º nota</Text>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
                <TextInput style={styles.formInput}
                    keyboardType="numeric"
                    onChangeText={setN1}
                    value={n1}
                />

                <Text style={styles.formLabel}>Informe a 2º nota</Text>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
                <TextInput style={styles.formInput}
                    keyboardType="numeric"
                    onChangeText={setN2}
                    value ={n2}
                />

                <Text style={styles.formLabel}>Informe a 3º nota</Text>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
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
            </Pressable>
            // retorna apenas o formulario
            : 
            // Se a media não for vazia, então retorna a view do resultado
            <View style={styles.exibirMedia}>
                <ResultMedia msgResultMedia={msgMedia} resultMedia={media}/>
                
                <TouchableOpacity  style={styles.buttonCalcular}
                onPress = {() =>{
                    validaMedia()
                }}
                >    
               <Text  style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            }  
            {/* END */}
        </View>

    );
}