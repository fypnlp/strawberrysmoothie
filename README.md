# Installing

Global pre-requisites:

-   Detox: `npm install -g detox-cli`
-   `yarn` or `npm`

# Preparing

Run `yarn` or `npm i`  
Run `npx pod-install`

# Running the app

Run `npx react-native run-ios` or `npx react-native run-android`

# Testing

Build the binary `detox build <configuration>`  
eg: `detox build --configuration android:emulator`

For Android, you may need to build the test build if this fails to build with the command above:

-   `cd ./android && ./gradlew assembleAndroidTest`

Running the js tests `detox test <configuration> <options>`

-   eg: `detox test --configuration ios --loglevel verbose`

Running the Cucumber features `npm run e2e:<configuration>`

-   iOS: `npm run e2e:ios`

-   Android emulator: `npm run e2e:android:emulator` (change your `adbName` first)

-   Android phone: `npm run e2e:android:device` (change your `avdName` first)  
    You may need to `adb reverse tcp:8081 tcp:8081` for your Android phone to connect to the debugger

# Where's everything?

-   Views: `./App/Containers`

-   Components: `./App/Components`

-   Cucumber Features: `./e2e/features/*.feature`

-   Detox JS tests: `./e2e/Tests/*.js`

-   Step Definitions: `./e2e/features/step_definitions/*.js`

-   Detox configurations: `./.detoxrc.json`
