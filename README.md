# Media
This is the Media/Summary component for the Front End Capstone done at Hack Reactor. Our team replicated the Steam website, and this is a simplified version of the reviews module for sample games.

This app:
* renders and appends review data to the page
* incorporates UI with each review like linking to the full review or showing profile data

## Getting Started

### Installation
```sh
npm install (installs necessary dependencies)
npm run build-dev (uses webpack to bundle the React code)
cmd + c (exits build script)
npm run seed (runs a custom data generation script and seeds it into a MongoDB database)
cmd + c (exits seeding script)
npm start (starts the server)

Component can be accessed at http://localhost:8000/?=1. Change the id number after ?= to any number between 1 and 100 to access different games. It is currently setup to use sample data, but a curated game page can be accessed with id 237.
```

### Running the tests
```sh
npm run test
```

## Built With
* [axios](https://www.npmjs.com/package/axios) - HTTP client for browser and node.js
* [express](https://expressjs.com/) - web framework used
* [mongoose](https://mongoosejs.com/) - ORM for database