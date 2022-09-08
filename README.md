# Welcome to SCREAMIUM!
### A [Medium](https://medium.com/) clone built with PostgreSQL, Express, React, Redux, and Node.js

### *Explore horror stories from a variety of genres, leave comments, and publish your own scary stories from beyond the beyond.*

### View the live site [here](https://screamium-app.herokuapp.com/)!

#### *Home Page*

![splash-page-3 0](https://user-images.githubusercontent.com/100968885/177126040-5b91d73e-1221-4b1f-9c95-ee4f4ec131c2.png)

## Features

### [Users](https://github.com/angMaidt/Screamium/wiki/Features#1-users)

### [Stories](https://github.com/angMaidt/Screamium/wiki/Features#2-stories)

### [Comments](https://github.com/angMaidt/Screamium/wiki/Features#3-comments)

### [Genres](https://github.com/angMaidt/Screamium/wiki/Features#4-genres)

### [Bookmarks](https://github.com/angMaidt/Screamium/wiki/Features#5-bookmarks)

## Technologies Used

* PostgresQL
* Express
* Sequelize
* React
* Redux
* Node.js
* db.io
* Heroku

## Local Setup:

Setting Up and Starting a Local Server

1. Download code and npm install in /backend to install all node dependencies for backend server.

2. Create a psql db user with createdb privileges.

   - Duplicate the .env.example for the dotenv package.

   - Update the following variables:

     - PORT the port that the server will listen to, 8080 by default
     - DB_USERNAME the user of the created psql db user
     - DB_PASSWORD the password for the psql db user
     - SESSION_SECRET a session secret key for encrypting session id's in the database
       - All other variables should remain the same

3. Setup PostgreSQL database

   - Run npx dotenv sequelize db:create
   - Run npx dotenv sequelize db:migrate
   - Run npx dotenv sequelize db:seed:all

4. Start express server by running npm start in the /backend directory
5. The backend server will start on http://localhost:5000
6. Run `npm install` in `/frontend` to install dependencies for frontend server.
7. Run `npm start` in the `/frontend` directory
8. The frontend server will be live on http://localhost:3000 by default
