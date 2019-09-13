import m from "mithril";
var Splash = require("./Splash");
var Logo = require("./Logo");
var Audio = require("./Audio");
var Video = require("./Video");
var Contact = require("./Contact");
var Footer = require("./Footer");
var Calendar = require("./Calendar");

var App = {
  view: function(vnode) {
    return [
      m(Logo),
      m(Audio),
      m(Splash),
      m(Video),
      m(Contact),
      m(Calendar),
      m(Footer),
    ]
  }
};


m.route(document.body, "/", { "/": App } );
