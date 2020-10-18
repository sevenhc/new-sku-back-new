const SubCategory = require("../model/subCategory.model");
const uploadFile = require("../middleware/upload");

exports.getAllSubCategory = (req, res) => {
  SubCategory.getAllSubCategory(req.params.CategoryID, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data[0]);
  });
};
exports.getSubCategoryByID = (req, res) => {
  SubCategory.getSubCategoryByID(req.params.SubCategoryID, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data[0]);
  });
};

exports.addNew = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const category = new SubCategory({
      CategoryID: req.body.CategoryID,
      CategoryName: req.body.CategoryName,
      ThumbnailImage: req.file.originalname,
      UserID: req.body.UserID,
    });
    SubCategory.create(category, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the SubCustomer.",
        });
      else res.send(data);
    });
    console.log(req.body.CategoryName);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

exports.updateNew = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const category = new SubCategory({
      CategoryID: req.body.CategoryID,
      CategoryName: req.body.CategoryName,
      ThumbnailImage: req.file.originalname,
      UserID: req.body.UserID,
      SubCategoryID: req.body.SubCategoryID,
    });
    SubCategory.update(category, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the SubCustomer.",
        });
      else res.send(data);
    });
    console.log(req.body.CategoryName);
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new SubCategory({
    SubCategoryID: req.params.SubCategoryID,
    CategoryID: req.body.CategoryID,
    CategoryName: req.body.CategoryName,
    ThumbnailImage: req.body.ThumbnailImage,
    UserID: req.body.UserID,
  });

  SubCategory.update(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new SubCategory({
    SubCategoryID: req.params.SubCategoryID,
  });

  SubCategory.delete(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
