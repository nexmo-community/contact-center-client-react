![Nexmo][logo]

# Build Your Own Contact Center (Node.js version)

This is one of the components required for Nexmo's ["Contact Center Use Case"](https://developer.nexmo.com/client-sdk/in-app-voice/contact-center-overview).

To get started, you can use this app to [make](https://developer.nexmo.com/client-sdk/in-app-voice/getting-started/make-phone-call/javascript) and [receive](https://developer.nexmo.com/client-sdk/in-app-voice/getting-started/receive-phone-call/javascript) calls from the web.

**Table of Contents**

- [Getting Started](#getting-started)
  - [Start Locally](#start-locally)
    - [Nexmo Account](#nexmo-account)
    - [Environment File](#environment-file)
    - [Start it!](#start-it)
  - [Deploy with Heroku](#deploy-with-heroku)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Start Locally

#### Nexmo Account

To be able to use this application you'll need to [Sign up for a Nexmo account][signup].

#### Environment File

Create an environment file by copying the example file, `.example.env` to `.env`, and editing it with your own configuration. Omitting environment variables will cause the application to use default values. As Nexmo needs to be able to access the server to provide NCCOs, default values will prevent you from making calls.

You'll need the `SERVER_URL` of the contact center server you wish to use and the `SERVER_KEY` from the SDK Integration page of your contact center server.

```
SERVER_URL=http://url-of-my-server
SERVER_KEY=key-generated-by-contact-center-server-here
```

#### Start it!

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