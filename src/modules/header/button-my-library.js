import { refs } from '../refs';
import { Notify } from 'notiflix';
import { signInWithPopup } from 'firebase/auth ';
import { auth, provider } from '../firebaseAPI/firebase';
import { loginMonitor, signInWithGoogle, logoutFunc } from '../firebaseAPI/firebase';
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
  if (refs.buttonRefLibrary.textContent === 'LOG IN') {signInWithGoogle()};
  if (refs.buttonRefLibrary.textContent === 'LOG OUT') {logoutFunc()};
  // loginMonitor();
}
