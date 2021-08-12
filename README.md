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



# What operating system did you use?

I ran the test using Android Studio

To run the test locally on a local machine 

npm install
npm i -g detox-cli
detox build -c android:emulator
detox test -c android:emulator

It ran well on the local machine and the test reports results were stored in ‘artifacts’.

**Running Tests on iOS and Android**

It should work with both mobile operating systems.  I tested using Android studio. 

**Swiping**

On the final test case to ‘open the dashboard’.  I had an issue with swiping the from left to right.  The syntax is correct but when I ran the test, it would not work – kept getting an error.  I commented those lines out because I wanted to show they were done and that I knew what I was supposed to do.   I did some reading, I checked some blogs, but I don’t know.  As I said grammatically speaking – it should have worked. 

**Docker**

What docker image am I using in this test?

We are using the react native docker image android version 4.0


How do I run this test in docker?

docker build . -t tester
docker run  -t tester
![image](https://user-images.githubusercontent.com/39129689/129210062-0755478f-1364-449d-b654-b5dabfb7f00f.png)















