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
}



export default initializeFirebase;
