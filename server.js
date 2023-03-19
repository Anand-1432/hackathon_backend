const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

/////////////////// routes ////////////////////
const state = require('./routes/stateRoutes');
const city = require('./routes/cityRoutes');
const soil = require('./routes/soilRoutes');
const crops = require('./routes/cropsRoute');

dotenv.config();

const port = process.env.PORT || 8080;
require('./database/conn');

app.use(cors());
app.use(bodyParser.json());


////////////////////////
app.use(city);
app.use(state);
app.use(soil);
app.use(crops);
/////////////////////////


app.get('/',(req,res)=>{
  res.send("hackathon backend");
});

app.listen(port, ()=>{
    console.log(`listening at port ${port}`);
})
