# Mith
Single Page Application architecture, written with [Mithriljs](mithriljs.org)

> It is a lovely language, but it takes a very long time to say anything in it...
>
> ~ Treebeard, _The Two Towers_

### Usage
After `git clone`:

- ##### Install:

  `npm i`

- ##### Dev

  `npm run dev`

   This builds the development server files (with hot reloading!) and triggers a rebuild whenever files are changed. Files are saved to `/dist` directory.

   `python3 api.py`

   Runs a small (but powerful) web server with Uvicorn and FastAPI. By default, serves `/dist` files as static content (as `/`), serves other media at `/images`, and includes some basic API functionality to the front-end for dynamic media loading.

- ##### Production

  `npm run build`

  Builds all production files.


### Architecture
Mithriljs is a self-contained MVC framework, designed to be small, fast, and easy to use. The entire minified library is less than 10kb, and DOM manipulations happen twice as fast as comparable libraries (React, Angular, Vue, etc).

The application starts with `index.html`, which simply loads `index.js` (written as ES6 JavaScript), which loads all modules and dependencies. All components are imported here and built into the final structure. This implementation is structured as follows:

```javascript
var App = {
  view: function(vnode) {
    return [
    // components go here, in order
    ]
  }
}

m.route(document.body, "/", { "/": App } );
```

In this case, requests to `/` return several components on a single page:
- ##### Logo

  Animated logo, fixed at top of page

- ##### Audio

  Audio player with reactive playlist, fixed to top of page

- ##### Splash

  Full page splash, with fullscreen background an text blurb in a container

- ##### Videos

  Gallery of videos

- ##### Photos

  Gallery of photos

- ##### Bios

  Interactive bios list

- ##### Calendar

  List of upcoming events, fetched from server via Google Calendars

- ##### Map

  Google Map iframe to next upcoming event

- ##### Timer

  Countdown timer to next upcoming event

- ##### Contact

  Contact form to send messages. Sends via API, via email server.

- ##### Footer

  Bottom of page

Each component can be built, modified, and rendered independently of the others. All namespaces are isolated to their respective components, which can be rearranged and reused in any configuration.
