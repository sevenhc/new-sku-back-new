module.exports = (app) => {
  const client = require("../controllers/client.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/client/addNew", client.create);

  app.post("/client/logIn", client.logIn);

  app.put("/client/update/subscription", client.updateSubscription);

  // Retrieve all Customers
  app.get("/client/getAll", client.getAll);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerId
  app.put("/client/update", client.update);

  //   // Delete a Customer with customerId
  app.delete("/client/delete/:ClientID", client.delete);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
