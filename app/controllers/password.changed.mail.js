var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const subject = "YOU NOW HAVE A NEW PASSWORD";
  const email = req.body.email;

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
<p class="text-center">---------------------------------</p>
<br/><p class="text-center">Hi,<br/>

Just to let you know that your Newsku account password has changed.<br/>
      <p>
      If you didn't change your password, please call us on 01709581433. Calls cost no more than calls to 01 and 02 numbers. If your phone tariff offers inclusive calls to landlines, calls to 03 numbers will be included on the same basis.
      Error! Filename not specified.<br/>
     
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
