1. npm i react-transition-group
2. npm i react-router-dom

===================================================

1. in react app, env variables must start with "REACT_APP"

2. public/index.html dotor key-gee ingej INJECT hiine.
   <script
     src="https://maps.googleapis.com/maps/api/js?key=%REACT_APP_GOOGLE_API_KEY%"
     async
     defer
   ></script>

3. app.js dr REact.lazy -> import hiisneer

<!-- Code Splitting
Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load. -->

https://reactjs.org/docs/code-splitting.html

==========================BACK END DEPLOY using Heroku==========================

1. HEROKU deployment
2. Sign up -> create new app - > "mern-app-ganzo" gej ogow.
3. terminal dr project folder luuga cd -> npm i -g heroku
4. $ heroku login
5. $ git init
6. $ terminal dr "heroku git:remote -a mern-app-ganzo" eniig bichne
7. $ git add .
8. $ git commit -m ""
9. backend folder -> package.json-> scripts -> "nodemon app.js" -> "node app.js" bolgono.
10. https://dashboard.heroku.com/apps/mern-app-ganzo/settings. (settings dotroo backend/nodemon.json file dotor bga environment variable-uudaa, CONFIG VARS dotor ni add hj ogno.)
11. $ git add . $ git commit -m "changed start script on package.json in backend folder"
12. $ git push heroku master
13. error zaana.
14. backend folder -> app.js dotor "app.listen(process.env.PORT || 5000)" bolgoj oorchilno.
15. $ git add . $ git commit -m "added PORT env"
16. $ git push heroku master
17. https://mern-app-ganzo.herokuapp.com Heroku site dotor.
18. backend dotor ".env.production" dotor
    REACT_APP_BACKEND_URL=https://mern-app-ganzo.herokuapp.com/api
    REACT_APP_ASSET_URL=https://mern-app-ganzo.herokuapp.com/
19. frontend folder -> npm run build

    ==========================FRONT END DEPLOY using Firebase==========================

==============================================OR==================================
==================================ALL IN ONE DEPLOY===============================

1. frontend folder -> build folder dotorh file-uudiig backend -> public folder uusged teredee copy-dono.
2. app.js
   app.use(express.static(path.join('public')));
   app.use((req, res, next) => {
   res.sendFile(path.resolve(\_\_dirname, 'public', 'index.html'));
   });

3. $ git add . $ git commit -m "changed start script on package.json in backend folder"
4. $ git push heroku master
5. https://mern-app-ganzo.herokuapp.com/
6. How do I switch branches from master to main? (heroku dr deploy-dsnii daraa engiin main branch ruugaa herhen ochix)
   git checkout -b main
   git branch -D master
7.
