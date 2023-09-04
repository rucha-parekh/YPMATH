import React from "react";
import {Image, View, StyleSheet, Text, Pressable} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
export default function Homepage1(props){
    const {title='START STUDYING'}=props;
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Image
                source={require('../assets/homepagelogo.png')}
                style={styles.logo} 
            />
            <Text style={[styles.heading,styles.space]}>
                <Text>Important </Text><Text style={styles.ibdp}>IBDP </Text>
                <Text>exam questions & answers</Text>
            </Text>
            <Text style={styles.subheading}>Hand-picked by expert teachers!</Text>
            <Pressable style={styles.button}><Text style={styles.buttontext}>{title}</Text></Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbe268',
        height:45,
        width: 190,
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 4
    },
    buttontext:{
        fontWeight: 'bold',
        fontSize: 18
    },
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 70,
        paddingBottom: 30,
        backgroundColor: '#FFFFFF'
    },
    heading:{
        fontSize: 30,
        textAlign: 'left',
        fontWeight: '800'
    },
    ibdp:{
        color: '#4be2f2'
    },
    logo:{
        alignSelf: 'center',
        width: 300,
        height: 200
    },
    space:{
        paddingLeft: 20,
        marginTop: 20
    },
    subheading:{
        paddingTop: 5,
        marginLeft: 20
    },
});