import firebase from 'firebase/app';
import 'firebase/database'

 const firebaseConfig = {
  apiKey: "AIzaSyC3c7Qr0Y1q_t5o3EaoJTerfAMbwOOYCyE",
  authDomain: "crud-55546.firebaseapp.com",
  databaseURL: "https://crud-55546-default-rtdb.firebaseio.com",
  projectId: "crud-55546",
  storageBucket: "crud-55546.appspot.com",
  messagingSenderId: "1066923521495",
  appId: "1:1066923521495:web:03e895a948eeb5ffe88792"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export  {firebase, database}