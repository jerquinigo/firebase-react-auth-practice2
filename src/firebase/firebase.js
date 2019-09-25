import firebase from "firebase/app";
import "firebase/auth";

// Use actual config values from registered firbase app
var config = {
  apiKey: "AIzaSyD8Qrs2vAVXNdHuG6k1fpcVB4gYik9qXlI",
  authDomain: "fir-react-auth-practice.firebaseapp.com",
  databaseURL: "https://fir-react-auth-practice.firebaseio.com",
  projectId: "fir-react-auth-practice",
  storageBucket: "",
  messagingSenderId: "989955017719",
  appId: "1:989955017719:web:bf1db1402efec5fdb8fcf2"
};

firebase.initializeApp(config);

const auth = firebase.auth();

export { auth };
