import m from "mithril";
var Splash = require("./Splash")


m.route(document.body, "/", {
  "/":{
    render: function() {
      return m(Splash, {
        style: {
          width: "100%"
        },
        src:'images/elsuit.jpg'
      })
    }
  }
}
);
