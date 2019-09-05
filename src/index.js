import m from "mithril";
var Splash = require("./Splash")


m.route(document.body, "/", {
  "/":{
    render: function() {
      return m(Splash, {
        style: {
          backgroundImage: 'url("images/elsuit.jpg")'
        }
      })
    }
  }
}
);
