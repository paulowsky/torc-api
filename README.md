# torc-api

Torc assessment for cypress api automated tests.

## Requirements

- [Node.js LTS](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [VSCode](https://code.visualstudio.com)

### Recommended VSCode extensions

- `VisualStudioExptTeam.vscodeintellicode`
- `EditorConfig.EditorConfig`
- `dbaeumer.vscode-eslint`
- `esbenp.prettier-vscode`
- `christian-kohler.path-intellisense`
- `aaron-bond.better-comments`
- `PKief.material-icon-theme`
- `oderwat.indent-rainbow`
- `Gruntfuggly.todo-tree`
- `natqe.reload`

## Configuration

You need to specify the TARGET variable in .env file or environment variable.

We have this environments configured:

- test

## Commands

### Install dependencies

```sh
yarn install
```

### Run cypress open

```bash
yarn cy:open
```

### Run all the tests

```bash
yarn test
```

### Run tests by tag

```bash
yarn test --env grepTags=@tag
```

### Reports

Generate allure report:

```sh
yarn allure:generate
```

Open generated allure report:

```sh
yarn allure:open
```

## CI

Project is able to run in github actions, just check .github folder.
