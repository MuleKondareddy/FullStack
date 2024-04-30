const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app",
});

database.connect((err) => {
  if (err) {
    console.log("Database Connection Error", err);
    return;
  }
  console.log("Mysql Database connected Successfully");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const User = `SELECT * FROM users WHERE email = ?`;
  database.query(User, [email], (err, result) => {
    if (err) {
      res.send("Database Error", err);
    }
    if (result.length > 0) {
      res.send("User Already Exists");
      console.log("User Already Exists");
    } else {
      const Insert = `
      INSERT INTO
      users (name,email,password)
      values (?,?,?)
      `;
      database.query(Insert, [name, email, password], (err, result) => {
        if (err) {
          res.send("Error to insert data");
        }
        res.send("User inserted Successfully");
      });
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const User = `SELECT * FROM users WHERE email = ?`;
  database.query(User, [email], (err, result) => {
    if (err) {
      res.status(500).send("Database Error");
    } else {
      if (result.length > 0) {
        if (password === result[0].password) {
          res.send("User Logged In Successfully");
        } else {
          res.status(401).send("Invalid Email or Password");
        }
      } else {
        res.status(404).send("User not found");
      }
    }
  });
});

app.get("/product", (req, res) => {
  const products = `
  SELECT * FROM products`;
  database.query(products, (err, result) => {
    if (err) {
      res.send("Error to fetch Products");
    }
    res.send(result);
  });
});

app.get("/productdetails/:id", (req, res) => {
  const { id } = req.params;
  const products = `
  SELECT * FROM products WHERE id = ${id}`;
  database.query(products, (err, result) => {
    if (err) {
      res.send("Error to fetch Products");
    }
    res.send(result);
  });
});

app.put("/reset", (req, res) => {
  const { email, password } = req.body;
  const User = `SELECT * FROM users WHERE email = ?`;
  database.query(User, [email], (err, result) => {
    if (err) {
      res.send("Database Erro");
    }
    if (result.length > 0) {
      const UpdateUser = `
      UPDATE users
      SET
      password = ?
      WHERE email = ?`;

      database.query(UpdateUser, [password, email], (err, result) => {
        if (err) {
          res.send("Database Error");
        }
        res.send("User password updated successfully");
      });
    }
  });
});

app.listen(3000, () => {
  console.log("Hello world");
});
