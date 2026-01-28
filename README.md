

# Contact Manager App

This is a simple React application for managing contacts. You can add, edit, delete, and search contacts. The app uses a mock backend (JSON Server) for storing contact data and demonstrates basic CRUD operations with a modern UI.

## About the Project

- Built with React and React Router for navigation
- Uses Axios for API requests
- Mock backend powered by JSON Server
- Clean and responsive interface

To run the project locally, install dependencies with `npm install`, start the mock backend with `npx json-server --watch server_api/db.json --port 3006`, and launch the app using `npm start`.


## How It Works

- The app fetches and manages contacts using API calls to a local JSON Server.
- React state is used to store and update the contact list in real time.
- You can add, edit, or delete contacts, and changes are reflected both in the UI and the backend.
- Routing allows you to navigate between the contact list, add/edit form, and contact details.

