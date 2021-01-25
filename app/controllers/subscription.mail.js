var nodemailer = require("nodemailer");
exports.mail = (req, res) => {
  const subject = "NewSku Subsciption";
  const email = req.params.email;
  const message = "Subscription successfully activated";
  const clientname = req.params.ClientName;
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
        <div>
          <img src="" alt="NewSku" style="height:60px; margin:10px auto 30px auto;"/>
          <div>
          Hi Steven,
          Thanks for subcribing to our 7 day trial.
          Your free trial will end on 23/3/21.
          We will be intouch for your feedback and hopefully discuss
          you joining on a full subscription.
          If you need support please email us at: info@newsku.co.uk
          Sincerely,
          NewSku Team
          Connect with us.
          <dip>
        <div>

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
