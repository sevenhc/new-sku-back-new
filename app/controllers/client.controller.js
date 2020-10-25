const Client = require("../model/client.model");
const uploadFile = require("../middleware/upload");

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log("name", req.body.ClientName);
  const client = new Client({
    ClientName: req.body.ClientName,
    Company: req.body.Company,
    Email: req.body.Email,
    Mobile: req.body.Mobile,
    IsTrial: req.body.IsTrial,
    ClientPassword: req.body.ClientPassword,
  });

  Client.create(client, (err, data) => {
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
  const client = new Client({
    ClientID: req.body.ClientID,
    ClientName: req.body.ClientName,
    Company: req.body.Company,
    Email: req.body.Email,
    Mobile: req.body.Mobile,
  });

  Client.update(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};
exports.updatePassword = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  var emailNew = req.params.email;
  console.log("reversed-->", Buffer.from(emailNew, "base64").toString());
  var emailAddress = Buffer.from(emailNew, "base64").toString();
  const client = new Client({
    Email: emailAddress,
    ClientPassword: req.body.ClientPassword,
  });

  Client.updatePassword(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    else res.send(data);
  });
};

exports.getAll = (req, res) => {
  Client.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else res.send(data[0]);
  });
};

exports.updateSubscription = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const client = new Client({
    ClientID: req.body.ClientID,
  });

  Client.updateSubscription(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
exports.logIn = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  const client = new Client({
    Email: req.body.Email,
    ClientPassword: req.body.ClientPassword,
  });

  Client.logIn(client, (err, data) => {
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
  const client = new Client({
    ClientID: req.params.ClientID,
  });
  Client.delete(client, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the SubCustomer.",
      });
    else res.send(data);
  });
};
