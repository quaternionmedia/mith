import m from "mithril";
import Plyr from "plyr";

var Player = {
  player: null,
  song: null,
  playlist: ['images/1.mp3', 'images/2.mp3', 'images/3.mp3', 'images/4.mp3', 'images/5.mp3', 'images/6.mp3'],
  index: null,
  sources: [],
  initPlayer: function() {
        Player.player = new Plyr('#player');
        Player.index = 0;
        Player.player.source = {type:'audio', sources:
          [{src: Player.playlist[Player.index],  type: 'audio/mp3',}]};
        Player.player.on('ended', Player.changeSong)
        console.log('player ', Player.player.source)
  },
  nextSong: function(s) {
    if (++Player.index == Player.playlist.length) {
      Player.index = 0;
    }
    Player.player.source = {
      type: 'audio',
    sources: [{
      src: Player.playlist[Player.index],
    }]};
    Player.player.play();
    console.log('next ', Player.index, Player.player.source)
  },
  prevSong: function(s) {
    if (Player.index == 0) {
      Player.index = Player.playlist.length - 1;
    } else {Player.index--;}
    Player.player.source = {
      type: 'audio',
    sources: [{
      src: Player.playlist[Player.index],
    }]};
    Player.player.play();
    console.log('next ', Player.index, Player.player.source)
    }
  }



module.exports = {
  oncreate: Player.initPlayer,
  view: function(vnode) {
    return m('div[style=position:fixed]',
      [m('audio#player', {
        controls: true,
        src: Player.song,
        'data-plyr-config': '{"title": "song title"}',
        style: {
          position: 'fixed'
        }
      }),
      m('span[class=playlistButtons]', Player.playlist.map(function(song) {
        return m('', {})
      })),
      m('button[class=plyr__controls]', {onclick: Player.prevSong}, 'prev'),
      m('button[class=plyr__controls]', {onclick: Player.nextSong}, 'next'),
    ], )
  }
}


// var Amplitude = require("amplitudejs");
// var Player = {
//   list: {"songs": [
// 			{
// 				"name": "Song Name 1",
// 				"artist": "Artist Name",
// 				"album": "Album Name",
// 				"url": "/images/1.mp3",
// 				"cover_art_url": "/images/harpo-tech2.jpg"
// 			},
// 			{
// 				"name": "Song Name 2",
// 				"artist": "Artist Name",
// 				"album": "Album Name",
// 				"url": "/images/1.mp3",
// 				"cover_art_url": "/images/elsuit.jpg"
// 			},],},
//   initPlayer: function() {
//     Amplitude.init(Player.list);
//   }
// }
// module.exports = {
//   oncreate: Player.initPlayer,
//   view: function(vnode) {
//     return m('audio', Player)
//   }
// }
