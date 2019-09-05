//import m from "mithril";
var m = require("mithril");
var classNames = require('classnames');

module.exports = {
  view: function(vnode) {
    return m('section[class=splash]', vnode.attrs,
      [m('[style=height:30vh]'),
      m('.container .head [style=height:20vh]', 'splash!'),
      m('[style=height:50vh]')
    ])
  }
}
