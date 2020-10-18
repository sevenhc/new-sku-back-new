module.exports = (app) => {
  const subCategory = require("../controllers/subCategory.controller");

  // Create a new Customer
  app.post("/subCategory/add", subCategory.addNew);

  // Retrieve all Customers
  app.get("/subCategory/getAll/:CategoryID", subCategory.getAllSubCategory);

  //   // Retrieve a single Customer with customerId
  app.get("/subCategory/:SubCategoryID", subCategory.getSubCategoryByID);

  //   // Update a Customer with customerId
  app.put("/subCategory/update", subCategory.updateNew);

  //   // Delete a Customer with customerId
  app.delete("/subCategory/delete/:SubCategoryID", subCategory.delete);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
