const sql = require("./db.js");

const Category = function (category) {
  this.CategoryID = category.CategoryID;
  this.CategoryName = category.CategoryName;
  this.ThumbnailImage = category.ThumbnailImage;
  this.UserID = category.UserID;
};
Category.getAllCategory = (result) => {
  sql.query("CALL GetAllCategories", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Categorys: ", res);
    result(null, res);
  });
};

Category.create = (newCategory, result) => {
  sql.query(
    "CALL AddCategory(?,?,?)",
    [newCategory.CategoryName, newCategory.ThumbnailImage, newCategory.UserID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Category: ", { id: res.insertId, ...newCategory });
      result(null, { id: res.insertId, ...newCategory });
    }
  );
};

Category.update = (newCategory, result) => {
  console.log("model", newCategory);
  sql.query(
    "CALL EditCategory(?,?,?,?)",
    [
      newCategory.CategoryID,
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

      console.log("Updated  Category: ", { id: res.insertId, ...newCategory });
      result(null, { id: res.insertId, ...newCategory });
    }
  );
};
Category.delete = (newCategory, result) => {
  sql.query("CALL DeleteCategory(?)", [newCategory.CategoryID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Delete  Category: ", { id: res.insertId, ...newCategory });
    result(null, { id: res.insertId, ...newCategory });
  });
};
Category.getCatById = (newCategory, result) => {
  sql.query("CALL GetCategoryByID(?)", [newCategory.CategoryID], (err, res) => {
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
module.exports = Category;
