import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const api_key = process.env.REACT_APP_APIKEY;
export const auth_domain = process.env.REACT_APP_AUTHDOMAIN;
export const projectId = process.env.REACT_APP_PROJECTID;
export const storageBucket = process.env.REACT_APP_STORAGEBUCKET;
export const messengerId = process.env.REACT_APP_MESSAGINGSENDERID;
export const appId = process.env.REACT_APP_ID;

const firebaseConfig = {
  apiKey: api_key,
  authDomain: auth_domain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messengerId,
  appId: appId
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
