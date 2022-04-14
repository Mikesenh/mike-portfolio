const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message1 = `
  Hi, ${body.name}\r\n\r\n
  Thank you for reaching out to me. I'll email you back or call you as soon as I can!\r\n\r\n
  Cheers,\r\n
  Michael T
  `;

  const message2 = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Topic: ${body.topic}\r\n
  Message: ${body.message}
  `;

  const data2them = {
    to: `${body.email}`,
    from: "infobot@mikesenh.info",
    subject: `${body.topic} | Info Confirmed`,
    text: message1,
    html: message1.replace(/\r\n/g, "<br>"),
  };

  const data2me = {
    to: `michaeltranperson@gmail.com`,
    from: "infobot@mikesenh.info",
    subject: `${body.message}`,
    text: message2,
    html: message2.replace(/\r\n/g, "<br>"),
  };

  mail.send(data2them);
  mail.send(data2me);

  console.log(body);
  res.status(200).json({ status: "Ok" });
}
