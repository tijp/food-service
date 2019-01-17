import firebase from 'firebase/app';
import 'firebase/firestore';

const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyBp_fZo5T2zNkoEC0HFR8rYJUOEDNhTfqQ',
    authDomain: 'hapjesvanelsid.firebaseapp.com',
    databaseURL: 'https://hapjesvanelsid.firebaseio.com',
    projectId: 'hapjesvanelsid',
    storageBucket: 'hapjesvanelsid.appspot.com',
    messagingSenderId: '850655764627'
  });
  
  // Initialize Cloud Firestore through Firebase
  const db = firebase.firestore();
  
  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });
}



export default initializeFirebase;
