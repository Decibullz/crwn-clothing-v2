// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCnACwBy9wjBqklVU5MN1A0qnfHPVu25EI',
  authDomain: 'crwn-clothing-v2-430f1.firebaseapp.com',
  projectId: 'crwn-clothing-v2-430f1',
  storageBucket: 'crwn-clothing-v2-430f1.appspot.com',
  messagingSenderId: '813215633255',
  appId: '1:813215633255:web:8836e4ee243efd8d8869c2',
  measurementId: 'G-PK7TNVHM56',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
