import nodemailer from 'nodemailer';

export default function (req, res){
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cooperadoraluciomelendez.dev@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
    debug: true, // show debug output
    logger: true // log information in console
  })

  const message = `
    Name: ${req.body.name}\r\n
    Email: ${req.body.email}\r\n
    Message: ${req.body.message}\r\n
    `

  const mailData = {
    from: 'cooperadoraluciomelendez.dev@gmail.com',
    to: 'cooperadoraluciomelendez@gmail.com',
    // to: 'jonatangarbuyo@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: message,
    html: message.replace(/\r\n/g, "<br />")
  }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  res.status(200).json({status: "OK"})
}