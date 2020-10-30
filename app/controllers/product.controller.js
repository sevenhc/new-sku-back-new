const Product = require("../model/product.model");
const uploadFile = require("../middleware/upload");
const upload = require("../middleware/uploadArray");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Product({
    ProductName: req.body.ProductName,
    Ingredients: req.body.Ingredients,
    SubCategoryID: req.body.SubCategoryID,
    Image: req.body.Image,
    ProductYear: req.body.ProductYear,
    ProductMonth: req.body.ProductMonth,
    SuperMarket: req.body.SuperMarket,
    NutritionalTable: req.body.NutritionalTable,
    ThumbnailImage: req.body.ThumbnailImage,
    UserID: req.body.UserID,
  });

  Product.create(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Product({
    SubCategoryID: req.params.SubCategoryID,
    CategoryID: req.body.CategoryID,
    CategoryName: req.body.CategoryName,
    ThumbnailImage: req.body.ThumbnailImage,
    UserID: req.body.UserID,
  });

  Product.update(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};

exports.delete = (req, res) => {
  const category = new Product({
    ProductID: req.params.ProductID,
  });

  Product.delete(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while delete the ProductID.",
      });
    else res.send(data);
  });
};
exports.deleteMainImage = (req, res) => {
  const category = new Product({
    ProductID: req.params.ProductID,
  });

  Product.deleteMainImage(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while delete the ProductID.",
      });
    else res.send(data);
  });
};
exports.DeleteProductNutritionTable = (req, res) => {
  const category = new Product({
    ProductID: req.params.ProductID,
  });

  Product.DeleteProductNutritionTable(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while delete the ProductID.",
      });
    else res.send(data);
  });
};
exports.DeleteProductImages = (req, res) => {
  console.log("body", req.body);
  var newImageArray = JSON.stringify(req.body.Array);
  console.log("new array", newImageArray);
  const category = new Product({
    ProductID: req.body.Id,
    Image: newImageArray,
  });

  Product.DeleteProductImages(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while delete the ProductID.",
      });
    else res.send(data);
  });
};

exports.getAllProductsByIds = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Product({
    SubCategoryID: req.params.SubCategoryID,
    CategoryID: req.body.CategoryID,
  });

  Product.getAllProductsByIds(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
exports.getProductByID = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const category = new Product({
    ProductID: req.params.ProductID,
  });

  Product.getProductByID(category, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};

exports.addNew = async (req, res) => {
  try {
    await upload(req, res);
    // await uploadFile(req, res);

    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }
    var a = [];
    for (var i = 0, j = req.files.imageArray.length; i < j; i++) {
      a.push(req.files.imageArray[i].filename);
    }
    console.log("asdad", a);
    const category = new Product({
      ProductName: req.body.ProductName,
      Ingredients: req.body.Ingredients,
      SubCategoryID: req.body.SubCategoryID,
      // Image: req.files.imageArray[0].filename,
      Image: JSON.stringify(a),
      ProductYear: 2020,
      ProductMonth: req.body.ProductMonth,
      SuperMarket: req.body.SuperMarket,
      NutritionalTable: req.files.Nutritional[0].filename,
      ThumbnailImage: req.files.main[0].filename,
      UserID: req.body.UserID,
    });
    Product.create(category, (err, data) => {
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
      message: `Could not upload the file: ${err}`,
    });
  }
};
exports.updateNew = async (req, res) => {
  try {
    await upload(req, res);
    // await uploadFile(req, res);

    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }
    const category = new Product({
      ProductID: req.body.ProductID,
      ProductName: req.body.ProductName,
      Ingredients: req.body.Ingredients,
      SubCategoryID: req.body.SubCategoryID,
      Image: req.files.imageArray.toString(),
      ProductYear: 2020,
      ProductMonth: req.body.ProductMonth,
      SuperMarket: req.body.SuperMarket,
      NutritionalTable: req.files.Nutritional[0].filename,
      ThumbnailImage: req.files.main[0].filename,
      UserID: req.body.UserID,
    });
    Product.updateNew(category, (err, data) => {
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
      message: `Could not upload the file: ${err}`,
    });
  }
};
exports.updateProductThumbnail = async (req, res) => {
  try {
    await upload(req, res);
    // await uploadFile(req, res);

    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }
    const category = new Product({
      ProductID: req.body.ProductID,
      ThumbnailImage: req.files.main[0].filename,
    });
    Product.updateProductThumbnail(category, (err, data) => {
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
      message: `Could not upload the file: ${err}`,
    });
  }
};
exports.multipleUpload = async (req, res) => {
  try {
    await upload(req, res);
    // await uploadFile(req, res);

    console.log(req.files);

    if (req.files.length <= 0) {
      return res.send(`You must select at least 1 file.`);
    }

    return res.send(`Files has been uploaded.`);
  } catch (error) {
    console.log(error);

    if (error.code === "LIMIT_UNEXPECTED_FILE") {
      return res.send("Too many files to upload.");
    }
    return res.send(`Error when trying upload many files: ${error}`);
  }
};
