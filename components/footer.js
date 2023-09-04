import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Footer() {


    
        const [isPressed1, setIsPressed1] = useState(false);
        const [isPressed2, setIsPressed2] = useState(false);
        const [isPressed3, setIsPressed3] = useState(false);
        const [isPressed4, setIsPressed4] = useState(false);
      
        const handlePress1 = () => {
          setIsPressed1(true);
          setIsPressed2(false);
          setIsPressed3(false);
          setIsPressed4(false);
        };

        const handlePress2 = () => {
            setIsPressed1(false);
            setIsPressed2(true);
            setIsPressed3(false);
            setIsPressed4(false);
          };

        const handlePress3 = () => {
            setIsPressed1(false);
            setIsPressed2(false);
            setIsPressed3(true);
            setIsPressed4(false);
          };

        const handlePress4 = () => {
            setIsPressed1(false);
            setIsPressed2(false);
            setIsPressed3(false);
            setIsPressed4(true);
          };


    return(
    
   <View style={styles.outerContainer}>     
    <View style={[styles.iconsPosition, styles.contentContainer, styles.line]}> 

        <TouchableHighlight onPress={handlePress1} underlayColor="transparent">
        <Feather style={styles.icons} name="settings" size={30} color={isPressed1 ? 'black' : 'gray'} />     
        </TouchableHighlight>

        <TouchableHighlight onPress={handlePress2} underlayColor="transparent">
        <Feather style={styles.icons} name="user" size={30} color={isPressed2 ? 'black' : 'gray'} />
        </TouchableHighlight>

        <TouchableHighlight onPress={handlePress3} underlayColor="transparent">
        <Feather style={styles.icons} name="bookmark" size={30} color={isPressed3 ? 'black' : 'gray'} />
        </TouchableHighlight>

        <TouchableHighlight onPress={handlePress4} underlayColor="transparent">
        <MaterialIcons style={styles.icons} name="question-answer" size={30} color={isPressed4 ? 'black' : 'gray'} />
        </TouchableHighlight>
    </View>
    </View>
)
    
}

const styles = StyleSheet.create({
    outerContainer:{
        flexDirection: 'column', // inner items will be added vertically
        // flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'flex-end',
         // will create the gutter between body and footer
    },
    contentContainer: {
        backgroundColor: '#F6F8FA'
    },

    iconsPress: {
        color: 'black'
    },

    iconsNotPress: {
        color:'gray'
    },

    iconsPosition: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    line: {
        borderTopColor: 'light-gray',
        borderTopWidth: 0.3,
        paddingBottom: 25,
        paddingTop: 10
    }

})
