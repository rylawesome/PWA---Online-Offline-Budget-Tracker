# PWA - Online/Offline Budget Tracker

This app can be used to log transaction online or offline. For online usage, visit the heroku link below. It is designed for everyday use, however it specifically targets travellers who need to track their deposits/withdrawals without data/internet connection. Being able to access this crucial data anytime is the key goal of this app.

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)

## Installation

For visiting the site and testing its functions, please visit the [Heroku Link](https://radiant-bastion-48374.herokuapp.com/)

For local usage, please follow these instructions:
* Clone the repository onto your local machine.
* Open terminal/Git Bash and navigate to the cloned repo.
* Type 'npm i' in the terminal and press enter.
* Start the application by running 'npm start'
* Open your browser and navigate to [localhost:3000](localhost:3000) (or your preffered port, which can be changed in the server.js file)

## Usage

Once you have cloned the repository and navigated to the link in your browser, you can test the applications functionality by doing the following:

* Right click anywhere on the page and click 'Inspect'.
* In the window that appears, navigate to the 'Application' tab.
* On the left hand side of the window, navigate to the 'Service Workers' tab.
* Check the 'Offline' checkbox, then refresh the page.
* Where you would normally have a dino game(Google Chrome), instead you should still see the app. Enter in some transactions.
* Un-check the 'Offline' box, and refresh the page.
* You should see all your offline transactions logged successfully!

## Credits

The front end of the application was built by another developer. I personally used the following Technologies:
* [Express](https://expressjs.com/)
* [MongoDB & MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* [Node JS](https://nodejs.org/en/)
* [Mongoose](https://mongoosejs.com/)
* [Compression](https://www.npmjs.com/package/compression)