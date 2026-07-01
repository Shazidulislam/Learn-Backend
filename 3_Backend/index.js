const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // JSON parser (API )
app.use(express.urlencoded({ extended: true })); // Form parser (HTML form)
app.set("view engine", "ejs"); // EJS template engine
app.use(express.static(path.join(__dirname, "public"))); // Serve static files from the "public" directory

// Routes
app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    if (err) {
      console.error(err);
    } else console.log("Success ");
    res.render("index", { files: files });
  });
});

app.post("/create", (req, res) => {
  const { title, description } = req.body;

  console.log(title , description)
  fs.writeFile(`./files/${title}.txt`, description, (err) => {
    res.redirect("/");
  });

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});
