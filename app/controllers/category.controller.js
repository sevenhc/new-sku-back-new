const Category = require("../model/category.model");
const multer = require("multer");
const uploadFile = require("../middleware/upload");
const fs = require("fs");

exports.addNew = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const category = new Category({
      CategoryName: req.body.CategoryName,
      ThumbnailImage: req.file.originalname,
      UserID: req.body.UserID,
    });
    Category.create(category, (err, data) => {
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
    const category = new Category({
      CategoryID: req.body.CategoryID,
      CategoryName: req.body.CategoryName,
      ThumbnailImage: req.file.originalname,
      UserID: req.body.UserID,
    });
    Category.update(category, (err, data) => {
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
exports.updateTitle = async (req, res) => {
  try {
    console.log("title", req.body.CategoryID);
    if (req.body.CategoryID == undefined) {
      return res.status(400).send({ message: "Please add CategoryID!" });
    }
    const category = new Category({
      CategoryID: req.body.CategoryID,
      CategoryName: req.body.CategoryName,
    });
    Category.updateTitle(category, (err, data) => {
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

exports.getAllCategory = (req, res) => {
  Category.getAllCategory((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data[0]);
  });
};

exports.delete = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Category({
    CategoryID: req.params.categoryID,
  });

  Category.delete(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
exports.deleteImage = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Category({
    CategoryID: req.body.categoryID,
    catImage: req.body.file,
  });
  console.log("😀", req.body.file);
  Category.deleteImage(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
    console.log("😀😅", req.body.file);

    fs.unlink(__basedir + "/uploads/" + req.body.file, function (err) {
      if (err) throw err;
      // if no error, file has been deleted successfully
      console.log("File deleted!");
    });
  });
};

exports.getCatById = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Category({
    CategoryID: req.params.CategoryID,
  });

  Category.getCatById(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
