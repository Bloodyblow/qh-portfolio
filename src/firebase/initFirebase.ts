import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { getAnalytics } from "firebase/analytics"
import "firebase/compat/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

export default function initFirebase() {
  const app = firebase.initializeApp(firebaseConfig)
  
  if(typeof window !== 'undefined'){
    if('measurementId' in firebaseConfig){
      const analytics = getAnalytics(app)    
    }
  }

  return app
}
