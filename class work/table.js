const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://sarvesh:sarvesh13@cluster0.r7iag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a new MongoClient
const client = new MongoClient(uri);

async function createEmployeeCollection() {
    try {
        // Connect the client to the MongoDB server
        await client.connect();
        console.log("Connected to MongoDB Atlas!");

        // Access the database
        const database = client.db("<database_name>"); // Replace with your database name

        // Access or create the 'employees' collection
        const employeeCollection = database.collection("employees");

        // Insert example employee data
        const employeeData = [
            { name: "John Doe", position: "Software Engineer", salary: 80000, department: "IT" },
            { name: "Jane Smith", position: "Project Manager", salary: 95000, department: "Management" },
            { name: "Alice Johnson", position: "Data Scientist", salary: 110000, department: "Data Science" },
            { name: "Bob Brown", position: "UX Designer", salary: 70000, department: "Design" }
        ];

        // Insert multiple employee documents
        const result = await employeeCollection.insertMany(employeeData);

        console.log(`${result.insertedCount} employee records added!`);

    } catch (err) {
        console.error("Error while creating employee collection:", err);
    } finally {
        // Close the connection
        await client.close();
        console.log("Connection closed.");
    }
}

// Run the function
createEmployeeCollection().catch(console.dir);