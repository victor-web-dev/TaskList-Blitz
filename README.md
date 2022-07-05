# TaskList-Blitz
Repo made for Trybe career blitz and has the purpose to evaluate frontend and backend skills while simulating a job skills test

**This project still in development**

This is a task management application, similar to the very known Trello, but with the purpose is to practice fullstack development skills.

## How to start :rocket:

*First things first* :exclamation:
``` 
  git clone git@github.com:victor-web-dev/TaskList-Blitz.git
```
**OR**
```
  git clone https://github.com/victor-web-dev/TaskList-Blitz.git
```


  **There is 2 main folders**
- [Frontend](/frontend)
- [Backend](/backend)
  
  You have to enter EACH one and execute:
  ```
  npm install
  ```
  
## Backend
  
**Stacks used**
  <p align="left">
  <img width=5% title="typescript" src="https://img.icons8.com/color/96/000000/typescript.png"/>
  <img width=5% title="nodejs" src="https://img.icons8.com/color/96/000000/nodejs.png"/>
  <img width=5% title="eslint" src="https://img.icons8.com/color/96/000000/eslint.png"/>
  <img width=12% title="prisma" src="https://website-v9.vercel.app/logo-white.svg"/>
  <img width=8% title="mysql" src="https://img.icons8.com/color/96/000000/mysql-logo.png"/>
  <h3>Express</h3>
</p>
<hr/>

- Prisma is being used as an ORM;
- It's important to create a *.env* file;
- Follow the example in [env.example](/backend/env.example) to setup the **Database** conection;
- Prisma pretty much accept a long range of databases, but here it's being used MySql;

**Atention!** :anchor:

  >It's not shown in the _env.example_ file but you can setup a key PORT to the _.env_;
  
  >By default the server will listen to PORT or 3001;



**After setting up the _.env_ file**:

Execute the following scripts

```
  npm run app:first-run
  npm start

```
The first command will build the typescript files and execute the migration and seed the DB.

The second one will execute nodemon and start the server.

