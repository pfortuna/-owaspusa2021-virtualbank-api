# OWASP AppSec USA 2021 talk - Bots have gone phishing, but all they get is the boot
## Configuration
### Setup
Add the following to your /etc/hosts
```
127.0.0.1    virtualbank.com api.virtualbank.com
```

### Build
`npm i`

### Config
You can enable or disable sending OTT with every login by setting to true `config.ottNeeded` in `index.js`.
The API uses JWT signed JWT tokens.
Secrets for OTT and JWT are stored in `config.json`.

## Running
To run, type `npm run watch`
The API process will be started in port `4000`
