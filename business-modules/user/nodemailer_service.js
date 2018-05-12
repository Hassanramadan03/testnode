const nodemailer = require('nodemailer'),
    creatJwt = require('../../models/utlis').createJWT;
module.exports = {
    sendMail
}

async function sendMail(client_email, client_token) {
    console.log(client_token);
    
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: 'hassanramadan03@gmail.com',
                pass: 'HassanElsakndry&123'
            },
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailOptions = {
            from: '<admin@vacationtrip.com>',
            to: client_email,
            subject: 'Applying for vacation trip',
            html: `<h1> 
                        thanks for registration plz check this link below to   
                        <a href='http://localhost:8000/user/verification/${client_token}'>Verify</a>
            
                   </h1>`
        };
        return new Promise(async (resolve, reject) => {
            const response = await transporter.sendMail(mailOptions);
            if (response)
                resolve(response)
        })
    } catch (error) {
        reject(error)
    }
}



