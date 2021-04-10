// Dependencies

const express = require('express');
const path = require('path');

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


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
