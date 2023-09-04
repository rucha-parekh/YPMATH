import {Text, View, StyleSheet, Image, Button, Pressable} from "react-native";
import React from "react";


export default function Homepage3(props) {
    const {title='CONTACT NOW'} = props;
    return(
        
        <View style = {styles.container}>
            <Image 
            style={styles.logo}
            source={require('../assets/mid.png')}
            />
        <Text style = {styles.maintext}>Online Tuitions</Text>
        <Text style = {styles.subtext}>We offer 1 on 1 tutoring for Ib Diploma program. Learn from expert 
            teachers and creators of this website:</Text>
        <Text style = {styles.subtext}>• To arrange a class, contact our Whatsapp number: +919820006286</Text>
        <Text style = {styles.subtext}>• Fill out the registration form and make the payment</Text>
        <Pressable style={styles.button}><Text style={styles.buttontext}>{title}</Text></Pressable>    
            
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#FADD66',
        height:50,
        width: 190,
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
        marginBottom: 30
    },

    buttontext: {
        fontWeight: 'bold',

    },

    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        //alignItems: 'center',
        paddingBottom: 100,
        backgroundColor: '#FFFFFF'
    },

    maintext: {
        fontSize: 35,
        textAlign: 'left',
        paddingLeft: 20,
        fontWeight: 'bold'
    },

    logo: {
        height:350,
        width: '90%',
        alignSelf: 'center'
    },

    subtext: {
        fontSize: 13.5, 
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 10
    }

})