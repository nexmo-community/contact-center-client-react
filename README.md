![Nexmo][logo]

# Build Your Own Contact Center (React client)

This is one of the components required for Nexmo's ["Contact Center Use Case"](https://developer.nexmo.com/client-sdk/in-app-voice/contact-center-overview).

To get started, you can use this app to [make](https://developer.nexmo.com/client-sdk/in-app-voice/getting-started/make-phone-call/javascript) and [receive](https://developer.nexmo.com/client-sdk/in-app-voice/getting-started/receive-phone-call/javascript) calls from the web.

**Table of Contents**

- [Getting Started](#getting-started)
  - [Start Locally](#start-locally)
    - [Configure Server](#configure-server)
    - [Environment File](#environment-file)
    - [Start it!](#start-it)
  - [Deploy with Heroku](#deploy-with-heroku)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Start Locally

#### Configure Server

Configure a [server side application](https://github.com/nexmo-community/contact-center-server-node) for the contact center. Once you have followed the steps you'll have the `SERVER_URL` and the `SERVER_KEY` of the contact center server.

If you're running the node server locally, you'll likely be running it through ngrok so you can make and receive calls. So your `SERVER_URL` will look like `http://03abc21.ngrok.io`. Otherwise, if you're running it on Heroku, your `SERVER_URL` will look like `http://yourappname.herokuapp.com`.

Once the server is running, you can browse to the `SDK Integration` page and look for the *MOBILE_API_KEY* which will become your `SERVER_KEY`.

#### Environment File

Create an environment file by copying the example file, `.example.env` to `.env`, and editing it with your own configuration. Omitting environment variables will cause the application to use default values. As Nexmo needs to be able to access the server to provide NCCOs, default values will prevent you from making calls.

You'll need the `SERVER_URL` of the contact center server you wish to use and the `SERVER_KEY` from the SDK Integration page of your contact center server.

```
SERVER_URL=http://url-of-my-server
SERVER_KEY=key-generated-by-contact-center-server-here
```

#### Start it!

Before you start it for the first time, run this to install our dependencies.

```js
npm install --prefix ./client && npm install
```

Once installed, you can now run it locally.

```js
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Deploy with Heroku

This application is configured to deploy to Heroku. 

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Code of Conduct

In the interest of fostering an open and welcoming environment, we strive to make participation in our project and our community a harassment-free experience for everyone. Please check out our [Code of Conduct][coc] in full.

## Contributing 
We :heart: contributions from everyone! Check out the [Contributing Guidelines][contributing] for more information.

[![contributions welcome][contribadge]][issues]

## License

This project is subject to the [MIT License][license]

[logo]: nexmo.png "Nexmo"
[contribadge]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat "Contributions Welcome"

[signup]: https://dashboard.nexmo.com/sign-up?utm_source=DEV_REL&utm_medium=github&utm_campaign=lukeocodes

[coc]: CODE_OF_CONDUCT.md "Code of Conduct"
[contributing]: CONTRIBUTING.md "Contributing"
[license]: LICENSE "MIT License"

[issues]: ./../../issues "Issues"