import React, { useState } from "react";
import { Text, StyleSheet, Button, Pressable, View, TextInput, Modal } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



export default function ProfilePage(){
    const [text, setText] = useState('rucha.parekh@gmail.com');
    const [editing, setEditing] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleEdit = () => {
        setEditing(true);
        setShowPopup(true);
    }

    const handleSave = (newText) => {
        setText(newText);
        setEditing(false);
        setShowPopup(false);
    }

    return(
        <View style={styles.main}>
        <View style={styles.upperView}>
            <View style={styles.iconPosition}><FontAwesome5 style={styles.icon} name="user-circle" size={200} color='black' /></View>
            <Text style={styles.name}>Rucha</Text>
            <View>
  editing ? (
    <TextInput
      value={text}
      onChangeText={setText}
      onSubmitEditing={() => handleSave(text)}
    />
  ) 
  

  <Modal visible={showPopup} animationType="slide">
    <View style={styles.popup}>
      <TextInput
        value={text}
        onChangeText={setText}
        onSubmitEditing={() => handleSave(text)}
      />
      <Button title="Save" onPress={() => handleSave(text)} />
    </View>
  </Modal>
</View>
        </View>
        <Pressable style={styles.button}><Text style={styles.buttonText}>LOG OUT</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        width: 270,
        height: 70,
        backgroundColor: '#fbe268',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 4,
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 150
    },

    buttonText:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    icon:{
        alignSelf: 'center',
    },

    information:{
        fontSize: 29,
        textAlign: 'center'
    },
    
    main:{
        // textAlign: 'center',
        // textAlignVertical: 'center'
        flex : 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F6F8FA',
        // <Text style={styles.information}>rucha.parekh@gmail.com</Text>
        // <Text style={styles.information}>India</Text>
    },

    name:{
        marginTop: 60,
        fontSize: 35,
        textAlign: 'center'
    },

    upperView:{
        marginTop: 150
    }

})
