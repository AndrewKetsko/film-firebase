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
import { getStorage, setStorage } from '../localStorage/localStorage';
// import renderMoviesList from '../html-render';
import { Notify } from 'notiflix';
import { startingRender } from '../starting-fetch/starting-fetch';

const firebaseConfig = {
  apiKey: 'AIzaSyB_PWcyeq_mysRN450dhl8YNlRe07OXhPg',
  authDomain: 'agence-digitale-ec7fb.firebaseapp.com',
  projectId: 'agence-digitale-ec7fb',
  storageBucket: 'agence-digitale-ec7fb.appspot.com',
  databaseURL: 'https://agence-digitale-ec7fb-default-rtdb.firebaseio.com',
  messagingSenderId: '1068508947220',
  appId: '1:1068508947220:web:ba98b7dcf5e47bb7ce9801',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const provider = new GoogleAuthProvider();
// export const storage = getStorage(app);
// export const storageRef = ref(storage); //second argument is a folder to store, like user id
let pagination;
export const loginMonitor = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user.uid);
      setStorage('user', user.uid);
      // showApp();   show your app
      refs.divRefButtonLibrary.classList.add('header-logo__library--position');
      refs.buttonRefLibrary.classList.add('header-nav--active');
      refs.buttonRefLibrary.style.opacity = '0.5';
      refs.buttonRefLibrary.style.cursor = 'auto';
      refs.buttonRefLibrary.disabled = true;
      //...add disabled;

      refs.buttonRefHome.classList.remove('header-nav--active');
      refs.divRefWatchedQueue.style.display = 'flex';
    //   const queue = getStorage(refs.QUEUE);
      paginationStorage(refs.QUEUE, pagination); // showLoginState(user); show user info
    } else {
      refs.divRefButtonLibrary.classList.remove(
        'header-logo__library--position'
      );
      refs.buttonRefLibrary.classList.remove('header-nav--active');
      refs.buttonRefHome.classList.add('header-nav--active');
      refs.buttonRefLibrary.style.opacity = '1';
      refs.buttonRefLibrary.style.cursor = 'pointer';
      refs.buttonRefLibrary.disabled = false;

      //   refs.buttonRefLibrary....add anabled;

      refs.divRefWatchedQueue.style.display = 'none';
      startingRender();

      //return to login form
    }
  });
};

export const logoutFunc = async e => {
  // console.log(auth);
  const queue = getStorage(refs.QUEUE);
  const watched = getStorage(refs.WATCHED);
  const userID = getStorage('user').join('');
  const db_obj = { queue, watched };
  //   console.log(queue);
  //   console.log(watched);
  console.log(userID);
  console.log(db_obj);


  try {
    set(ref(db, 'user/' + userID), db_obj);
  } catch (error) {
    console.log(error);
  }
    // set(ref(db, 'user/' + userID), db_obj);
  //CANT FIND PATH ERROR

  await signOut(auth);
  //   logoutButton.classList.add('hidden');
  console.log('log Out');
  Notify.info('You Logged Out');
    startingRender();
    
};
