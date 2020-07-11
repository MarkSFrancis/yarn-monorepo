# Yarn Monorepo

This repository demonstrates how to create a monorepo using [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), with multi-platform typescript (browser and NodeJS), sharing code between them where appropriate.

This project also makes use of [lerna](https://lerna.js.org/) to help manage the multi-project layout, but lerna is configured to use yarn under the hood, so it only provides convenience methods. 

## Project Layout

```
.
├── apps
│   ├── sample-react
│   |   ├── package.json
│   ├── sample-vue
│   |   ├── package.json
│   ├── sample-node
│   |   ├── package.json
│   ├── tsconfig.{platform}.json
├── packages
│   ├── log
│   |   ├── package.json
├── ... various configuration files (such as tsconfig.json)
├── package.json
```

## Getting Started

### Prerequisites

* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/getting-started/install)
  ```
  npm install -g yarn
  ```
  
### Running all apps
```sh
git clone https://github.com/MarkSFrancis/yarn-monorepo
cd ./yarn-monorepo
yarn
yarn start
```
