# Mobilewright Mobile Automation (TypeScript)

![Mobilewright Android Tests](https://github.com/AliHamzaGilani/mobilewright-mobile-automation/actions/workflows/mobilewright.yml/badge.svg)

Android test framework for the public [Sauce Labs sample app](https://github.com/saucelabs/sample-app-mobile), built with [**Mobilewright**](https://mobilewright.dev), a Playwright-style framework for iOS and Android, and **TypeScript**.

## Why Mobilewright

Mobilewright brings the Playwright developer experience to native apps: the same `getByRole` / `getByText` locators, auto-waiting actions, `expect` assertions, fixtures and projects. It needs no Appium server, and its accessibility-tree-first design works well with AI agents through Mobile MCP.

## Highlights

- **Screen Object Model** with custom fixtures (`loginScreen`, `productsScreen`) injected into every test
- Semantic locators (role + accessible name) instead of XPath
- **Data-driven** negative login tests generated from one table
- **Tag-based suites**: `@smoke` and `@regression`
- **GitHub Actions** boots an Android emulator and runs the suite: smoke on push and PR, full regression nightly

## Project structure

```
screens/        BaseScreen, LoginScreen, ProductsScreen
fixtures/       Custom test fixtures that inject screen objects
test-data/      Users
tests/          login.test.ts
mobilewright.config.ts
```

## Run it locally

Requires Node.js 18+, the Android SDK and a booted emulator.

```bash
npm install
npm run app:download     # saves apps/sauce-labs-sample.apk
npm run doctor           # checks the environment
npm test                 # all tests
npm run test:smoke
npm run inspect          # explore the live accessibility tree to find locators
```

## Test coverage

| Area | Scenarios |
| --- | --- |
| Login | Valid login, locked-out user, wrong password, empty username |
