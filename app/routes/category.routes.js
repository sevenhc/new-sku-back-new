module.exports = (app) => {
  const category = require("../controllers/category.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/category/addNew", category.addNew);

  // Retrieve all Customers
  app.get("/category/getAll", category.getAllCategory);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerId
  app.put("/category/update", category.updateNew);

  //   // Delete a Customer with customerId
  app.delete("/category/delete/:categoryID", category.delete);

  app.get("/category/GetCategoryByID/:CategoryID", category.getCatById);
  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
