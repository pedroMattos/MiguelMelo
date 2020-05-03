import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-auth';
import 'firebase/firebase-database';
import 'firebase/firebase-storage';
// import firebaseConfig from './firebaseConfig';

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvDgUhMaGxaTk_aYkNJDC-PwQ_FnRl8Fw",
  authDomain: "miguel-melo-design-test-bd.firebaseapp.com",
  databaseURL: "https://miguel-melo-design-test-bd.firebaseio.com",
  projectId: "miguel-melo-design-test-bd",
  storageBucket: "miguel-melo-design-test-bd.appspot.com",
  messagingSenderId: "407552089199",
  appId: "1:407552089199:web:4955f1332719008142819a",
  measurementId: "G-FYKPR1S86J",
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
