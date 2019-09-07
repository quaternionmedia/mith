import m from "mithril";
var Splash = require("./Splash");
var Logo = require("./Logo");
var Audio = require("./Audio");

var App = {
  view: function(vnode) {
    return [
      m(Logo),
      m(Audio),
      m(Splash),
    ]
  }
};


m.route(document.body, "/", { "/": App } );
