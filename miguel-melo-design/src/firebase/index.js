import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';
// import firebaseConfig from './firebaseConfig';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXIbcGenHCyjxJU33W6Z6UrE3TrBPLsr0",
  authDomain: "miguel-melo-design.firebaseapp.com",
  databaseURL: "https://miguel-melo-design.firebaseio.com",
  projectId: "miguel-melo-design",
  storageBucket: "miguel-melo-design.appspot.com",
  messagingSenderId: "316780265137",
  appId: "1:316780265137:web:863059304ea4e7e02c6c90",
  measurementId: "G-1HT8JMXX2D"
});
// exporta o metodo de autenticação e o banco de dados
// export default firebaseApp.auth() && firebaseApp.firestore();
export default function install (Vue) {
  Object.defineProperty(Vue.prototype, '$firebase', {
    get() {
      return firebaseApp
    }
  })
}
