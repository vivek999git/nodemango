const mongoose = require("mongoose");

/* mongoose.connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err)); */

  mongoose.connect("mongodb+srv://hellovivek999:cGntpWMTX2Bo2O8p@cluster0.ocv3o2o.mongodb.net/mydb?retryWrites=true&w=majority", {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection error:", err));

module.exports = mongoose;
