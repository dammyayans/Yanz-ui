# Yanz-ui

## Monorepo UI for Frontend React Components

This monorepo project is designed to provide a comprehensive and efficient development environment for creating reusable UI components using React, Turbo, TypeScript, Changeset, NPM, Storybook, Tailwind CSS, and more. By adopting a monorepo structure, this project promotes code sharing, collaboration, and centralized management of UI components.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `ui-components`: a stub React component library
- `ui-library`: a stub React component library
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn dev
```

### Features
React: Build robust and interactive UI components using the popular JavaScript library React.
Turbo: Utilize Turbo, a performant React rendering engine, to optimize component rendering and enhance the overall user experience.
TypeScript: Develop components with strong static typing and improved tooling using TypeScript.
Changeset: Effortlessly manage versioning and publishing of components using Changeset, a tool for managing changelogs and releases.
NPM: Publish and share components easily through the NPM package registry.
Storybook: Visually showcase and document components using Storybook, a UI development environment with a live component explorer.
Tailwind CSS: Leverage the power of Tailwind CSS, a utility-first CSS framework, to rapidly style and customize components.
Getting Started
Follow the steps below to set up the development environment and start building UI components:

Clone this repository: git clone https://github.com/dammyayans/Yan-ui.git
Install project dependencies: yarn
Run the development server: yarn storybook
Open Storybook in your browser: http://localhost:6006
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

Fork the repository and create a new branch for your feature or bug fix.
Commit your changes with descriptive commit messages.
Submit a pull request to the main branch of this repository.
Ensure that your code passes all tests and linting checks.

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
