# "Week Number" for Fitbit 
[![CircleCI](https://circleci.com/gh/IanSavchenko/fitbit-week-number.svg?style=svg)](https://circleci.com/gh/IanSavchenko/fitbit-week-number)

Small (but yet powerful!) application to show current and past/upcoming week number. 

![Application icon](/resources/icon.png "Application icon")

Install the app on your Fitbit Ionic or Fitbit Versa from [Fitbit Gallery](https://gam.fitbit.com/gallery/app/d33414a8-f309-4438-aeee-d7dbc749420f) (open the link on your phone).

## How it looks

![Application GIF](/screenshots/animated.gif) 

## Development info

Run `npm install` to install dependencies. On Linux you may also need to [install](https://github.com/atom/node-keytar#on-linux) native deps for `keytar` before that.

Supported commands: 

`npm run build`

`npm run lint`

`npm run test`

To deploy and debug the app on a device or simulator, run `npm run debug` and follow hints of the Fitbit CLI.

## Links

+ Week calculation logic inspired by [EpochConverter](https://www.epochconverter.com/weeknumbers).
+ Fitbit OS development: [Fitbit SDK Guides](https://dev.fitbit.com/build/guides/),
[Fitbit SDK Examples](https://dev.fitbit.com/build/tutorials/examples/),
[Fitbit SDK Forum](https://community.fitbit.com/t5/SDK-Development/bd-p/sdk).
+ GIF-screenshots made with awesome utility [ScreenToGif](https://www.screentogif.com/).

License: [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.txt)

Like it? Dislike it? [Let me know](https://twitter.com/IanSavchenko)!