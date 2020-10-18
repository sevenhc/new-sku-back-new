module.exports = (app) => {
  const product = require("../controllers/product.controller");

  // Create a new Customer
  app.post("/product/add", product.addNew);
  app.post("/product/multipleUpload", product.multipleUpload);

  // Retrieve all Customers
  app.get("/product/getAll/:SubCategoryID", product.getAllProductsByIds);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerId
  // app.put("/category/update/:categoryID", product.update);

  //   // Delete a Customer with customerId
  // app.delete("/category/delete/:categoryID", product.delete);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
