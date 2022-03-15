const express  = require('express');
const server = express();

app.use(express.json());

const send_mail = []

server.post('/enviar_email', (req, res) => {
    const {email, assunto, corpo_msg} = req.body;

    const msg = {
        email,
        assunto,
        corpo_msg
    }

    send_mail.push(msg);

    console.log(send_mail)
    return res.status(200).json(send_mail);
    

})

server.listen(8000, () => {
    console.log('servidor on')
});

