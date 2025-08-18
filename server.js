const express = require("express");
const bodyParser = require("body-parser");
require("./db"); // connect DB
const userRoutes = require("./routes/userRoutes");


const app = express();
app.use(bodyParser.json());

// Routes
app.use("/users", userRoutes);

// Set EJS as the template engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
   // res.send("Welcome to Node.js + Mongo CRUD API");
   res.render('index', { title: 'My First Node.js Template', name: 'Vivek' });
});


// Start server
app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));

