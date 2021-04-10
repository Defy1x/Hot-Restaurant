// Dependencies

const express = require('express');
const path = require('path');
const tableData = require('./data/tableData')
const waitingData = require('./data/waitingListData')
const textSent = require('./send-sms')
const MessagingResponse = require('twilio').twiml.MessagingResponse;


console.log(tableData)
console.log(waitingData)

// Sets up the Express App

const app = express();
 var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'public/tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'public/reserve.html')));

app.get('/api/tables', (req, res) => res.json(tableData));

app.get('/api/waitlist', (req, res) => res.json(waitingData));


app.post('/api/tables', (req, res) => {
  // req.body hosts is equal to the JSON post sent from the user
  //this is when the user submits we are grabbing the data is inside the request body
const newReservation = req.body;

  if (tableData.length < 5){
    tableData.push(newReservation)
    res.json(true)
  }
  else {
    waitingData.push(newReservation)
    res.json(false)
  }

  textSent(req.body);
  console.log(req.body.phoneNumber);

});

app.post('/api/clear', (req, res) => {
  tableData.length = 0;
  waitingData.length = 0;

  res.json({});
});

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
