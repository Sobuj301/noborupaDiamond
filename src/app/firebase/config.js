import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAdDERuRiBgwook9hchKxgiizKiPiqSQ2E",
  authDomain: "noboruma-diamond.firebaseapp.com",
  projectId: "noboruma-diamond",
  storageBucket: "noboruma-diamond.appspot.com",
  messagingSenderId: "279816491562",
  appId: "1:279816491562:web:569018528888567c9ee953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app