import * as firebase from "firebase";
import { firebaseApp } from "./base";
import { useDispatch } from "react-redux";
import { RELOAD_USER } from "data/Action";

export const fblogin = async (
  setEmail: any,
  setName: any,
  setImage: any,
  setStatus: any,
  setError: any
) => {
  try {
    const authProvider = new firebase.auth[`${"Facebook"}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then((authData: any) => {
        const user = authData.user;
        //console.log(user);
        setEmail(user.email);
        setName(user.displayName);
        setImage(user.photoURL);
        setStatus(true);
        //console.log("sss");
        //console.log(user);
      });
  } catch (err: any) {
    //console.log(err);
    setError(err.message);
  }
};

export const fblogout = async (setLogout: any) => {
  await firebase.auth().signOut();
  setLogout(true);
};
