import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyADvAYiQmGAgVCn-dddSUwjaPgOdB2GHMw",
  authDomain: "onyma-f96ea.firebaseapp.com",
  databaseURL: "https://onyma-f96ea-default-rtdb.firebaseio.com",
  projectId: "onyma-f96ea",
  storageBucket: "onyma-f96ea.appspot.com",
  messagingSenderId: "387529389390",
  appId: "1:387529389390:web:c124559d7decaeadd5da1f"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export default database;
