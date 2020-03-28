# google-docs-addon-svelte-template
A template repository to develop a Google Docs add-on with Svelte.

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

## Test the add-on

Once you followed the steps above and have the Apps Script project open, the following steps explain how to test the add-on:

1. Click **Run**, then **Test as add-on...**
1. Click **Select Doc** and choose a document you want to use for testing.
1. Click **Save**
1. In the *Execute Saved Test" section that appeared at the top, select your document and click **Test**.
1. With the document now open, navigate to **Add-ons** | **Google-docs-addon-svelte-template** | **My Add-on**

This opens the Svelte sidebar.

## Sidebar development

Navigate to the `sidebar` folder and develop & test the application as you would any regular Svelte application, i.e. `npm run dev`.