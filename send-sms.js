  const accountSid = 'AC0e81cd580dd50200cdb67be40bb9623d'
  const authToken = '1cd8e30d6e5f594f379dfadfa94e5d06'
  const client = require('twilio')(accountSid, authToken)

  const textMessage = ({customerName, phoneNumber}) =>{
  client.messages
    .create({
      body: `Hi ${customerName}, your table is ready!`,
      from: '+14156920294', // example format: +15017122661
      to: `+1${phoneNumber}` // example format: +15558675310
    })
    .then(message => console.log("Message Sent!"))
}
module.exports = textMessage;
