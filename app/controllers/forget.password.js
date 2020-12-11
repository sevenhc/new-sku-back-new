var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const subject = "New-Sku Password Reset Request";
  const email = req.params.email;
  const newDecryptedMail = Buffer.from(email).toString("base64");

  console.log("Enc-->", newDecryptedMail);
  console.log("reversed-->", Buffer.from(newDecryptedMail, "base64").toString());
  const link = "http://134.209.29.191/" + newDecryptedMail;
  var transporter = nodemailer.createTransport({
    host: "smtp.123-reg.co.uk", // hostname
    secureConnection: true, // use SSL
    port: 465,
    auth: {
      user: "info@newsku.co.uk",
      pass: "Info@NewSku12",
    },
  });
  // var transporter = nodemailer.createTransport({
  //   host: "smtp.gmail.com", // hostname
  //   secureConnection: true, // use SSL
  //   port: 465,
  //   auth: {
  //     user: "sanotabluehaven123@gmail.com",
  //     pass: "dialog123",
  //   },
  // });

  var mailOptions = {
    from: "info@newsku.co.uk",
    to: email,
    subject: subject,
    text: email,
    html: `<!doctype html>
      <html ⚡4email>
        <head>
          <meta charset="utf-8">
          <style amp4email-boilerplate>body{visibility:hidden}</style>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
        </head>
        <body>
<p class="text-center">Please Update user password</p>
<br/>
        <div>You can change user password following link
        <div>•link --> ${link}</div>
        </body>
      </html>`,
  };

  transporter
    .sendMail(mailOptions)

    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Exam_cancellation.",
      });
    });
};
