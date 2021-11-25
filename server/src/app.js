const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const adminRouter = require('./routes/admin/admin.router');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
// app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/admin', adminRouter);
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });
app.get('/', (req, res) => {
    res.status(200).send('Its working');
});

module.exports = app;