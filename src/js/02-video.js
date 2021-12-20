import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
var iframe = document.getElementById('vimeo-player');
var player = new Player(iframe);
const key = 'videoplayer-current-time';
const existingCurrentTime = localStorage.getItem(key);
if (existingCurrentTime) {
player.setCurrentTime(existingCurrentTime);}
const onTimeUpdate = ({ seconds }) => {
localStorage.setItem(key, seconds);
console.log(seconds);};
const throtteledOnTimeUpdate = throttle(onTimeUpdate, 1000);
player.on('timeupdate', throtteledOnTimeUpdate);
