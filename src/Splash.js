import m from "mithril";

var Bkg = {
  //let bkg = '';
  bkg: null,
  getBkg: function() {
    m.request({method: "GET", url: "/api/cover"})
    .then(function(r) {
      Bkg.bkg = `url("${r}")`;
      // console.log('splash photo: ', bkg);
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
    [m('[style=height:35vh]'),
    m('.container .highlightBox [style=height:15vh]', 'splash!'),
    m('[style=height:50vh]')
    ])
  },
};

module.exports = Splash
