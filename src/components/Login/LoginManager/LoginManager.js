import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.config";

export const firebaseConfigFrameWork = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    else{
        firebase.app();
    }
}


// Google sign in
// export const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth()
//   .signInWithPopup(googleProvider)
//   .then((result) => {
//     const user = result.user;
//     return user;
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });
// }

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
  .then(res => {
    const {displayName, photoURL, email} = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photo: photoURL,
      success: true
    };
    return signedInUser;
  })
  .catch(err => {
    console.log(err);
    console.log(err.message);
  })
}

// For user login
export const handleLogIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
}

// For manually user sign up
export const handleSignUp = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => { 
    updateUserName(name);
    const user = userCredential.user;
    return user;
  })
  .catch((error) => {
    const errorMessage = error.message;
    return errorMessage;
  });
}

// update user name
const updateUserName = name => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name
    }).then(res => {
      
    }).catch(error => {
      console.log(error);
    });
}