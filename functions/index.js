const admin = require('firebase-admin');
const functions = require('firebase-functions');
const niceware = require('niceware');

admin.initializeApp(functions.config().firebase);

exports.recordQuestion = functions.https.onRequest((req, res) => {
  if (req.method !== 'POST') {
    res.status(400).send('You need to send a POST request.');
    return;
  }
  if (!req.body) {
    res.status(400).send('Please attach question to POST body.');
    return;
  }

  const question = req.body;
  const timestamp = Date.now();
  const receipt = niceware.generatePassphrase(4).join(' ');

  admin.database().ref('/questions').push({ question, timestamp, receipt }).then(() => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send(`Thanks for sending a letter! Your receipt is "${receipt}."`);
  });
});
