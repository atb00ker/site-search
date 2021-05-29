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

### Images

#### YouTube Images capture

1. Go to channel Page
2. Set screen size to `705x650` from console.
3. Find `id="channel-header"` and set following properties to element:

```css
    padding: 80px;
    margin: 160px;
    padding-right: 20px;
    padding-left: 60px;

```

4. Capture the element from Firefox screenshot capture tool.

#### Compress Images

1. Install: `sudo apt-get install jpegoptim imagemagick`
2. Convert to jpg: `convert "<filename>.<format>" "<filename>.jpg"`
3. Compress: `jpegoptim --size=<estimate-goal-size>k *`

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
