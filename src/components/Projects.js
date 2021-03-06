const projects = [
    {
        name: 'Power Up',
        description: 'An app designed for simplicity and a clear user experience centered around the idea that anyone should be able to curate their own personal library of video games. Starting from our robust database of video games, including everything from JRPGs to Metroidvanias and everything in between, the user can find the games that fit their needs and begin to build a personal library.',
        techUsed: 'Node.js, React, JavaScript, Bootstrap, CSS, GraphQL, Bcrypt, Heroku',
        screenshot: './img/powerup_gif.gif',
        deployedLink: 'https://powerup-game-app.herokuapp.com/',
        repoLink: 'https://github.com/Shawn52409/powerup',
    },
    {
        name: 'Music Review Club',
        description: 'A website that specializes in building a music loving community where a user can post song review, read music reviews and post comments on song reviews.',
        techUsed: 'Node.js, Sequelize, dotenv, mysql2, Express.js, JavaScript, Bootstrap, CSS, Handlebars, Bcrypt, Heroku',
        screenshot: './img/music-review-club-screenshot.jpg',
        deployedLink: 'https://music-review-club.herokuapp.com/',
        repoLink: 'https://github.com/lydiawdesign/music-review-club',
    },
    {
        name: 'Health & Wellness Planner',
        description: 'This website was made to give a user a way to search through foods and exercises to create a evening plan for one calendar week.',
        techUsed: 'HTML, CSS, Javascript, Jquery, Bulma, Server-side API',
        screenshot: './img/health-wellness-screenshot.jpg',
        deployedLink: 'https://haleywitherell.github.io/Health-Wellness/',
        repoLink: 'https://github.com/haleywitherell/Health-Wellness',
    },
    {
        name: 'Weather Dashboard',
        description: 'This app lets a user see the weather of any city the user searches for by entering a zip code. The search will be saved to local storage and a button with the city and zip code will appear to easily return to a previous searches. After a search is made a user may delete the search history if they like by pressing the red button.',
        techUsed: 'HTML, CSS, Javascript, Jquery, Bootstrap, FontAwesome, moment().js, API, local storage',
        screenshot: './img/weather-dashboard.gif',
        deployedLink: 'https://shawn52409.github.io/Weather-Dashboard/',
        repoLink: 'https://github.com/Shawn52409/Weather-Dashboard',
    },
    // {
    //     name: 'Coding Quiz',
    //     description: 'This website was made to create a coding quiz to test a developers knowledge on coding.',
    //     techUsed: 'HTML, CSS, Javascript, Jquery',
    //     screenshot: './img/coding-quiz-screenshot.jpg',
    //     deployedLink: 'https://shawn52409.github.io/Code-Quiz/',
    //     repoLink: 'https://github.com/Shawn52409/Code-Quiz.git',
    // },
    {
        name: 'Budget Tracker',
        description: 'This app will let a user keep track of a budget. The user will be able to enter deposits and expenses on and offline. If a user is offline the app will keep checking for an online connection and add all offline entries to the online database.',
        techUsed: 'Node.js, npm dotenv, npm express, JavaScript, mongoose, mongodb, mongodb atlas, Heroku',
        screenshot: './img/Budget-Tracker.gif',
        deployedLink: 'https://shawn52409.github.io/Code-Quiz/',
        repoTitle: 'Repo Link',
        repoLink: 'https://github.com/Shawn52409/Code-Quiz.git',
    },
    {
        name: 'Workout Tracker',
        description: 'This app is a workout tracker used to track daily workouts. A user will be able to log multiple exercises in a workout on a given day. The user will be able to track the name, type , weight, sets, reps and duration of exercise. If it is a cardio exercise a user will be able to track the distance traveled.',
        techUsed: 'Node.js, npm dotenv, npm express, JavaScript, mongoose, mongodb, mongodb atlas, Heroku',
        screenshot: './img/workout-tracker.jpg',
        deployedLink: 'https://workout-tracker-smm.herokuapp.com/',
        repoLink: 'https://github.com/Shawn52409/Workout-Tracker',
    }
]

export default projects;