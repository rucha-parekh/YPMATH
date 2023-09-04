// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2q51mkkuaN4YC5U4ZyFCIYqnHuxNxYlY",
  authDomain: "yp-math.firebaseapp.com",
  projectId: "yp-math",
  storageBucket: "yp-math.appspot.com",
  messagingSenderId: "645883509246",
  appId: "1:645883509246:web:fd5713585b0b7767fe28af"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC26kkRCt0eJ8Ok3QlANgHKnAwBJ0VEIHU",
//   authDomain: "dropdown-4efc4.firebaseapp.com",
//   projectId: "dropdown-4efc4",
//   storageBucket: "dropdown-4efc4.appspot.com",
//   messagingSenderId: "33739554897",
//   appId: "1:33739554897:web:de3aeaa223cef701207870"
// };

// Initialize Firebase
let app;
app = firebase.initializeApp(firebaseConfig);
// if (firebase.app.length === 0) {
// }else {
    // app = firebase.app()
// }

const auth = firebase.auth()

export { auth };
