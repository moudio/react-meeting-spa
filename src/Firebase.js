import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC4UB_ZeQItf37Evq_iovjS9pBkfpYQHao',
  authDomain: 'mo-react-spa.firebaseapp.com',
  databaseURL: 'https://mo-react-spa.firebaseio.com',
  projectId: 'mo-react-spa',
  storageBucket: 'mo-react-spa.appspot.com',
  messagingSenderId: '364497420212',
  appId: '1:364497420212:web:bac3943b039e9a70577ce1',
  measurementId: 'G-PZDCKB5JVQ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
