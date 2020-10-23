const LibraryItems = require("../model/libraryItems.model");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const libraryItems = new LibraryItems({
    LibraryID: req.body.LibraryID,
    ProductID: req.body.ProductID,
  });

  LibraryItems.create(libraryItems, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

exports.getAll = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const libraryItems = new LibraryItems({
    LibraryID: req.params.LibraryID,
  });

  LibraryItems.getAll(libraryItems, (err, data) => {
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
  const libraryItems = new LibraryItems({
    LibraryItemID: req.params.LibraryItemID,
  });
  LibraryItems.delete(libraryItems, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
