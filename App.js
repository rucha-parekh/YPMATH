import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepage from './components/finalHomePage';
import Login from './components/login';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import OnlineTuitions from './components/onlineTuitions';
import SignUp from './components/signUp';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import Footer from './components/footer';
import ProfilePage from './components/profilePage';
import Dropdown from './components/subject';
import Home from './components/signupDemo';
import QuestionsLayout from './components/questionsLayout';


const Stack = createStackNavigator()


function App() {
  return (
      // <Dropdown/>
      <QuestionsLayout />
    
        
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  
});

export default () => {
  return (
    <NavigationContainer>
      
      <App/>
    </NavigationContainer>
  )
}


// <View style={styles.main}>
//         <Navbar />
//         <Homepage />
      
//     </View>