import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC73cXj-GaxragE56Re9k_ns8JfLT_UcX4",
    authDomain: "desafiofb2.firebaseapp.com",
    projectId: "desafiofb2",
    storageBucket: "desafiofb2.appspot.com",
    messagingSenderId: "318880378153",
    appId: "1:318880378153:web:690424d4d8800469609b38"
  };

const app = initializeApp(firebaseConfig);

export { app };
