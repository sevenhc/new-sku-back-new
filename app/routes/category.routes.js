module.exports = (app) => {
  const category = require("../controllers/category.controller");

  // Create a new Customer
  // app.post("/category/add", category.create);
  app.post("/category/addNew", category.addNew);

  // Retrieve all Customers
  app.get("/category/getAll", category.getAllCategory);

  app.put("/category/update", category.updateNew);

  app.put("/category/update/title", category.updateTitle);

  //   // Delete a Customer with customerId
  app.delete("/category/delete/:categoryID", category.delete);

  app.post("/category/delete/image", category.deleteImage);

  app.get("/category/GetCategoryByID/:CategoryID", category.getCatById);
  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
