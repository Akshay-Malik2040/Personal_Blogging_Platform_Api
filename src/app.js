const express = require('express');
const app = express();
const connectDb = require('./config/db');
const routes=require('./routes/blogRouter')
require('dotenv').config();

const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/api/blogs',routes);

connectDb().then(() => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening at port ${PORT}`);
        })
    } catch (err) {
        console.log("Error "+err.message);
    }
})
