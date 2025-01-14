const express = require('express');
const app = express();
const credentials = require('./middleware/credentials.js');
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;

// Corrected MongoDB connection URL
const CONNECTION_URL = "mongodb+srv://mahmayur06:Mayur123@cluster0.pxcsm3r.mongodb.net/food?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.error(err);
    }
}
connectDB()

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/', require('./routers/foodAvailability.js'));
app.use('/', require('./routers/restaurants.js'))
app.use('/', require('./routers/ngo.js'))
app.use('/', require('./routers/volunteers.js'))

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
