import m from "mithril";
import "animate.css";

module.exports = {
  view: function(vnode) {
    return m('h1', {class: 'animated fadeInLeft'}, 'Harpo!')
  }
}
