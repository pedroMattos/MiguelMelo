const nodemail = require('nodemailer');
// const xoauth2 = require('xoauth2');

async function sendEMail(name, mail, phone) {
  const transporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: 'laranjeiraspedro@gmail.com',
      clientId: '8502713826-tp9dpv3ukmb55t7n5s6kke9ostcoo83h.apps.googleusercontent.com',
      clientSecret: 'SQNPdjfspgsEIXGEh3_npbt6',
      refreshToken: '1//04GAsCiZog9A9CgYIARAAGAQSNwF-L9IrfXE_1xCDbV_-XDJAxgnlxyBPmVjb0B_ycV6N1oab-Vyq_OtBRvjcQbneXXeuz9rc208',
      accessToken: 'ya29.a0Ae4lvC1C3-m0eMDhMCtM1e0BD5Xp4m3Arm0qmN1bgGNtg6yJH4TplwPOnf6Os-0qNRfEC89IiAI5Jgs6N2o_G_btdXLmNsltO2bcOADK5-rBFMho1ZEbE9w9_7dxdBRVH7faC8DL6VPAAlyVYzEeuTtiUFxCS721crw',
      expires: 9999999999999,                             
    }
  })
  
  let message = {
    from: `${name} <${mail}>`,
    to: 'laranjeiraspedro@gmail.com',
    subject: 'Contato',
    html: "<h1>Contato Site</h1></br><p>Nome: "+name+"</p></br><p>E-mail: "+mail+"</p></br><p>Telefone: "+phone+"</p>" // html body
  }


  transporter.sendMail(message, function(err, res) {
    if(err) {
      console.warn(err);
    } else {
      console.warn('Mail Sent');
    }
  })

}

module.exports = sendEMail;