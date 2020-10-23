const sql = require("./db.js");

const Product = function (category) {
  this.ProductName = category.ProductName;
  this.Ingredients = category.Ingredients;
  this.SubCategoryID = category.SubCategoryID;
  this.ThumbnailImage = category.ThumbnailImage;
  this.Image = category.Image;
  this.ProductYear = category.ProductYear;
  this.ProductMonth = category.ProductMonth;
  this.SuperMarket = category.SuperMarket;
  this.NutritionalTable = category.NutritionalTable;
  this.UserID = category.UserID;
  this.ProductID = category.ProductID;
};

Product.getAllProductsByIds = (category, result) => {
  sql.query("CALL GetAllProducts(?)", [category.SubCategoryID], (err, res) => {
    if (err) {
      console.log("error.Model: ", err);
      result(null, err);
      return;
    }
    // console.log(query);
    console.log("SubCategories: ", res);
    result(null, res[0]);
  });
};
Product.getProductByID = (category, result) => {
  sql.query("CALL GetProductByID(?)", [category.ProductID], (err, res) => {
    if (err) {
      console.log("error.Model: ", err);
      result(null, err);
      return;
    }
    // console.log(query);
    console.log("PRODUCT: ", res);
    result(null, res[0]);
  });
};

Product.create = (newSubCategory, result) => {
  sql.query(
    "CALL AddProduct(?,?,?,?,?,?,?,?,?,?)",
    [
      newSubCategory.ProductName,
      newSubCategory.Ingredients,
      newSubCategory.SubCategoryID,
      newSubCategory.ThumbnailImage,
      newSubCategory.Image,
      newSubCategory.ProductYear,
      newSubCategory.ProductMonth,
      newSubCategory.SuperMarket,
      newSubCategory.NutritionalTable,
      newSubCategory.UserID,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Category: ", {
        id: res.insertId,
        ...newSubCategory,
      });
      result(null, { id: res.insertId, ...newSubCategory });
    }
  );
};
Product.updateNew = (newSubCategory, result) => {
  sql.query(
    "CALL EditProduct(?,?,?,?,?,?,?,?,?,?,?)",
    [
      newSubCategory.ProductID,
      newSubCategory.ProductName,
      newSubCategory.Ingredients,
      newSubCategory.SubCategoryID,
      newSubCategory.ThumbnailImage,
      newSubCategory.Image,
      newSubCategory.ProductYear,
      newSubCategory.ProductMonth,
      newSubCategory.SuperMarket,
      newSubCategory.NutritionalTable,
      newSubCategory.UserID,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Category: ", {
        id: res.insertId,
        ...newSubCategory,
      });
      result(null, { id: res.insertId, ...newSubCategory });
    }
  );
};
Product.delete = (newCategory, result) => {
  sql.query("CALL DeleteProducts(?)", [newCategory.ProductID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Delete  Product: ", { id: res.insertId, ...newCategory });
    result(null, { id: res.insertId, ...newCategory });
  });
};

module.exports = Product;
