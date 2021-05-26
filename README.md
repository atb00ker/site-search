# Site Search

Enables sharing of useful sites.

### Requirements

- Node 11+
- npm

### Setup

- Install requirements:
```bash
npm install --dev
npm install -g @angular/cli
```

- Enter your sites / categories: `src/assets/data/`

### Host

If you want to host your own version, follow these steps:

1. Create a fork of the code.
2. Edit JSON in `src/assets/data/`.
3. Edit application configurations in `src/environments/common.ts`
3. Install node.js & npm.
5. Follow the steps below to deploy.

### Deploy

- Setup                          : `npm install -g angular-cli-ghpages`
- Build (Change URL as per fork) : `ng build --prod --base-href https://atb00ker.github.io/site-search/`
- Deploy                         : `ngh --dir dist/site-search/`
