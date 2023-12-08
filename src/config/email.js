const nodemailer = require('nodemailer');
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
        user: 'no-reply@devnetworks.org',
        pass: 'zYt72Yv4AZT5',
    },
});

module.exports = transporter;
