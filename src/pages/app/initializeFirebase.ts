import firebase from 'firebase/app';
import 'firebase/firestore';

const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'XXXXX',
    authDomain: 'XXXXX',
    databaseURL: 'XXXXX',
    projectId: 'XXXXX',
    storageBucket: 'XXXXX',
    messagingSenderId: 'XXXXX'
  });
  
  // Initialize Cloud Firestore through Firebase
  const db = firebase.firestore();
  
  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });
}



export default initializeFirebase;
