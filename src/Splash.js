//import m from "mithril";
var m = require("mithril");

module.exports = {
  view: function(vnode) {
    return m('img[class=splash]', vnode.attrs)
  }
}
