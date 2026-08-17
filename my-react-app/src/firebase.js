import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
apiKey: "AIzaSyCXNmkYA92L86KXggm8JE215W3ZohopfE8",
authDomain: "my-react-app-e3a25.firebaseapp.com",
projectId: "my-react-app-e3a25",
storageBucket: "my-react-app-e3a25.firebasestorage.app",
messagingSenderId: "456384490642",
appId: "G-BMQPXE7P07"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
export { db, auth }
