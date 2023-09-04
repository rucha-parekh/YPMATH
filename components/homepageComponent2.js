import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TouchableHighlight } from 'react-native';

export default function Homepage2(props) {
    const {title='START STUDYING'}=props;
    return (
        <View style={styles.container}>
            <Text style={styles.header}>All main subjects covered</Text>
            <Text style={styles.subHeader}>With over 3000 questions answered. and a growing user base</Text>
            <View style={styles.boxContainer}>   
                <View style={styles.box1}>
                    <Text style={styles.boxText}>Math</Text>
                    <Pressable style={styles.boxbutton}><Text style={styles.buttontext}>{title}</Text></Pressable>
                </View>        
                <View style={styles.box2}>
                    <Text style={styles.boxText}>Chemistry</Text>
                    <Pressable style={styles.boxbutton}><Text style={styles.buttontext}>{title}</Text></Pressable>
                </View>
            </View>
            <View style={styles.boxContainer}>
                <View style={styles.box3}>
                    <Text style={styles.boxText}>Physics</Text>
                    <Pressable style={styles.boxbutton}><Text style={styles.buttontext}>{title}</Text></Pressable>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.boxText}>biology</Text>
                    <TouchableHighlight style={styles.boxbutton}><Text style={styles.buttontext}>{title}</Text></TouchableHighlight>
                </View>
            </View>
        </View>

        );
}

const styles = StyleSheet.create({
    boxbutton:{        
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fbe268',
        minHeight: '20%',
        minWidth: '80%',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
        position: 'absolute',
        bottom: 0,
        flex: 1
    },
    box1:{
        width: '40%',
        backgroundColor: '#FF5353',
        minHeight: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    box2:{
        width: '40%',
        backgroundColor: '#FEFF59',
        minHeight: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    box3:{
        width: '40%',
        backgroundColor: '#78E6FF',
        minHeight: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    box4:{
        width: '40%',
        backgroundColor: '#CD7CFF',
        minHeight: '10%',
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    boxContainer: {
        flexDirection: 'row',
        width: 'auto',
    },
    boxText:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
        fontWeight: '700'
    },
    buttontext:{
        fontWeight: '800',
        fontSize: 19,
        textAlign: 'center'
    },
    container:{
        minHeight: 300,
        width: 'auto',
        // borderWidth: 1,
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: '#FFFFFF'
    },
    header: {
        fontSize: 30,
        marginTop: 10,
        fontWeight: '600',
        textAlign: 'center'
    },
    subHeader:{
        fontSize: 20,
        marginTop: 10,
        fontWeight: '350',
        maxWidth: '80%',
        textAlign: 'center'
    }

})