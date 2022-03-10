import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { ref, onUnmounted } from 'vue';

const firebaseConfig = {
    apiKey: 'AIzaSyCitjTWXlT7eK42ssu7CXh48LgFopdxNNM',
    authDomain: 'tropykus-fb8d4.firebaseapp.com',
    databaseURL: 'https://tropykus-fb8d4-default-rtdb.firebaseio.com',
    projectId: 'tropykus-fb8d4',
    storageBucket: 'tropykus-fb8d4.appspot.com',
    messagingSenderId: '830150864237',
    appId: '1:830150864237:web:7ca8e78c9ea19166127e64',
    measurementId: 'G-RVCSG2YXP9',
};
/* eslint-disable eol-last */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, getDocs };
