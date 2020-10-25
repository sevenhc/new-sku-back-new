const sql = require("./db.js");

const Client = function (client) {
  this.ClientName = client.ClientName;
  this.Company = client.Company;
  this.Email = client.Email;
  this.ClientID = client.ClientID;
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

Client.update = (newClient, result) => {
  sql.query(
    "CALL EditClient(?,?,?,?,?)",
    [
      newClient.ClientID,
      newClient.ClientName,
      newClient.Company,
      newClient.Email,
      newClient.Mobile,
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

Client.delete = (newClient, result) => {
  console.log("delete client", newClient.ClientID);
  sql.query("CALL DeleteClient(?)", [newClient.ClientID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Delete  client: ", { id: res.insertId, ...newClient });
    result(null, { id: res.insertId, ...newClient });
  });
};

Client.updateSubscription = (newClient, result) => {
  console.log("isTrialUP iD", newClient.ClientID);

  sql.query("CALL UpdateSubscription(?)", [newClient.ClientID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Updated  newClient subscription: ", {
      id: res.insertId,
      ...newClient,
    });
    result(null, { id: res.insertId, ...newClient });
  });
};
Client.logIn = (newClient, result) => {
  console.log("isTrialUP iD", newClient.ClientID);

  sql.query(
    "CALL ClientLogin(?,?)",
    [newClient.Email, newClient.ClientPassword],
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
// Client.logIn = (newClient, result) => {
//   console.log("isTrialUP iD", newClient.ClientID);

//   sql.query(
//     "CALL ClientLogin(?,?)",
//     [newClient.Email, newClient.ClientPassword],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       console.log("Categorys: ", res);
//       result(null, res[0]);
//     }
//   );
// };
module.exports = Client;
