
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch } from "react-redux";
import { loginAction } from "redux/actions/UserManageAction";
import { ACCESSTOKEN } from "utils/setting";
const firebaseConfig = {
    apiKey: "AIzaSyAJ6Jg9HhW6lN4hEv6OUZ_0x0eyL2LHgRQ",
    authDomain: "v-leagues.firebaseapp.com",
    projectId: "v-leagues",
    storageBucket: "v-leagues.appspot.com",
    messagingSenderId: "883654767893",
    appId: "1:883654767893:web:a3f78c749302005ce2251c",
    measurementId: "G-4KBGV5R57T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// const provider = new GoogleAuthProvider()
// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider).then((result) => {
//         result.user.getIdToken().then(result => localStorage.setItem(ACCESSTOKEN, result))
//     }).catch((error) => console.log(error))

// }
