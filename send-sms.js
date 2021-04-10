  const accountSid = ''
  const authToken = ''
  const client = require('twilio')(accountSid, authToken)

  const textMessage = ({customerName, phoneNumber}) =>{
  client.messages
    .create({
      body: `Hi ${customerName}, your table is ready!`,
      from: '', // example format: +15017122661
      to: `+1${phoneNumber}` // example format: +15558675310
    })
    .then(message => console.log("Message Sent!"))
}
module.exports = textMessage;
