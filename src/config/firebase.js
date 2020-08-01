import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC9eES0aHdQQVJwZoTjadn2JeiIzKxCgzQ",
  authDomain: "react-chatapp-js.firebaseapp.com",
  databaseURL: "https://react-chatapp-js.firebaseio.com",
  projectId: "react-chatapp-js",
  storageBucket: "react-chatapp-js.appspot.com",
  messagingSenderId: "361610503109",
  appId: "1:361610503109:web:09de92431941c577fd61ac",
  measurementId: "G-PWS0BQWWGW",
};

const firebase_config = firebase.initializeApp(config);
export default firebase_config;
