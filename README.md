# Registration Form

This project is created through creat-react-app. The solution is based on React/Redux, written in ES6.

## Setup

> Node v8.9+ and npm 5.5+ must be installed on you machine first.

Locate at the project root, run below commands:

```
yarn
cd client
yarn
cd ..
yarn start
```

## Dependencies

* `React` - view
* `Redux` - state management
* `create-react-app` - build tool
* `immutable` - make state immutable
* `redux-observable` - handle side-effects
* `redux-forms` - form components
* `react-bootstrap` layout and components
* `jest` `enzyme` `nock` - unit test library and utils

## Structure

All source files are located inside the `src` folder. Unit test files are end up with a `.test.js` suffix.

```
  src/
    bootstrap/    -- app config
    components/   
      App/
      Field/
      Register/
    modules/      -- rootReducer, rootEpic
    services/     -- common services
    index.js      -- entry file
  package.json
```

## Available scripts

>All these scripts should be run under **client** folder

`yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

`yarn test`

Launches the test runner in the interactive watch mode. Run unit tests.

`yarn build`

Builds the app for production to the build folder.
