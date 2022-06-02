# Playwright E2E tests
Tests are designed using https://playwright.dev/

## Instalation
1. Clone github repository.
2. Run npm install in the root of the project.
3. Run npx playwright install - to install all supported browsers
4. If running on Ubuntu run npx playwright install-deps to install all system dependancies

## Running tests
npx playwright test login.spec.ts --headed --workers 1  
npx playwright test cart.spec.ts --headed --workers 1

## Build in reporter
To run reported after test has ended run  
npx playwright test cart.spec.ts --headed --workers 1