const nodemailer = require("nodemailer");
const email = process.env.EMAIL;
const emailPassword = process.env.EMAIL_PASSWORD;

module.exports = class Mail {
  async sendMail(correo, token) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: email, // generated ethereal user
        pass: emailPassword, // generated ethereal password
      },
    });

    await transporter.sendMail({
      from: `Recuperación de contraseña ${email}`, // sender address
      to: correo, // list of receivers
      subject: "Recuperación de contraseña ✔", // Subject line
      text: `Ingrese para cambiar su contraseña: http://localhost:3000/cambiar-password/${token}`  // plain text body
    });
  }
}