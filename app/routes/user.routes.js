module.exports = (app) => {
  const client = require("../controllers/user.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/user/addNew", client.create);

  app.post("/client/logIn", client.logIn);

  app.put("/client/update/subscription", client.updateSubscription);

  // Retrieve all Customers
  app.get("/client/getAll", client.getAll);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerIds
  app.put("/client/update", client.update);

  app.put("/client/resetPassword/:email", client.updatePassword);

  //   // Delete a Customer with customerId
  app.delete("/client/delete/:ClientID", client.delete);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
