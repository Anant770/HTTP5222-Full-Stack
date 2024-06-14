const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./modules/products/db");

const app = express();
const port = process.env.PORT || "8888";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true })); 

// Home page
app.get("/", async (req, res) => {
  let toyList = await db.getToys();
  if (!toyList.length) {
    await db.initializeToys();
    toyList = await db.getToys();
  }
  res.render("index", { toys: toyList });
});

// About Us page
app.get("/about", (req, res) => {
  res.render("about");
});

// Return page
app.get("/return", (req, res) => {
  res.render("return");
});

// Create page
app.get("/admin/create", (req, res) => {
  res.render("create");
});
app.post("/admin/create/submit", async (req, res) => {
  const { name, brand, year, rating, price, image } = req.body;
  await db.addToy(name, brand, rating, year, price, image);
  res.redirect("/");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/return", (req, res) => {
  res.render("return");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

