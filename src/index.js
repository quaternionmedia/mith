import m from "mithril";
var Splash = require("./Splash")


m.route(document.body, "/", {
  "/":{
    render: function() {
      return m(Splash, {
        src:'images/elsuit.jpg'
      })
    }
  }
}
);
