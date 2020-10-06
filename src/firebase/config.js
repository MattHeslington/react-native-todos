import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDlwtAmMwEO5FWdeS3iDqBWcSQcfOd2n44",
    authDomain: "react-native-firebase-44a34.firebaseapp.com",
    databaseURL: "https://react-native-firebase-44a34.firebaseio.com",
    projectId: "react-native-firebase-44a34",
    storageBucket: "react-native-firebase-44a34.appspot.com",
    messagingSenderId: "596487074640",
    appId: "1:596487074640:web:13e4890f0c7a9bf76ab255"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };