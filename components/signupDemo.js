import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import '../firebase';
import { SelectList } from "react-native-dropdown-select-list";
import { firebase } from "@react-native-firebase/firestore";


const Home = () => {
  const todoRef = firebase.firestore().collection("details");
  const [addName, setAddName] = useState("");
  const [addCountry, setAddCountry] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const drop = [
    { key: "1", value: "yash" },
    { key: "2", value: "rucha" },
    { key: "3", value: "prateeti" },
  ];

  const addField = () => {
    if (addName && addName.length > 0) {
      console.log(drop[value]);
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        CreatedAt: timestamp,
        Name: addName,
        Country: addCountry,
        Email: addEmail,
        Password: addPassword,
        // userRole:"external-user"
      };
      todoRef
        .add(data)
        .then(() => {
          setAddName("");
          setAddCountry("");
          setAddEmail("");
          setAddPassword("");
          for (let x = 0; x < 5; x++) {
            Keyboard.dismiss();
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.formContainer}>
        <TextInput
          styles={styles.input}
          placeholder="Enter Name"
          onChangeText={(name) => setAddName(name)}
          value={addName}
          multiline={true}
        />
        <TextInput
          styles={styles.input}
          placeholder="Enter Country"
          onChangeText={(country) => setAddCountry(country)}
          value={addCountry}
          multiline={true}
        />
        <TextInput
          styles={styles.input}
          textContentType="emailAddress"
          placeholder="Enter Email"
          onChangeText={(email) => setAddEmail(email)}
          value={addEmail}
          multiline={true}
        />
        <TextInput
          styles={styles.input}
          textContentType="password"
          placeholder="Enter Password"
          onChangeText={(password) => setAddPassword(password)}
          value={addPassword}
          secureTextEntry
        />
        <SelectList
          data={drop}
          setSelected={(value) => {
            setSelected(value);
            uploadSelectedValue(value);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={addField}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: "50%",
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: "20%",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    alignSelf: "center",
  },
  button: {
    height: "10%",
    borderRadius: 5,
    backgroundColor: "blue",
    width: "40%",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Home;
