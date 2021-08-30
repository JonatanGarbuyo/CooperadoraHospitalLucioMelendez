const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    Message: ${req.body.message}\r\n
    `
  const data = {
    to: "cooperadoraluciomelendez@gmail.com",
    from: "cooperadoraluciomelendez.dev@gmail.com",
    subject: `Nuevo mensaje desde: ${req.body.email}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />")
  }

  mail
  .send(data)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

  res.status(200).json({status: "OK"})
}