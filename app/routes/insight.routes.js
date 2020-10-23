module.exports = (app) => {
  const insight = require("../controllers/insights.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/insight/addNew", insight.addNew);

  // Retrieve all Customers
  app.get("/insight/getAll", insight.getAll);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerId
  app.put("/insight/update", insight.updateNew);

  //   // Delete a Customer with customerId
  app.delete("/insight/delete/:InsightID", insight.delete);

  app.get("/insight/getInsById/:InsightID", insight.getInsById);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
