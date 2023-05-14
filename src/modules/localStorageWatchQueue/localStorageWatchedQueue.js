import {
  setStorage,
  delFromStorage,
  getStorage,
} from '../localStorage/localStorage';
import { refs } from '../refs';
import { toggleWatchedBtn } from './toggleButton';
import renderMoviesList from '../html-render';
import { saveFireStore } from '../firebaseAPI/firebase';

export function handleWatchedClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = button.dataset.original_title;
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = button.dataset.genre_ids;
  const genreIds = genreIdsString
    ? genreIdsString.split(' ').map(id => parseInt(id))
    : [12];
  const releaseDate = button.dataset.release_date;
  const name = button.dataset.name;
  const title = button.dataset.title;
  const filmInfo = {
    id: trailerId,
    name,
    title,
    original_title: originalTitle,
    poster_path: posterPath,
    genre_ids: genreIds,
    release_date: releaseDate,
  };

  if (button.classList.contains('add-watched')) {
    setStorage(refs.WATCHED, filmInfo);
    toggleWatchedBtn();
    renderMoviesList(getStorage(refs.WATCHED));
    return;
  }
  delFromStorage(refs.WATCHED, trailerId);
  toggleWatchedBtn();
  renderMoviesList(getStorage(refs.WATCHED));
}

export function handleQueueClick(event) {
  const button = event.target;
  const trailerId = button.dataset.id;
  const originalTitle = button.dataset.original_title;
  const fullPosterPath = document
    .getElementById('film-modal-image')
    .getAttribute('src');
  const posterPath = fullPosterPath.slice(fullPosterPath.lastIndexOf('/') + 0);
  const genreIdsString = button.dataset.genre_ids;
  const genreIds = genreIdsString
    ? genreIdsString.split(' ').map(id => parseInt(id))
    : [12];
  const releaseDate = button.dataset.release_date;
  const name = button.dataset.name;
  const title = button.dataset.title;
  const filmInfo = {
    id: trailerId,
    name,
    title,
    original_title: originalTitle,
    poster_path: posterPath,
    genre_ids: genreIds,
    release_date: releaseDate,
  };

  if (button.classList.contains('add-queue')) {
    setStorage(refs.QUEUE, filmInfo);
    toggleWatchedBtn();
    renderMoviesList(getStorage(refs.QUEUE));
    return;
  }
  delFromStorage(refs.QUEUE, trailerId);
  toggleWatchedBtn();
  renderMoviesList(getStorage(refs.QUEUE));
}
