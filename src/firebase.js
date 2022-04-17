import firebase from 'firebase'
// this is firebase 7 version for 8,9 and above import process changes 
const firebaseConfig = {
  apiKey: "AIzaSyBt588U8rCNzleC6oLRCNvKmUrY6wPIkcU",
  authDomain: "jm--clone.firebaseapp.com",
  projectId: "jm--clone",
  storageBucket: "jm--clone.appspot.com",
  messagingSenderId: "345078674625",
  appId: "1:345078674625:web:b4ad807ee734fdb4ca5040"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db,auth,storage};

