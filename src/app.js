const express = require('express');
const app = express();
const connectDb = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 3000

connectDb().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`);
        })
    } catch (err) {
        console.log(err.message);
    }
})
