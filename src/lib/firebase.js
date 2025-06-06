import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHZk_DPRsFxNoLca1DpFobakPavrNDLlE",
  authDomain: "quirkystore-6f98c.firebaseapp.com",
  projectId: "quirkystore-6f98c",
  storageBucket: "quirkystore-6f98c.appspot.com",
  messagingSenderId: "147146162851",
  appId: "1:147146162851:web:c68d82079484f5ba3eb516",
  measurementId: "G-LHB9MNNZJZ"
};

// ✅ Initialize Firebase app FIRST
const app = initializeApp(firebaseConfig);

// ✅ Then use the app instance
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// ✅ Export what you need
export { app, analytics, auth, db };
