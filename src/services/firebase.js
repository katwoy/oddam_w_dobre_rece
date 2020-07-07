import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGHqWXXY0CyPQG-yYV_YWT5uFAXUeIxDk",
  authDomain: "oddam-w-dobre-rece-ee814.firebaseapp.com",
  databaseURL: "https://oddam-w-dobre-rece-ee814.firebaseio.com",
  projectId: "oddam-w-dobre-rece-ee814",
  storageBucket: "oddam-w-dobre-rece-ee814.appspot.com",
  messagingSenderId: "1053539237898",
  appId: "1:1053539237898:web:d6d424840fe0e3ec38dff3"
};

firebase.initializeApp(firebaseConfig);