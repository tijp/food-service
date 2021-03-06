// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Sends an email confirmation when a user changes his mailing list subscription.
exports.sendEmailConfirmation = functions.firestore.document('orders/{id}').onCreate((snap, context) => {
  const val = snap.data();

  const mailOptions = {
    from: '"Spammy Corp." <noreply@firebase.com>',
    to: 'tim.ijpenga@gmail.com',
  };

  // Building Email message.
  mailOptions.subject = 'Nieuwe Bestelling Ontvangen!';
  mailOptions.text = `Dit is de nieuwe bestelling: ${val}`;

  return mailTransport.sendMail(mailOptions)
    .then(() => console.log('New order email sent to:', mailOptions.to))
    .catch((error) => console.error('There was an error while sending the email:', error));
});