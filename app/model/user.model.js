const sql = require("./db.js");

const Client = function (client) {
  this.UserName = client.UserName;
  this.Email = client.Email;
  this.Password = client.Password;
  this.UserID = client.UserID;
};
Client.getAll = (result) => {
  sql.query("CALL GetAllUsers()", (err, res) => {
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
    "CALL AddUser(?,?,?)",
    [newClient.UserName, newClient.Email, newClient.Password],
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

Client.update = (newClient, result) => {
  sql.query(
    "CALL EditUser(?,?,?)",
    [newClient.UserID, newClient.UserName, newClient.Email],
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
Client.updatePassword = (newClient, result) => {
  sql.query(
    "CALL UpdatePassword(?,?)",
    [newClient.Email, newClient.ClientPassword],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created Client: ", { res });
      result(null, { res });
    }
  );
};

Client.delete = (newClient, result) => {
  console.log("delete client", newClient.ClientID);
  sql.query("CALL DeleteUser(?)", [newClient.UserID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Delete  client: ", { id: res.insertId, ...newClient });
    result(null, { id: res.insertId, ...newClient });
  });
};

Client.logIn = (newClient, result) => {
  console.log("isTrialUP iD", newClient.ClientID);

  sql.query(
    "CALL UserLogin(?,?)",
    [newClient.Email, newClient.Password],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res[0].Message == "Username or Password invalied.") {
        console.log("error-pass");
      }
      console.log("Categorys: ", res);
      result(null, res[0]);
    }
  );
};
module.exports = Client;
