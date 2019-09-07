import m from "mithril";
import Plyr from "plyr";

var Player = {
  player: null,
  song: null,
  playlist: ['images/1.mp3', 'images/2.mp3', 'images/3.mp3', 'images/4.mp3', 'images/5.mp3', 'images/6.mp3'],
  index: null,
  playlistVisible: false,
  togglePlaylist: function() {
    Player.playlistVisible = !Player.playlistVisible;
  },
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
    console.log('next ', Player.index, Player.player.source, s)
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
  },
  changeSong: function(s) {
    Player.player.source = {
      type: 'audio',
    sources: [{
      src: s.target.textContent,
    }]};
    Player.index = Player.playlist.indexOf(s.target.textContent)
    Player.player.play();
    console.log('change song', s)
  }
  }

module.exports = {
  oncreate: Player.initPlayer,
  view: function(vnode) {
    return m('.audio[style=position:fixed;max-width:75vw]',
      [m('audio#player', {
        controls: true,
        src: Player.song,
        'data-plyr-config': '{"title": "song title"}',
        style: {
          position: 'fixed'
        }
      }),
      m('.playlist', {style:{
        display:Player.playlistVisible ? 'inline' : 'none'}
      }, Player.playlist.map(function(song) {
        return m(
          song == Player.playlist[Player.index] ? '.playlistItem[class=playing]' : '.playlistItem',
          {onclick: Player.changeSong},
          song)
      })),
      m('span[class=playlistControls][style=display:flex; width:75vw]', [
        m('button[class=plyr__controls]', {onclick: Player.prevSong}, '<<'),
        m('button[class=plyr__controls]', {onclick: Player.togglePlaylist}, 'playlist'),
        m('button[class=plyr__controls]', {onclick: Player.nextSong}, '>>'),
      ],),
    ], )
  }
}
