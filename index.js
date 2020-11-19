var express = require("express");
var bodyParser = require("body-parser");
const axios = require("axios");
const http = require("http");
const { equal } = require("assert");
var app = express();

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

//let posts = { 1: "Post One", 2: "Post two", 3: "Post three", 4: "Post four" };
let posts = [
  {
    id: 1,
    message: "ut volutpat sapien arcu",
  },
  {
    id: 2,
    message: "praesent lectus vestibulum",
  },
  {
    id: 3,
    message: "fusce posuere felis sed lacus",
  },
];

let postsWithComments = [
  {
    id: 1,
    message: "praesent lectus vestibulum",
    comments: {
      1: "porttitor lorem id",
      2: "eu est congue",
    },
  },
  {
    id: 2,
    message: "proin eu mi nulla",
    comments: {
      1: "odio in hac habitasse platea",
      2: "elit proin interdum",
    },
  },
  {
    id: 3,
    message: "est risus auctor sed tristique",
    comments: {
      1: "tristique fusce congue diam id",
      2: "vestibulum sagittis sapien",
    },
  },
];

app.listen(process.env.OPTIC_API_PORT || 4000, () => {
  console.log("Server running on port " + (process.env.OPTIC_API_PORT || 4000));
});

app.get("/", (req, res, next) => {
  res.json(["Postman", "is", "awesome"]);
});

app.get("/posts", (req, res, next) => {
  console.log("GET Request");
  res.json(posts);
});

app.post("/posts", (req, res, next) => {
  console.log("POST Request");
  posts.push({ id: req.body.id, message: req.body.message });
  res.json(posts);
});

app.get("/posts/:id", (req, res, next) => {
  posts.forEach((element) => {
    if (element.id == req.params.id) {
      res.json(element);
      return;
    }
  });
});

app.get("/posts/:id/comments", (req, res, next) => {
  res.json(["Postman", "is", "really", "awesome"]);
});
