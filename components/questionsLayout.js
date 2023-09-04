import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function QuestionsLayout() {
  const [isIconActive, setIsIconActive] = useState(false);
  const [isIconActive2, setIsIconActive2] = useState(false);

  const handleIconPress = () => {
    setIsIconActive(!isIconActive);
  };

  const handleIconPress2 = () => {
    setIsIconActive2(!isIconActive2);
  };

  return (
    <View style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
      

        <View style={styles.rectangle}>
          <View style={styles.inline}>
          <Text style={styles.text}>Title of Question</Text>
          <Pressable
            style={styles.icon}
            onPress={() => handleIconPress("bookmark")}
          >
            <FontAwesome
              name={isIconActive ? "bookmark" : "bookmark-o"}
              size={30}
              color={"black"}
            />
          </Pressable>
          </View>
          <View>
            <Image source={require("../assets/mid.png")} style={{height:300, width:300}}/>
          </View>
        </View>

        

        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  down: {
    flexDirection: "column",
    
  },

  icon: {
    marginRight: 10,
    marginTop: 10,
  },

  image: {
    width: "100%",
    // flex: 1,
    height: "50%",
    alignSelf: "center",
    position: "relative",
    resizeMode:'contain'
    // flex: 5 / 7,
  },

  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    
    // flex: 1,
  },

  outerContainer: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: "#f8f8f8",
    // justifyContent:'space-between',
    // flexDirection:'row',
    // alignItems:'stretch'
    // maxHeight: '100%'
  },
  rectangle: {
    height: 350,
    width: "90%",
    // backgroundColor: "#F6F8FA",
    // // paddingBottom: 20,
    // // paddingTop: 20,
    margin: 20,
    // marginTop: 59,
    justifyContent: "space-between",
    // // borderColor: '#FFE066',
    borderColor: "#ffe066",
    borderWidth: 3,
    // shadowColor: "light-grey",
    // elevation: 5,
    flexDirection: "column",
  },

  text: {
    color: "black",
    fontSize: 23,
    maxWidth:'80%',
    marginLeft: 10,
    marginTop: 10,
  },
});
