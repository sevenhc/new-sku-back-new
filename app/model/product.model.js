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
Product.update = (newCategory, result) => {
  sql.query(
    "CALL EditSubCategory(?,?,?,?,?)",
    [
      newCategory.CategoryID,
      newCategory.SubCategoryID,
      newCategory.CategoryName,
      newCategory.ThumbnailImage,
      newCategory.UserID,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("Updated  subCategory: ", {
        id: res.insertId,
        ...newCategory,
      });
      result(null, { id: res.insertId, ...newCategory });
    }
  );
};
Product.delete = (newCategory, result) => {
  sql.query(
    "CALL DeleteSubCategory(?)",
    [newCategory.SubCategoryID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("Delete  Category: ", { id: res.insertId, ...newCategory });
      result(null, { id: res.insertId, ...newCategory });
    }
  );
};
// Product.getAllProductsByIds = (newCategory, result) => {
//   sql.query(
//     "CALL GetAllProducts(?,?)",
//     [newCategory.CategoryID, newCategory.SubCategoryID],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         return;
//       }

//       console.log("Delete  Category: ", { id: res.insertId, ...newCategory });
//       result(res);
//     }
//   );
// };
module.exports = Product;
