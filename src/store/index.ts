import { writable } from 'svelte/store';

let showPlayingPage = writable(false);

export {
  showPlayingPage
}