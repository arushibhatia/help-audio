import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAdbgoLqHT3GAOSM-sVGCdJyDxxrqt_hDw",
    authDomain: "help-audio.firebaseapp.com",
    projectId: "help-audio",
    storageBucket: "help-audio.appspot.com",
    messagingSenderId: "250550980085",
    appId: "1:250550980085:web:97b8c30d0b27f3a15924bc",
    measurementId: "G-4240T2X7Y0"
})

export const auth = app.auth()
export default app