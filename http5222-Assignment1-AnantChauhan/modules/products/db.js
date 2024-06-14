const mongoose = require("mongoose");

const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

// Set up Toys Schema and model
const ToySchema = new mongoose.Schema({
  name: String,
  brand: String,
  year: Number,
  rating: Number,
  price: Number,
  imageUrl: String // Add the imageUrl field
});
const Toy = mongoose.model("Toy", ToySchema);

// MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); // Connect to MongoDB
}

// Get all Toys from the Toys collection
async function getToys() {
  await connect();
  return await Toy.find({}); // Return array for find all
}

// Initialize Toys collection with some data
async function initializeToys() {
  await connect();
  const ToyList = [
    {
      name: "Rc car",
      brand: "Hot Wheels",
      year: 2020,
      rating: 4.6,
      price: 24.99,
      imageUrl: "https://images.unsplash.com/photo-1591448684578-a4cb24ae8861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Nerf Gun",
      brand: "Nerf",
      year: 2020,
      rating: 4.6,
      price: 24.99,
      imageUrl: "https://images.unsplash.com/photo-1591197805022-c8e3159e88cf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  await Toy.insertMany(ToyList);
}

// Function to add a Toy to the Toys collection
async function addToy(
  toyName,
  toyBrand,
  toyRating,
  toyYear,
  toyPrice,
  toyImageUrl // New parameter for the image URL
) {
  let newToy = new Toy({
    name: toyName,
    brand: toyBrand,
    rating: toyRating,
    year: toyYear,
    price: toyPrice,
    imageUrl: toyImageUrl // Save the image URL
  });
  await newToy.save(); // Save the newToy to the DB
}

module.exports = {
  getToys,
  initializeToys,
  addToy,
};
