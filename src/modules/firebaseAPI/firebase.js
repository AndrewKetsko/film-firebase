import { initializeApp } from 'firebase/app';
import { paginationStorage, paginationFunc } from '../pagination/pagination';
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth ';
// import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';
import { getDatabase, ref, set } from 'firebase/database';
import { ref, uploadString } from 'firebase/storage';
import { refs } from '../refs';
import {
  clearStorage,
  getStorage,
  setStorage,
  setStorageFromFireBase,
} from '../localStorage/localStorage';
// import renderMoviesList from '../html-render';
import { Notify } from 'notiflix';
import { startingRender } from '../starting-fetch/starting-fetch';
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyChg8lDgINrc-F_mlrFvP9Chmjr_-TXkdg',
  authDomain: 'films-5503c.firebaseapp.com',
  projectId: 'films-5503c',
  storageBucket: 'films-5503c.appspot.com',
  messagingSenderId: '193451105367',
  appId: '1:193451105367:web:c8230906413bec152b9712',
};

export const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const provider = new GoogleAuthProvider();
// export const storage = getStorage(app);
// export const storageRef = ref(storage); //second argument is a folder to store, like user id
let pagination;
let paginationMyLibrary;

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      Notify.info('You Logged In');
    })
    .catch(error => {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const loginMonitor = async () => {
  onAuthStateChanged(auth, async user => {
    if (user) {
      // const getFirestore = await getDocs(collection(fireStore, user.uid));
      const getFirestore = await getDoc(doc(fireStore, 'users', user.uid));

      if (getFirestore.exists()) {
        setStorageFromFireBase(getFirestore.data());
      }

      setStorage('user', user.uid);
      // showApp();   show your app
      refs.divRefButtonLibrary.classList.add('header-logo__library--position');
      refs.buttonRefLibrary.classList.add('header-nav--active');
      // refs.buttonRefLibrary.style.opacity = '0.5';
      refs.buttonRefLibrary.style.cursor = 'auto';
      // refs.buttonRefLibrary.disabled = true;
      //...add disabled;
      refs.buttonRefHome.classList.remove('header-nav--active');
      refs.divRefWatchedQueue.style.display = 'flex';
      //   const queue = getStorage(refs.QUEUE);
      paginationStorage(refs.QUEUE, paginationMyLibrary);
      console.log('were in');
      refs.buttonRefLibrary.textContent = 'LOG OUT';
    } else {
      console.log('were out');
      refs.divRefButtonLibrary.classList.remove(
        'header-logo__library--position'
      );
      refs.buttonRefLibrary.classList.remove('header-nav--active');
      refs.buttonRefHome.classList.add('header-nav--active');
      refs.buttonRefLibrary.style.opacity = '1';
      refs.buttonRefLibrary.style.cursor = 'pointer';
      refs.divRefWatchedQueue.style.display = 'none';

      // refs.buttonRefLibrary.disabled = false;
      //   refs.buttonRefLibrary....add anabled;
      refs.divRefWatchedQueue.style.display = 'none';
      refs.buttonRefLibrary.textContent = 'LOG IN';
      startingRender();
      //return to login form
    }
  });
};

export const saveFireStore = async () => {
  const queue = getStorage(refs.QUEUE);
  const watched = getStorage(refs.WATCHED);
  const userID = getStorage('user').join('');
  const db_obj = { queue, watched };

  try {
    const docRef = await setDoc(doc(fireStore, 'users', userID), db_obj);
    // console.log('save');
  } catch (error) {
    console.log(error);
  }
};

export const logoutFunc = async e => {
  // saveFireStore();
  await signOut(auth);
  // loginMonitor();
  Notify.info('You Logged Out');
  localStorage.clear();
  startingRender();
};
