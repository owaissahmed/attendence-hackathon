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

const done = document.getElementById("done");
done.addEventListener("click", async () => {
  var Time = document.getElementById("Time").value;
  var Schedule = document.getElementById("Schedule").value;
  var Teacher = document.getElementById("Teacher").value;
  var Section = document.getElementById("Section").value;
  var Batch = document.getElementById("Batch").value;

  const docRef = await addDoc(collection(db, "classes"), {
    Time: Time,
    Schedule: Schedule,
    Teacher: Teacher,
    Section: Section,
    Batch: Batch,
  });
  console.log("Document written with ID: ", docRef.id);
});


var back = document.getElementById("back").addEventListener("click",()=>{
    window.open("../dashboard/dashboard.html", "_self");
})


// var Teacher = document.getElementById("Teacher");
// Teacher.addEventListener("change", async () => {
//   const q = query(
//     collection(db, "classes"),
//     where("Teacher", "==", Teacher.value)
//   );

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, " => ", doc.data());
//   });
// });