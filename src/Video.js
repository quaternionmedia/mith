import m from "mithril";
import "blueimp-gallery/css/blueimp-gallery.min.css"
import "blueimp-gallery/js/blueimp-gallery.min.js";

// var blueimp = require('blueimp-gallery');
console.log('loading blueimp', blueimp);

var Video = {
  current: null,
  videos: [{
    title: 'A YouYube video',
    href: 'https://www.youtube.com/watch?v=XANW5Ms2eXc',
    type: 'text/html',
    youtube: 'XANW5Ms2eXc',
    poster: 'https://img.youtube.com/vi/XANW5Ms2eXc/maxresdefault.jpg'
  },],
  gallery: null,
  options: {
    hidePageScrollbars: false,
  },
  initPlayer: function() {
    Video.gallery = blueimp.Gallery(Video.videos, Video.options);
    console.log('gallery ', Video.gallery);
  }
}

module.exports = {
  oncreate: Video.initPlayer,
  view: function(vnode) {
    return m('.container #video', [
      m('.blueimp-gallery .blueimp-gallery-carousel .blueimp-gallery-controls .blueimp-gallery-display .blueimp-gallery-playing .container #blueimp-gallery[]', [
        m('.slides'),
        m('h3[class=title]'),
        m('a[class=prev]'),
        m('a[class=next]'),
        m('a[class=play-pause]'),
        m('ol[class=indicator]')
    ])])
  }
}
