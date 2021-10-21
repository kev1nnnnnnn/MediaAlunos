import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    FormContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        alignItems: "center",
        backgroundColor: "#fff",
        marginTop:50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding:10
    },  

    formLabel: {

        color: "#17203c",
        fontSize: 20,
        paddingLeft: 20
    },

    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        margin: 10,
        paddingLeft: 10,
        padding: 15,
    },

    buttonCalcular: {
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#17203c",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
        borderRadius: 25, 
    },

    textButton: {

        fontSize: 20,
        color: "#ffff",
    }


});

export default styles