# Hudl QA Analyst Project

This repository contains a test suite for the login functionality of the Hudl website, using Cypress and JavaScript as the testing framework. The test suite is designed to validate the new login implementation before it is deployed to production. This README will guide you through setting up the test environment and running the tests.

## Table of Content

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the repository](#clone-the-repository)
  - [Set up the project](#set-up-the-project)
- [Run the E2E tests](#run-the-e2e-tests)
  - [Cypress Test Runner](#cypress-test-runner)
  - [Command Line](#command-line)
- [Further Improvements](#further-improvements)

## Prerequisites

- Git installed on your machine. You can download it from the [official Git website](https://git-scm.com/downloads).
- Node.js (version 12 or higher) installed on your machine. You can download it from the [official Node.js website](https://nodejs.org/en/download).

## Getting Started

### Clone the repository

1. Open your terminal and navigate to the directory where you want to clone the repository.
2. Run the following command to clone the repository:

   `git clone https://github.com/Azwad98/HudlProject.git`

3. Navigate to the cloned project directory:

   `cd HudlProject`

### Set up the project

1. Install the project dependencies by running the following command:

   `npm install`

   This command will install all the dependencies listed in the package.json file, including Cypress.

## Run the E2E tests

You can run the end-to-end tests using either the Cypress Test Runner or the command line:

### Cypress Test Runner

Run the following command to open the Test Runner:

`npx cypress open`

1. A Cypress App Interface will pop up giving you the option to select either E2E or Component testing. Select E2E Testing
2. Select the browser of your choice and click on the Start E2E Testing button. This will open up the Cypress Test Runner
3. In the Test Runner, click on the test file you want to run (e.g., login_positive_spec.cy.js) to start the test in an interactive browser window.  
   To view all the test files as you're running the tests either press F on your keyboard or click on Specs on the top left part of your screen

### Command line

To run the tests in headless mode, use the following command:

`npx cypress run`

This command will run your tests in a headless browser, and you'll see the test results in your terminal.

## Further Improvements

- Enhance the test suite to support multiple browsers and platforms.
- Expand the test suite to cover more scenarios, such as edge cases
- Implement continuous integration to automatically run tests on every code push or pull request
