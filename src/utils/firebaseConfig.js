import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBnX54rJU2CGJET9J1tSEfTuYSl4rxRSng",
  authDomain: "av2-cep.firebaseapp.com",
  projectId: "av2-cep",
  storageBucket: "av2-cep.appspot.com",
  messagingSenderId: "724288655424",
  appId: "1:724288655424:web:c36f9eef0b0fd79c200fa5"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
