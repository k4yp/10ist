# Pandex
![last commit](https://img.shields.io/github/last-commit/keyp0s/pandex?logo=GitHub)
![status](https://img.shields.io/github/deployments/keyp0s/pandex/thepandex?logo=Heroku)

![home page](homepage.png)
*This was created for 10ist web design project*  
### About the website
Pandex is a place to share screenshots and configurations of all your *nix desktops, themes or any other customisations  
Currently [live on heroku](https://thepandex.herokuapp.com/)
### Technologies used
**Frontend**  
* [React](https://reactjs.org) **:** Chosen javascript libary to create responsive and reactive websites  

**Backend**
* [Node.js](https://nodejs.org/en/) **:** A Runtime environment that allows JS to run server side
* [Express](https://expressjs.com/) **:** Back end web application framework for Node.js  
**Other dependancies include:**
* [Bcrypt](https://www.npmjs.com/package/bcrypt) **:** Library to help hash passwords
* [Multer](https://www.npmjs.com/package/multer) **:** Handles file uploads, specificly images in my case
* [Mongoose](https://mongoosejs.com/) **:** A MongoDB object modeling tool  

**Database**
* [MongoDB](https://www.mongodb.com/) **:** A document oriented NoSQL database

## Installation
### Prerequisites
* The latest [Node.js](https://nodejs.org/en/download/) LTS installed
* [MongoDB](https://www.mongodb.com/try/download/community) server installed
### Setup
* Clone the repository to your computer with ```> git clone https://github.com/keyp0s/pandex.git```
* Then go to the root folder and run  ```> (cd server && npm install) && (cd ..) && (cd client && npm install) && (cd ..)``` to install the required packages
