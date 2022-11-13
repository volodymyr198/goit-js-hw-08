import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

onPlayUserTime();

player.on('timeupdate', throttle(onAddStorage, 1000));
function onAddStorage(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

function onPlayUserTime() {
  const timeVideo = localStorage.getItem('videoplayer-current-time');

  if (timeVideo) {
    player.setCurrentTime(timeVideo);
  }
}
