# Yarn Monorepo

This repository demonstrates how to create a monorepo using [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), with multi-platform typescript (browser and NodeJS), sharing code between them where appropriate. 

## Project Layout

```sh
.
├── apps
│   ├── todo-react
│   |   ├── package.json
│   ├── todo-vue
│   |   ├── package.json
│   ├── todo-node
│   |   ├── package.json
│   ├── tsconfig.{platform}.json
├── packages
│   ├── log
│   |   ├── package.json
├── ... various configuration files (such as tsconfig.json)
├── package.json
```
