var m = require("mithril");
var classNames = require('classnames');


var Bkg = {
  //let bkg = '';
  bkg: null,
  getBkg: function() {
    m.request({method: "GET", url: "/api/cover"})
    .then(function(r) {
      Bkg.bkg = `url("${r}")`;
      console.log('bkg: ', bkg);
    });
  }
}

var Splash = {
  oninit: Bkg.getBkg,
  view: function(vnode) {
    return m('section', {
      class: 'splash',
      style: {
        backgroundImage: Bkg.bkg
      },
    },
    [m('[style=height:30vh]'),
    m('.container .head [style=height:20vh]', 'splash!'),
    m('[style=height:50vh]')
    ])
  },
};

module.exports = Splash
