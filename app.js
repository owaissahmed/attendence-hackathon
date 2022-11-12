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
  getFirestore,
  collection,
  getDocs,
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
// const analytics = getAnalytics(app);

var login = document.getElementById("login");

login.addEventListener("click", async function () {
  // alert("shaij");
  var lemail = document.getElementById("lemail").value;
  var lpassword = document.getElementById("lpassword").value;
  const docRef = doc(db, "admin", "NtIV6noAZscs1S7ol1Mv");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    if (
      lemail == docSnap.data().email && lpassword == docSnap.data().password) {
      window.open("admin.html");
    }
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
});
// console.log("ajhkj");
// signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
//   .then(async (userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//     console.log(user);
//     Swal.fire({
//       icon: "success",
//       title: "Congrats",
//       text: "You are successfully login",
//       iconColor: "green",
//       background: "black",
//       color: "whitesmoke",
//     });

// console.log(profile)
// const docRef = doc(db, "users", user.uid);
// const docSnap = await getDoc(docRef);
// var friend = [];
// if (docSnap.exists()) {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id);
//     let alluserdata = doc.data();
//     friend.push(alluserdata.firstName);
//     localStorage.setItem("friendsname", JSON.stringify(friend));
//     console.log(friend);
//   });
//   localStorage.setItem("userdata", JSON.stringify(docSnap.data()));
//   console.log(docSnap.data());
// } else {
//   console.log("No such document!");
// }
// setTimeout(() => {
//   window.location = "chat.html";
//   // window.location = "user.html"
//   signupform.style.display = "none";
//   lemail.value = "";
//   lpassword.value = "";
// }, 1000);
// })
// .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;

//         Swal.fire({
//           icon: "error",
//           title: errorCode,
//           text: errorMessage,
//           iconColor: "red",
//           background: "black",
//           color: "whitesmoke",
//         });
//         // setTimeout(() => {
//         //   lemail.value = "";
//         //   lpassword.value = "";
//         // }, 1000);
//       });
//   });
// }
