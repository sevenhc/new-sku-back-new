var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const subject = "NEWSKU PASSWORD CHANGE";
  const email = req.params.email;
  const newDecryptedMail = Buffer.from(email).toString("base64");

  console.log("Enc-->", newDecryptedMail);
  console.log(
    "reversed-->",
    Buffer.from(newDecryptedMail, "base64").toString()
  );
  const link = "https://www.newsku.co.uk/client/ResetPassword/" + newDecryptedMail;
  var transporter = nodemailer.createTransport({
    host: "smtp.123-reg.co.uk", // hostnamecls
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

<br/><p class="">Hi,<br/>

We have received your request to reset your Newsku password. Just select the link below to create your new password.</p>
<br/>
<a href="${link}" target="_blank">Reset Password</a>
      <p>
      Didn't request a password reset?<br/>
If you didn't ask for a password reset please call us on 01709581433. Calls cost no more than calls to 01 and 02 numbers. If your phone tariff offers inclusive calls to landlines, calls to 03 numbers will be included on the same basis.
      </p>
      <p> The Newsku team</p>
    
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
        message:
          err.message ||
          "Some error occurred while retrieving Exam_cancellation.",
      });
    });
};
