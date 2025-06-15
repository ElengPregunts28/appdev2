const nodemailer = require("nodemailer");
const path = require("path");
const pug = require('pug');


const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const SENDER_EMAIL = process.env.SENDER_EMAIL;

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

    const sendBookConfirmationEmail = async (bookDetails, userEmail) => {
        const { title, author, year } = bookDetails;

        if (!title || !author || !year){
            console.error("Missing required email details: title, author, and year" );
        }

        if (!userEmail) {
        console.error("Recipient email address is missing");
        return { success: false, error: "Recipient email address is missing" };
        }

        const templatePath = path.join(__dirname, '..', 'views', 'book.confirmation.pug');
        const compiledFunction = pug.compileFile(templatePath);

        const htmlContent = compiledFunction ({
            bookTitle: title,
            bookAuthor: author,
            bookYear: year,
            userEmail: userEmail,
        });

        const mailOptions = {
            from: `"${SENDER_EMAIL}" <${SENDER_EMAIL}>`,
            to: userEmail,
            subject: `Your book ${title} has been added!`,
            html: htmlContent,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log ("Message sent:", info.messageId);
            return { success: true, 
                     messageId: info.messageId, 
                     previewUrl: nodemailer.getTestMessageUrl(info) 
                    };
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };    

module.exports = sendBookConfirmationEmail;