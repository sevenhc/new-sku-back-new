const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
path = require("path");
const app = express();

global.__basedir = __dirname;
app.use(cors());
// app.options("*", cors());÷
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/uploads")));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to new-sku application." });
});

require("./app/routes/category.routes")(app);
require("./app/routes/subCategory.routes")(app);
require("./app/routes/products.routes")(app);
require("./app/routes/insight.routes")(app);
require("./app/routes/client.routes")(app);
require("./app/routes/library.routes")(app);
require("./app/routes/libraryItems.routes")(app);
require("./app/routes/forgetPassword")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/subsciption.mail.routes")(app);
require("./app/routes/password.chnaged.mail")(app);
require("./app/routes/contact.routes")(app);
// set port, listen for requests
// app.listen(3000, () => {
//   console.log("Server is running on port 3000.");git
// });
// app.listen(
//   process.env.PORT || 3000,
//   console.log("server is running on port : 3000")
// );
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
