# TINDEV
Project developed using nodejs, reactjs and react-native. This project is similar to the famous dating app tinder, however, in this one the user look for developers.

## Requirements
To open and run this project you will need:
* [git](https://git-scm.com/download/win) *this link is for windows*
* [nodejs](https://nodejs.org/)
* [yarn](https://classic.yarnpkg.com/)

In order to run and open react-native projects you will need to setup the enviroment and install some dependencies. You might follow their very well explained getting started tutorial in the following link: 
* [getting started with react-native](https://reactnative.dev/docs/0.61/getting-started)

## Getting Started

Create or choose a folder where you gonna clone the project
Clone the repository with the command `git clone https://github.com/djanlm/SemanaOmniStack8_TINDEV.git`

#### Backend
To run the backend, go to the backend folder and run the command `yarn dev`. It will run on port 3333.
In this project we used mongoDB to store our data. We created a server and a database on (mongoDB atlas)[https://account.mongodb.com/account/login]. 
If you cannot connect to the database you might have to create and configure your own.

#### Web
To run the frontend part developed for web using reactJS, go to the frontend folder and run `yarn start`

#### App 
To be able to run the app for cellphone, you'll need an emulator. I'd recommend android studio emulator. As mentioned before you might follow the react-native [getting started tutorial](https://reactnative.dev/docs/0.61/getting-started).
Once you have your emulator running, go to tindev folder and run the command `npx react-native run-android`

If you get the following error:
You should try the following solution: [https://www.youtube.com/watch?v=8FEm1SjL1Vg](https://www.youtube.com/watch?v=8FEm1SjL1Vg)

If the solution showed in the video doesn't work try the following steps:

1. create directory  android/app/src/main/assets
2. edit file the project  node_modules\metro-config\src\defaults\blacklist.js

Replace : 

```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

with : 
```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

3. Finally
run following command from project root directory

`react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res`


