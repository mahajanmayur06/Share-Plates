
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

module.exports = connectDB