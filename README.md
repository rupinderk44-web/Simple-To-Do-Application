# REACT To-Do Application

## Description
This is the frontend part of the Simple To-Do Application built using React.js. The application provides a user-friendly interface to manage tasks by connecting to the backend REST API built with Node.js, Express.js, and SQLite3.

## Features
- View all to-do tasks from the database
- Add new tasks to the to-do list
- Mark tasks as completed
- Delete tasks from the list

## Technologies Used
- React.js  
- JavaScript  
- CSS/Bootstrap 
- Fetch API  

## Requirements
Before running this project, make sure you have the following installed and set up:
- Node.js – v16 or higher
Download from https://nodejs.org/
- npm – Comes with Node.js, used to install project dependencies
- bootstrap
- react



## Installation
Clone the repository:

- git clone https://github.com/rupinderk44-web/Simple-To-Do-Application.git
cd node-express-rest-api
Install dependencies:
npm install



## Usage

Start the server:
npm start

The Application will run on:
http://localhost:3000




## Dependencies
- Node.js
- bootstrap
- react 

Install all dependencies with:
npm install 
npm install bootstrap
npm install react react-dom

## Notes
Add to .gitignore:
- node_modules/

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
# Node Express REST API Assignment

## Description
This is a simple REST API built using Node.js and Express, with sqlite3 as the backend.  
It supports basic CRUD(POST,PUT,GET,DELETE) operations for TODO.

## Features
- Todo CRUD – Add, read, update, and delete todo.
- Routes with Express.js – Organized routes for Todo. Each route handles specific HTTP requests (GET, POST, PUT, DELETE).
- Environment Configuration (.env) – Uses the dotenv package to manage sensitive data.
- .gitignore – Prevents sensitive files such as .env and node_modules/

## Requirements
Before running this project, make sure you have the following installed and set up:
- Node.js – v16 or higher
Download from https://nodejs.org/
- npm – Comes with Node.js, used to install project dependencies
- Express.js – Web framework for Node.js to create routes and handle HTTP requests
Install via:
npm install express
npm install cors
npm install sqlite3
- dotenv package – To load environment variables from a .env file
Install via:
npm install dotenv
- .env file – To store environment variables like PORT and DATABASE_URL
PORT=4000


## Installation
Clone the repository:

- git clone https://github.com/rupinderk44-web/Simple-To-Do-Application.git
cd Simple-To-Do-Application
Install dependencies:
npm install
- Add your .env file in the project root.

## Usage

Start the server:
node index.js OR nodemon index.js

The API will run on:
http://localhost:4000

## API Routes
# Todo
Method	   Route	    Description
GET	      /api/todos	    Get all Todo
POST	  /api/todos	    Add a new Todo
PUT	      /api/todos/:id	Marks as completed
DELETE	  /api/todos/:id	Delete a Todo


## Dependencies
- Node.js
- Express
- cors
- sqlite3
- dotenv

Install all dependencies with:
npm install

## Notes
Keep .env  secret.
Add to .gitignore:
- node_modules/
- .env



