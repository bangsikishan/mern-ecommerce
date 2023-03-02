require('dotenv').config()
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => console.log(`[+] Listening on port ${process.env.PORT}!`));
})
.catch(() => console.log('[-] Unable to connect to the database!'));


app.use('/products', productRoute);