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

==========================DEPLOY using Heroku==========================

1. HEROKU deployment
2. Sign up -> create new app - > "mern-app-ganzo" gej ogow.
3. terminal dr project folder luuga cd -> npm i -g heroku
4. $ heroku login
5. $ git init
6. $ terminal dr "heroku git:remote -a mern-app-ganzo" eniig bichne
7.
