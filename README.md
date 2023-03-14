## Setup

In the project directory, you can run:

### `npm install`
This command will install all the node modules required for the app

### `npm install react-bootstrap`
This command will install all the modules required for working of Bootstrap with react

### `npm install @mui/material`
This command will install all the modules required for working of Material UI with react

### `npm install react-redux`
This command will install all the modules required to use the redux library with react

### `npm install @reduxjs/toolkit`
This command will install all the modules which will make it easier to use redux with react

## Run Code
### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Optional npm scripts
### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Observations

Task 1:
Code works as expected, when the API (https://jsonplaceholder.typicode.com/users) is fetched i.e on a GET API call a list of 10 objects is received. Although on further analysis of this API using POSTMAN, it was observed that this API does not support POST requests. As a solution an additional feature to add users locally was added at the top of the webpage in form of a modal popup.

Task 2:
Fields such as ID, name, username and email were rendered in a tabular from via the API response. Additional functionality to delete a data or to read more about an existing data was added in the table. A search functionality capable of searching on the basis of any field present in the user data is implemented, all present data are displayed in case of no search query. As the data can be increased to any extent it might become harder to keep a track of the newly added data, hence a pagination is included in the table through which users can directly navigate to a required entry.

Task 3:
Modal pop up to display address, phone, website is implemented, the modal has a close button as well as a [x] button to close the popup, popup can also be closed by clicking outside the popup or ESC button. Many times users need the address or contact details for further use, it becomes difficult to copy this information from a popup especially on a mobile device, a feature of copying displayed text to user's clipboard is added in the popup for convenience.
