const mongoose = require("mongoose");

//const dbUrl="mongodb://localhost:27017/mydb";
const dbUrl="mongodb+srv://hellovivek999:cGntpWMTX2Bo2O8p@cluster0.ocv3o2o.mongodb.net/mydb?retryWrites=true&w=majority";
 

  mongoose.connect(dbUrl, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection error:", err));

module.exports = mongoose;
