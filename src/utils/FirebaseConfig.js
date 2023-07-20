import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCJZ1HDXDJcQAPIC1NQbdvAiRBrsaYzqQ",
  authDomain: "whatsapp-clone-9d4f6.firebaseapp.com",
  projectId: "whatsapp-clone-9d4f6",
  storageBucket: "whatsapp-clone-9d4f6.appspot.com",
  messagingSenderId: "643324937768",
  appId: "1:643324937768:web:3c6247e661fbe7bfb2971d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
