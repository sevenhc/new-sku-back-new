module.exports = (app) => {
  const client = require("../controllers/user.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/user/addNew", client.create);

  app.post("/user/logIn", client.logIn);

  // Retrieve all Customers
  app.get("/user/getAll", client.getAll);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerIds
  app.put("/user/update", client.update);

  app.put("/client/resetPassword/:email", client.updatePassword);

  //   // Delete a Customer with customerId
  app.delete("/user/delete/:UserID", client.delete);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
