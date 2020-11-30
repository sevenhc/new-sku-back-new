module.exports = (app) => {
  const product = require("../controllers/product.controller");

  // Create a new Customer
  app.post("/product/add", product.addNew);
  app.post("/product/multipleUpload", product.multipleUpload);

  // Retrieve all Customers
  app.get("/product/getAll/:SubCategoryID", product.getAllProductsByIds);

  app.get("/product/getById/:ProductID", product.getProductByID);
  app.get("/product/getProductByKeyWord/:ProductName", product.getProductByKeyWord);
  app.get("/product/getLatest", product.getLatestProducts);

  //   // Retrieve a single Customer with customerId
  //   app.get("/customers/:customerId", customers.findOne);

  //   // Update a Customer with customerId
  app.put("/product/update", product.updateNew);
  app.put("/product/UpdateProductThumbnail", product.updateProductThumbnail);
  app.put(
    "/product/UpdateProductNutritionTable",
    product.UpdateProductNutritionTable
  );
  app.put("/product/UpdateProductImages", product.UpdateProductImages);

  //   // Delete a Customer with customerId
  app.delete("/product/delete/:ProductID", product.delete);
  app.delete("/product/deleteMainImage/:ProductID", product.deleteMainImage);
  app.delete(
    "/product/DeleteProductNutritionTable/:ProductID",
    product.DeleteProductNutritionTable
  );
  app.post("/product/DeleteProductImages", product.DeleteProductImages);

  //   // Create a new Customer
  //   app.delete("/customers", customers.deleteAll);
};
