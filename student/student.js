// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCE4smtVnWWD2yLZjiywtWdske_KTygsC4",
  authDomain: "hackathone-786.firebaseapp.com",
  projectId: "hackathone-786",
  storageBucket: "hackathone-786.appspot.com",
  messagingSenderId: "80772012942",
  appId: "1:80772012942:web:ac192bd6b6d746ca18e2df",
  measurementId: "G-CDQVJRRTRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

const submit = document.getElementById("submit").addEventListener("click", async () => {
  var name = document.getElementById("name").value;
  var fname = document.getElementById("fname").value;
  var roll = document.getElementById("roll").value;
  var contact = document.getElementById("contact").value;
  var cnic = document.getElementById("cnic").value;
  var course = document.getElementById("course").value;
  // var picture = document.getElementById("picture");

  const docRef = await addDoc(collection(db, "student"), {
    name: name,
    fname: fname,
    roll: roll,
    contact: contact,
    cnic: cnic,
    course: course,
  });
  console.log("Document written with ID: ", docRef.id);
});

var back = document.getElementById("back").addEventListener("click", () => {
  window.open("../dashboard/dashboard.html", "_self");
});
