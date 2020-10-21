module.exports = (app) => {
  const client = require("../controllers/client.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/client/addNew", client.create);

  // Retrieve all Customers
  app.get("/client/getAll", client.getAll);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerId
  app.put("/category/update", client.updateNew);

  //   // Delete a Customer with customerId
  app.delete("/category/delete", client.delete);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
