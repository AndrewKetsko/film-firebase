import { refs } from '../refs';
import { Notify } from 'notiflix';
import { signInWithPopup } from 'firebase/auth ';
import { auth, provider } from '../firebaseAPI/firebase';
import { loginMonitor } from '../firebaseAPI/firebase';
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
import { paginationStorage } from '../pagination/pagination';
import { onClickButtonWatched, onClickButtonQueue } from './button-home';
let paginationMyLibrary;

export function onClickMyLibraryButton() {
  // refs.divRefButtonLibrary.classList.add('header-logo__library--position');
  // refs.buttonRefLibrary.classList.add('header-nav--active');
  // refs.buttonRefHome.classList.remove('header-nav--active');
  // refs.divRefWatchedQueue.style.display = 'flex';
  // paginationStorage(refs.QUEUE, paginationMyLibrary);
        signInWithPopup(auth, provider)
          .then(result => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user);
                Notify.info('You Logged In');

            refs.divRefButtonLibrary.classList.add(
              'header-logo__library--position'
            );
            refs.buttonRefLibrary.classList.add('header-nav--active');
            refs.buttonRefHome.classList.remove('header-nav--active');
            refs.divRefWatchedQueue.style.display = 'flex';
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
  loginMonitor();
}
