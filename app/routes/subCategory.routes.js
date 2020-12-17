module.exports = (app) => {
  const subCategory = require("../controllers/subCategory.controller");

  // Create a new Customer
  app.post("/subCategory/add", subCategory.addNew);

  // Retrieve all Customers
  app.get("/subCategory/getAll/:CategoryID", subCategory.getAllSubCategory);
  app.get(
    "/subCategory/GetSubCategoriesByMonth",
    subCategory.GetSubCategoriesByMonth
  );

  //   // Retrieve a single Customer with customerId
  app.get("/subCategory/:SubCategoryID", subCategory.getSubCategoryByID);

  //   // Update a Customer with customerId
  app.put("/subCategory/update", subCategory.updateNew);

  app.put("/subCategory/title/update", subCategory.updateTitle);

  //   // Delete a Customer with customerId
  app.delete("/subCategory/delete/:SubCategoryID", subCategory.delete);

  app.delete(
    "/subCategory/delete/image/:SubCategoryID",
    subCategory.deleteImage
  );

  app.get(
    "/subCategory/GetSubCategoryByID/:SubCategoryID",
    subCategory.getSubById
  );

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
