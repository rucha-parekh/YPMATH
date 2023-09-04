import { View, Text } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";

export default function Dropdown() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "yash" },
    { key: "2", value: "rucha" },
    { key: "3", value: "prateeti" },
  ];

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 100, flex: 1 }}>
      <SelectList data={data} setSelected={setSelected} />
    </View>
  );
}


// import { View, Text } from "react-native";
// import React, { useState } from "react";
// import { SelectList } from "react-native-dropdown-select-list";
// // import firestore from "@react-native-firebase/firestore";
// import firebase from "firebase";

// export default function Dropdown() {
//   const [selected, setSelected] = useState("");

//   const drop = [
//     { key: "1", value: "yash" },
//     { key: "2", value: "rucha" },
//     { key: "3", value: "prateeti" },
//   ];

//   // Function to upload selected value to Firestore
//   const uploadSelectedValue = async (value) => {
//     try {
//       console.log(drop[value]);
//       await firebase.firestore().collection("dropdowndemo").doc("ZKLyHoQoj41hBF4CfeP0").set({
//         selectedValue: value,
//       });
//       console.log("Selected value uploaded to Firestore");
//     } catch (error) {
//       console.log("Error uploading selected value to Firestore: ", error);
//     }
//   };

//   return (
//     <View style={{ paddingHorizontal: 20, paddingVertical: 100, flex: 1 }}>
//       <SelectList
//         data={drop}
//         setSelected={(value) => {
//           setSelected(value);
//           uploadSelectedValue(value);
//         }}
//       />
//     </View>
//   );
// }