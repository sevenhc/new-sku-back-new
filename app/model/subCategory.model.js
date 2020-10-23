const sql = require("./db.js");

const SubCategory = function (category) {
  this.CategoryID = category.CategoryID;
  this.SubCategoryID = category.SubCategoryID;
  this.CategoryName = category.CategoryName;
  this.SubCategoryName = category.SubCategoryName;
  this.ThumbnailImage = category.ThumbnailImage;
  this.UserID = category.UserID;
};

SubCategory.getAllSubCategory = (CategoryID, result) => {
  sql.query("CALL GetAllSubCategories(?)", [CategoryID], (err, res) => {
    if (err) {
      console.log("error.Model: ", err);
      result(null, err);
      return;
    }
    // console.log(query);
    console.log("SubCategories: ", res);
    result(null, res);
  });
};
SubCategory.getSubCategoryByID = (SubCategoryID, result) => {
  sql.query("CALL GetSubCategoryByID(?)", [SubCategoryID], (err, res) => {
    if (err) {
      console.log("error.Model: ", err);
      result(null, err);
      return;
    }
    // console.log(query);
    console.log("SubCategoryByID: ", res[0]);
    result(null, res);
  });
};
SubCategory.create = (newSubCategory, result) => {
  sql.query(
    "CALL AddSubCategory(?,?,?,?)",
    [
      newSubCategory.CategoryID,
      newSubCategory.CategoryName,
      newSubCategory.ThumbnailImage,
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
SubCategory.update = (newCategory, result) => {
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
SubCategory.delete = (newCategory, result) => {
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
SubCategory.getSubById = (newCategory, result) => {
  sql.query(
    "CALL GetSubCategoryByID(?)",
    [newCategory.SubCategoryID],
    (err, res) => {
      if (err) {
        console.log("error.Model: ", err);
        result(null, err);
        return;
      }
      // console.log(query);
      console.log("SubCategories: ", res);
      result(null, res[0]);
    }
  );
};
module.exports = SubCategory;
