// Import the functions you need from the SDKs you need
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore-lite.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwncEF9j-FRD0pusjBSwMTdp_zIOd5L5c",
    authDomain: "course-wok.firebaseapp.com",
    databaseURL: "https://course-wok-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "course-wok",
    storageBucket: "course-wok.appspot.com",
    messagingSenderId: "802653442245",
    appId: "1:802653442245:web:4bc88ce9b8a96c73f420ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const firebase_collection = collection(db, 'players');
const collection_snapshot = await getDocs(firebase_collection);
const players = collection_snapshot.docs.map(doc => doc.data())
const login_button = document.getElementById('login_button')
const login_input = document.getElementById('login_input')
const password_input = document.getElementById('password_input')

login_button.addEventListener('click', () => {
    const login = login_input.value;
    const pass = password_input.value;
    if (login !== '' && pass !== '') {
        for (let player of players) {
            if (player.login === login && player.pass === pass) {
                console.log('Logged')
            }
        }
    }
})