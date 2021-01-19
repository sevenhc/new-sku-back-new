var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const subject = "NewSku Subsciption";
  const email = req.params.email;
  const message = "Subscription successfully activated";

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
        <p>Thank you for continuing your subscription with NewSku. Your new subscription end date is now < enter new date automatically > 

        You will be notified 2 weeks prior to subscription ending </p>
        <br/>
        <p>The NewSku team </p>
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
          "Some error occurred while retrieving email.",
      });
    });
};
