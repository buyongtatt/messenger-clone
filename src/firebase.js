import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2Le63HN6IgmCo9jsMsmS-4c7WGttQla8",
    authDomain: "messenger-d59dc.firebaseapp.com",
    projectId: "messenger-d59dc",
    storageBucket: "messenger-d59dc.appspot.com",
    messagingSenderId: "963114655747",
    appId: "1:963114655747:web:7bd87b82271a4f3b3c6e36",
    measurementId: "G-SL7G3NX09L"
  });

 
  const db = firebaseApp.firestore();

  export default db;