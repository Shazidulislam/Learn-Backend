const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // // JSON parser (API)
app.use(express.urlencoded({ extended: true })); //// Form parser (HTML form)
app.set("view engine", "ejs"); // EJS template engine   
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory  


// routes
app.get("/", (req, res) => {
  res.render("index", { title: "Hello from backend2" }  );
});
app.get("/profile/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Hello from backend2, user ID: ${userId}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(path.join(__dirname, "public"))
});
