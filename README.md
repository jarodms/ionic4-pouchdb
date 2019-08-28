# Overview
This is a basic example to show PouchDB usage with Angular and Ionic. 

But...
This version will run after you have ran ```npm install```

If you were to start from scratch, there are several steps that would need to be configured. This example takes care of those:
* Adding ```pouchdb``` and ```@types/pouchdb``` to the project
* Adding ```allowSyntheticDefaultImports``` to tsconfig.json
* Adding ```(window as any).global = window;``` to polyfills.ts; This was a weird __gotcha__  that caused database issues. (Read https://github.com/angular/angular-cli/issues/9827#issuecomment-386154063 for more info)


#Uses
* Angular 8
* Ionic 4.7.x
* PouchDB 7.x


## Getting started with this repo
  1. Clone this repo
  2. ```npm i```
  3. ```ionic serve```


### Tab 1
* Uses a DB named ```my-notes```
* Enter a note in the field and press Enter

### Tab 2
* Uses a DB named ```kangaroo```
* Adds a document using the interface ```Entry``` as defined in tab2.page.ts


