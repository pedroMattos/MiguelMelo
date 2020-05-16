const nodemailer = require("nodemailer");

/**
 * Método envia os dados do form para um email
 * @param {{}} userData -dados do usuário passados pelo form
 */
async function sendEmail(userData) {
  var emailDestino = "pedro@dnadevendas.com.br";
  var server = {};
  server.host = "smtp.sendgrid.net";
  server.port = 587;//465;//sendgrid
  server.user = "apikey";
  server.pass = "senhadonegocio";

  // define as configurações com o servidor
  let transporter = nodemailer.createTransport({
    host: server.host,
    port: server.port,
    secure: server.secure, // true for 465, false for other ports
    auth: {
      user: server.user,
      pass: server.pass 
    }
  });

  //transformar object em string
  let objectString = "";
  for (const key in userData) {
    objectString += "<p>" + key + ": " + userData[key] +"</p>";
  }

  //constroi menssagem
  let message = {
    from: emailDestino, // sender address
    to: emailDestino, // list of receivers
    subject: "Nova subscrição no site de Miguel Mello", // Subject line
    html: "<h1>Form do site</h1><h2>Segue subscrição do site</h2>" + objectString // html body
  };

  // envia email
  transporter.sendMail(message, function(err, info){
    if(err) console.log('Erro ao enviar email => ', err);
    console.log('Email enviado => ', info);
  });
}

module.exports = sendEmail;