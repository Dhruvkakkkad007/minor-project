const express = require('express')
const routeUser = require('./routes/users.route');
const routeMovie = require('./routes/movies.route');
const routeMovieRatting = require('./routes/movie_rating.route');

const app = express();
app.use(express.json());
app.use('/users',routeUser);
app.use('/movie',routeMovie);
app.use('/rating',routeMovieRatting);

app.listen(3000,()=>{
    console.log("Server Started at 3000")
})
