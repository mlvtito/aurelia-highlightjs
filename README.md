# aurelia-hightlightjs

This is an [Aurelia](http://aurelia.io/) custom element for [highlight.js](https://highlightjs.org/)

## Documentation

If you are looking for documentation on how to use this custom elment, go to 
http://aurelia-highlightjs.r-w-x.net/

## Developers

First you need to bundle the lib :

``npm run bundle``

Then copy the bundled lib to demo site :

``npm run site-deploy``

Go to site folder :

``cd ./site``

Start development bundle watcher :

``npm run bundle:watch``

And finally start server :

``npm start``

Finally don't forget to unbundle before commiting :

``npm run unbundle``
