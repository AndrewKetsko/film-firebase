import {
  setStorage,
  delFromStorage,
  getStorage,
} from '../localStorage/localStorage';
import { refs } from '../refs';
import { toggleWatchedBtn } from './toggleButton';
import renderMoviesList from '../html-render';

const renderLibrary = () => {
  if (
    !refs.buttonRefHome.classList.contains('header-nav--active') &&
    refs.buttonRefWatched.classList.contains('header-button__library--active')
  ) {
    renderMoviesList(getStorage(refs.WATCHED));
  }
  if (
    !refs.buttonRefHome.classList.contains('header-nav--active') &&
    refs.buttonRefQueue.classList.contains('header-button__library--active')
  ) {
    renderMoviesList(getStorage(refs.QUEUE));
  }
};

const getFilmInfo = button => {
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
  return {
    id: trailerId,
    name,
    title,
    original_title: originalTitle,
    poster_path: posterPath,
    genre_ids: genreIds,
    release_date: releaseDate,
  };
};

export function handleWatchedClick(event) {
  const button = event.target;
  const filmInfo = getFilmInfo(button);
  if (button.classList.contains('add-watched')) {
    setStorage(refs.WATCHED, filmInfo);
    toggleWatchedBtn();
  } else {
    delFromStorage(refs.WATCHED, filmInfo.id);
    toggleWatchedBtn();
  }
  renderLibrary();
}

export function handleQueueClick(event) {
  const button = event.target;
  const filmInfo = getFilmInfo(button);
  if (button.classList.contains('add-queue')) {
    setStorage(refs.QUEUE, filmInfo);
    toggleWatchedBtn();
  } else {
    delFromStorage(refs.QUEUE, filmInfo.id);
    toggleWatchedBtn();
  }
  renderLibrary();
}
