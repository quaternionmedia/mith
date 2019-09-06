import m from "mithril";
var Splash = require("./Splash");
var Logo = require("./Logo");

m.route(document.body, "/", { "/": Logo } );
