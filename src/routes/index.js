const { Router } = require ('express');
const router = Router();

const nodemailer = require('nodemailer');


router.post('/send-email', async(req, res) => {
    const { nombre, email, telefono, mensaje } = req.body;

    contentHTML = `
        <h1></h1>
        <ul>
            <li>Usuario: ${nombre}</li>
            <li>Email Usuario: ${email}</li>
            <li>Telefono: ${telefono}</li>
        </ul>
        <p>${mensaje}</p>
    `;
     const transporter = nodemailer.createTransport({
         host: 'smtp.mailtrap.io',
         port: 587,
         secure: false,
         auth: {
             user: '5ec1dd1bc6d9ce',
             pass: 'ba5fcc34114132'
         },
         tls: {
             rejectUnauthorized: false
         }
     });


    const info = await transporter.sendMail({
        from: '"EnviadorNode Server" <tauren.fc40@gmail.com>', // sender address,
        to: 'tauren.fc40@gmail.com',
        subject: 'Testeo del sender',
        html: contentHTML
    });

    console.log('Mensaje enviado', info.messageId);

    res.redirect('/success.html');
})



module.exports = router;