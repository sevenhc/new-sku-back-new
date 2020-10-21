const sql = require("./db.js");

const Client = function (client) {
  this.ClientName = client.ClientName;
  this.Company = client.Company;
  this.Email = client.Email;
  this.Mobile = client.Mobile;
  this.IsTrial = client.IsTrial;
  this.ClientPassword = client.ClientPassword;
};
Client.getAll = (result) => {
  sql.query("CALL GetAllClients()", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Categorys: ", res);
    result(null, res);
  });
};

Client.create = (newClient, result) => {
  sql.query(
    "CALL AddClient(?,?,?,?,?,?)",
    [
      newClient.ClientName,
      newClient.Company,
      newClient.Email,
      newClient.Mobile,
      newClient.IsTrial,
      newClient.ClientPassword,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Client: ", { id: res.insertId, ...newClient });
      result(null, { id: res.insertId, ...newClient });
    }
  );
};

Client.update = (newCategory, result) => {
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
Client.delete = (newCategory, result) => {
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
module.exports = Client;
