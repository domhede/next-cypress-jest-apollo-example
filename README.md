# Gravity Frontend

This is a [Next.js](https://nextjs.org/) project.

## Getting Started

First, run the development server:

```bash
# install node locally
brew install nvm
nvm install

npm install -g yarn

# install deps
yarn install

yarn dev
```

### Code Formatting

To format your code before pushing, run:

```
yarn run format
```

### Testing

To run unit and integration tests with Jest

```
yarn test
```

To run end-to-end browser tests with Cypress

```bash

# start the dev server (run in seprate terminal)
yarn dev:e2e

# start Cypress
yarn cypress:open

```

To view a combined coverage report run

```
yarn test-coverage
```

### Ops

// TODO
