require("dotenv").config();

const express = require("express");

const app = express();

const port = 5500;

app.use(express.json());

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movieHandlers = require("./movieHandlers");

app.get("/api/movies", movieHandlers.getMovies);
app.get("/api/movies/:id", movieHandlers.getMovieById);
app.post("/api/movies", movieHandlers.postMovie);
app.put("/api/movies/:id", movieHandlers.updateMovie);
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

const users = require("./users");

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUserById);
app.post("/api/users", users.postUser);
app.put("/api/users/:id", users.updateUser);
app.delete("/api/users/:id", users.deleteUser);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
