#Simple React and Alt Boilerplate

##Purpose

This project's purpose is two-fold:

1. To quickly start building out a web application using JavaScript.
2. To serve as a sandbox for developers new to creating full-stack JavaScript applications.

##Up and Running

1. Clone
2. `cd` into project directory and `npm install`

###Run Webpack Dev Server

If you're only interested in playing around with React, do the following:

1. `npm run dev` to spin up a server
2. Navigate to `localhost:8080` in the browser

###Run Hapi server

If you want to serve the React application with Hapi, do the following:

1. `webpack -w client/app.js`
2. In a separate terminal shell, `cd` into project directory and `npm run hapi`

##License

MIT
