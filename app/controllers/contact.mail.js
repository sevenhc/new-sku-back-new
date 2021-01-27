var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const subject = "Contact Us";
  const email = req.body.email;
  const name = req.body.name;
  const message = req.body.message;

  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465,
    auth: {
      user: "chatplatformqna@gmail.com",
      pass: "qnachatplatform",
    },
  });

  // var transporter = nodemailer.createTransport({
  //   host: "smtp.123-reg.co.uk", // hostname
  //   secureConnection: true, // use SSL
  //   port: 465,
  //   auth: {
  //     user: "info@newsku.co.uk",
  //     pass: "Info@NewSku12",
  //   },
  // });

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
    from: "chatplatformqna@gmail.com",
    to: "chatplatformqna@gmail.com",
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
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
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
        message: err.message || "Some error occurred while retrieving email.",
      });
    });
};
