import firebase from 'firebase/app';
import 'firebase/firestore';
import { FIREBASE_CONFIG } from '../../SECRETS';

const initializeFirebase = () => {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default initializeFirebase;
