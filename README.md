# Wordless Searchengine

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

- Configure `src/environments/common.ts`

### Deploy

- Build: `ng build --prod --base-href https://atb00ker.github.io/giveaway-app/`
- Deploy: `ngh --dir dist/giveaway/`
