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
        Player.player.on('ended', Player.nextSong)
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
    if (--Player.index == -1) {
      Player.index = Player.playlist.length - 1;
    }
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
    return m('div[style=position:fixed;width:75vw]',
      [m('audio#player', {
        controls: true,
        src: Player.song,
        'data-plyr-config': '{"title": "song title"}',
        style: {
          position: 'fixed'
        }
      }),
      m('.playlist', Player.playlist.map(function(song) {
        return m('.playlistItem', song)
      })),
      m('span[style=display:flex; width:75vw]', [
        m('button[class=plyr__controls]', {onclick: Player.prevSong}, '<<'),
        m('button[class=plyr__controls]', {onclick: Player.nextSong}, '>>'),
      ],),
    ], )
  }
}
