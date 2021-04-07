# Odjazdy MPK Rzeszów

I didn't like the official [web thing](http://einfo.erzeszow.pl/) for bus
departures in my city, so I wrote my own. This one is very minimal, as it does
not support:

-   ~~Disambiguating between two stops with the same name (hint: compare the
    parity of the number after the name)~~ implemented,
-   Showing schedules (it only shows real-time departures),
-   Showing the full route.

I don't plan on implementing these features myself. Pull requests are always
welcome, though.

## Building

The code uses ECMAScript 2015 modules bundled by `webpack`. ECMAScript 2015 is
compiled to plain-old ES5 via `babel`. Unit tests use `tape`. Code style issues
are checked for by `eslint`. Stylesheets are preprocessed by Sass and
Autoprefixer.

To start a development server, use:

```
npm run start
```

To build a distributable version:

```
npm run build
```

To check for coding style issues:

```
npm run lint
```
