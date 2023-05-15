const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/posts", (req, res) => {
  dbConnection.execute(`SELECT * FROM posts`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

module.exports = router;
