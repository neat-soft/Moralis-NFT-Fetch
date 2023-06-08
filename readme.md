# Getting Started


## Available Scripts

In the project directory, you can run:

### `npm install`

Install all required npm modules

### `npm run dev`

Runs the backend server in the development mode. Run this cli in your local only.\
***Run server as a daemon with pm2 in your server.***

## Start app with pm2

**Install pm2**

> PM2 is a daemon process manager that will help you manage and keep your application online.\
> Install pm2 run by  `npm install pm2 -g`

**Run with pm2**

> `pm2 start src/index.js`\
It will start backend server as a daemon in port 3030

**Edit port**\
Change port as you need inside .env file.\
Default is 3030