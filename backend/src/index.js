const express = require("express");
require("dotenv").config();
const loginRoute = require('./routes/loginRoute')
const infoRoute = require('./routes/infoRoute')
const app = express();
const cors = require('cors')
app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use('/api', loginRoute)
app.use('/api', infoRoute)


const bcrypt = require("bcrypt");

// (async () => {
//   const hash = await bcrypt.hash("Swapnil@123", 10);
//   console.log(hash);
// })();


const PORT = process.env.PORT || 8002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
