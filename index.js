const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const knex = require("knex") ({
    client: "pg",
    connection:
      "",
  });


  const app = express ();

  const port = 3000 ;

  // middleware to use cors paackage where origin is any route theird part etc.. //

  app.use(cors({ origin: "*" })); 


  // middleware for deseralizing //
  app.use(express.json());
  

  // middleware for authetnication //

  // step 1 : install jsonwebtoken and bcrypt : they hash passwords //

  //step 2 