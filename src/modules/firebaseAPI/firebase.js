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
import { getStorage, setStorage, setStorageFromFireBase } from '../localStorage/localStorage';
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
} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyB_PWcyeq_mysRN450dhl8YNlRe07OXhPg',
//   authDomain: 'agence-digitale-ec7fb.firebaseapp.com',
//   projectId: 'agence-digitale-ec7fb',
//   storageBucket: 'agence-digitale-ec7fb.appspot.com',
//   databaseURL:
//     'https://agence-digitale-ec7fb-default-rtdb.europe-west1.firebasedatabase.app',
//   messagingSenderId: '1068508947220',
//   appId: '1:1068508947220:web:ba98b7dcf5e47bb7ce9801',
// };

// const firebaseConfig = {
//   apiKey: 'AIzaSyB_PWcyeq_mysRN450dhl8YNlRe07OXhPg',
//   authDomain: 'agence-digitale-ec7fb.firebaseapp.com',
//   databaseURL: 'https://agence-digitale-ec7fb-default-rtdb.firebaseio.com',
//   projectId: 'agence-digitale-ec7fb',
//   storageBucket: 'agence-digitale-ec7fb.appspot.com',
//   messagingSenderId: '1068508947220',
//   appId: '1:1068508947220:web:f9e53c03bd3556fdce9801',
// };

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
export const loginMonitor = async () => {
  onAuthStateChanged(auth, async user => {
    if (user) {
      console.log(user.uid);

      // const getFirestore = await getDocs(collection(fireStore, user.uid));
      const getFirestore = await getDoc(doc(fireStore, 'users', user.uid));

      if (getFirestore.exists()) {
        setStorageFromFireBase(getFirestore.data())
        console.log(getFirestore.data());
        console.log(getFirestore.data().queue);
        console.log(getFirestore.data().watched);
      } else {
        // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }

      // console.log(getFirestore.data());

      // getFirestore.forEach(doc => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      // });

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
  const queue = await getStorage(refs.QUEUE);
  const watched = await getStorage(refs.WATCHED);
  const userID = await getStorage('user').join('');
  const db_obj = await { queue, watched };
  console.log(fireStore);
  //   console.log(watched);
  console.log(userID);
  console.log(db_obj);
  // const referenceRealtime = ref(db, 'user/' + userID);
  // const referenceFirestore = collection(fireStore, "message");
  // console.log(referenceRealtime);

  try {
    // set(referenceRealtime, db_obj);
    // const docRef = await addDoc(collection(fireStore, userID), db_obj);
    const docRef = await setDoc(doc(fireStore, 'users', userID), db_obj);

    // console.log(docRef.id);
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
