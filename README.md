# google-docs-addon-svelte-template
A template repository to develop a Google Docs add-on with Svelte.

Live demo at https://docs.google.com/document/d/1Jbzl5iYXKAqpRBLAtapIt_U2SMhWpHnnSiVw4sRUrBk

## Getting Started

1. Log in and authenticate with your Google account:
   ```
   npm run clasp:login
   ```
1. Create a new _standalone_ project:
   ```
   npm run clasp:create
   ```
1. Deploy the project:
   ```
   npm run deploy
   ```
1. Open the project:
   ```
   npm run clasp:open
   ```

## Sidebar development

Navigate to the `sidebar` folder and develop & test the application as you would any regular Svelte application, i.e. `npm run dev`.