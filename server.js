// Dependencies

const express = require('express');
const path = require('path');
const tableData = require('./data/tableData')
const waitingData = require('./data/waitingListData')

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


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
