import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Homepage1 from './homepageComponent1';
import Homepage2 from './homepageComponent2';
import Homepage3 from './homepageComponent3';
import Navbar from './navbar';

export default function Homepage() {
    return (
    <View>
        <Navbar />
        <ScrollView>
            <Homepage1 />
            <Homepage2/>
            <Homepage3 />
        </ScrollView>
    </View>
    )
}