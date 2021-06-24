# Heroku Dyno Manager

This app will provide a way to restart select heroku dynos

# Project setup

## Install Android Studio (TODO)
1. Install Android Studio
1. Device Manager
1. Create a device

## Install tools
1. Install node via nvm [link](https://github.com/nvm-sh/nvm)
1. Install yarn [link](https://classic.yarnpkg.com/en/docs/install/)
1. Install dependencies by running `yarn install` in the root directory

## Running the application
1. Build the app by running `npx react-native run-android`
1. Run the app server by running `npx react-native start`

### Debug steps
* If `react-native run-android` hangs on `app:installDebug` run `adb kill-server && adb start-server`

## Run application on device

1. Get your phone working by follow instructions [here](https://reactnative.dev/docs/running-on-device)
1. Determine your device ID by runing `adb devices`
1. Using that device name, run `npx react-native run-android --device=<device-id>

# TODO

* [ ] Add ability to restart a single dyno based on hard coded app and credentials
* [ ] Add ability to set app name
* [ ] Add ability to refresh dyno configuration via API
* [ ] Add OAuth for accounts
* [ ] Add ability to pick apps based on authenticated user
