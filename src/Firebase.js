import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7LgKu3hbOS98j2T8YIFsZhZU-LUwbyTw",
  authDomain: "linkdin-chintu.firebaseapp.com",
  projectId: "linkdin-chintu",
  storageBucket: "linkdin-chintu.appspot.com",
  messagingSenderId: "341128950038",
  appId: "1:341128950038:web:ec1e310ad422c7da0d6037"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};