# react-native-hello-world 
A test project to see the differences between the "exp init <app-name>" command and the "create-react-native-app <app-name>" command.

## Run down
The CRNA app init creates contains a set of devDependencies which is not included in exp init.
These are: 
* "react-native-scripts"
* "jest-expo"
* "react-test-renderer"

Together with react-native-scripts a set of scripts is installed:
* start: "react-native-scripts start",
* eject: "react-native-scripts eject",
* android: "react-native-scripts android",
* ios: "react-native-scripts ios",
* test: "node node_modules/jest/bin/jest.js"

The Expo app init adds a set of descriptive attributes and a set of settings in the app.json file:
```
"expo": {
    "name": "hello-world",
    "description": "This project is really great.",
    "slug": "hello-world",
    "privacy": "public",
    "sdkVersion": "25.0.0",
    "platforms": ["ios", "android"],
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    }
  }
```
The Expo version of the app.json file automatically setups up some settings for when we are developing apps which are nice to have at the start of a project.
In addition there are references to 2 .png files in an asset folder. This asset folder is only added with the expo init.
Something to note is that by setting "expo":"splash" a nice splash screen is added during development which is kinda nice.

In contrast, CRNA only sets up sdkVersion with no splash or assets folder to boot:
```
"expo": {
    "sdkVersion": "25.0.0"
  }
```
## React-native-scripts discussion
The package react-native-scripts use expo differently than the expo native commands.
The major differences are local vs hosted project sharing.

When using rns, the project is made available over the local network. 
This means a phone which is used for testing needs to be on the same local as the computer.
I have found this to be problematic as any virtual machine can make expo think its on a different network than it actually is.

The alternative is to use expo command. This command uses a hosted server to distribute the sourcecode.
It seems to be about as fast as the local distribution however one would assume that given a sizable code base the local distribution should be faster.
One thing to keep in mind when using expo native commands is the need for an account. Though free this migth be a turn off for some.
