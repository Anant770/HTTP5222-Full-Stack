const express = require("express");
const path = require("path"); //needed when setting up static/file paths
const { MongoClient, ObjectId } = require("mongodb"); //get the MongoClient class of objects so we can create one

//create a new MongoClient
const dbUrl = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(dbUrl); //create the MongoClient

//set up the Express app
const app = express();
const port = process.env.PORT || "8888";

//set up application template engine
app.set("views", path.join(__dirname, "views")); //the first "views" is the setting name
//the second value above is the path: __dirname/views
app.set("view engine", "pug");

//set up folder for static files
app.use(express.static(path.join(__dirname, "public")));

//convert query string formats in form data to JSON format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SET UP PAGE PATHS
//The home page's app.get callback function has to be asynchronous because it's using an asynchronous function inside it.
app.get("/", async (request, response) => {
  let links = await getLinks();
  //console.log(links);
  response.render("index", { title: "Home", menu: links });
});
app.get("/about", async (request, response) => {
  let links = await getLinks();
  response.render("about", { title: "About", menu: links });
})
//ADMIN PAGE ROUTES
app.get("/admin/menu", async (request, response) => {
  let links = await getLinks();
  response.render("menu-list", { title: "Administer menu links", menu: links })
})
app.get("/admin/menu/add", async (request, response) => {
  let links = await getLinks();
  response.render("menu-add", { title: "Add menu link", menu: links });
})
//path for processing the create form
app.post("/admin/menu/add/submit", async (request, response) => {
  //query string format: weight=0&path=...contact&name=...
  //make data accessible as if it was a JSON object via lines 22-23
  //POST form data is passed via the body (request.body)
  let wgt = request.body.weight; //weight is the name of the weight field in the form
  let href = request.body.path; //URI field data
  let text = request.body.name; //link text field

  let newLink = {
    weight: wgt,
    path: href,
    name: text
  }
  await addLink(newLink);
  response.redirect("/admin/menu");
})
//path for processing the delete form
app.get("/admin/menu/delete", async (request, response) => {
  //get the link _id
  //for a GET form, the data is passed in the query string of the URL (request.query)
  let id = request.query.linkId;

  //execute the function to delete by _id
  deleteLink(id);
  //redirect back to main menu link admin page
  response.redirect("/admin/menu");
})

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
}); 

//MONGODB FUNCTIONS
async function connection() {
  db = client.db("testdb");
  return db; //return the database
}
//Get all links from the menuLinks collection
async function getLinks() {
  db = await connection();
  let results = db.collection("menuLinks").find({});
  return await results.toArray(); //convert results to an array
}
//Insert one document into menuLinks collection
async function addLink(newLink) {
  db = await connection();
  let status = await db.collection("menuLinks").insertOne(newLink);
  //do something with the status to check if ok
  console.log("link added");
}
//Delete one document by id
async function deleteLink(id) {
  db = await connection();
  const deleteIdFilter = { _id: new ObjectId(id) };
  let result = await db.collection("menuLinks").deleteOne(deleteIdFilter);
  if (result.deletedCount == 1)
    console.log("delete successful");
}