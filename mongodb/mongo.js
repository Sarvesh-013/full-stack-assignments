const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://sarvesh:sarvesh13@cluster0.r7iag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToCluster() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Successfully connected to MongoDB Atlas!");
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
    } finally {
        // Optionally, you can close the connection immediately
        await client.close();
    }
}

// Call the connect function
connectToCluster().catch(console.dir);