# Orchestra

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Description

The orchestra website includes information on the orchestra and its members. Admin can add members to the orchestra.

## Development server

Clone the repository and open the project in a text editor. Create a file in the app folder called 'api-keys.ts'. Add this content to the file :
export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };

Go to [Firebase](https://firebase.google.com/) and log in or create an account. Then, make a new firebase project called "Orchestra". Click on the item that says "Add Firebase to Your WebApp". Replace the 'xxxx' above with the relevant Firebase credentials.

Import sample-members.json into your Firebase. Finally, navigate to Database > Rules and change the "read" and "write" rules to true (do not use quotes).

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known bugs

* Users can not yet be edited or deleted.
* Admin does not require sign-in.
