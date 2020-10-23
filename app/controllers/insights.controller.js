const Insights = require("../model/insights.model");
const uploadFile = require("../middleware/upload");

exports.addNew = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const insights = new Insights({
      InsightTitle: req.body.InsightTitle,
      ThumbnailImage: req.file.originalname,
      UserID: req.body.UserID,
      Description: req.body.Description,
    });
    Insights.create(insights, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the SubCustomer.",
        });
      else res.send(data);
    });
    console.log(req.body.Description);
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
    const insights = new Insights({
      InsightID: req.body.InsightID,
      InsightTitle: req.body.InsightTitle,
      ThumbnailImage: req.file.originalname,
      UserID: req.body.UserID,
      Description: req.body.Description,
    });
    Insights.update(insights, (err, data) => {
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

exports.getAll = (req, res) => {
  Insights.getAll((err, data) => {
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

  const InsightID = req.params.InsightID;
  Insights.delete(InsightID, (err, data) => {
    console.log(InsightID);
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};

exports.getInsById = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const insights = new Insights({
    InsightID: req.params.InsightID,
  });

  Insights.getInsById(insights, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
