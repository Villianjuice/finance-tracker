// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBVY-ddgF9PUW_6EsWlUw_XPOxxL_BcDcI",
  authDomain: "finance-tracker-b0536.firebaseapp.com",
  projectId: "finance-tracker-b0536",
  storageBucket: "finance-tracker-b0536.appspot.com",
  messagingSenderId: "1037640587123",
  appId: "1:1037640587123:web:c735b3a4831342e2e01706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)