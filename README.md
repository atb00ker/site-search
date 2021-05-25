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
npm install -g angular-cli-ghpages
```

- Enter your sites / categories: `src/assets/data/`

### Deploy

- Build: `ng build --prod --base-href https://atb00ker.github.io/site-search/`
- Deploy: `ngh --dir dist/site-search/`
