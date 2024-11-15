
// Importing mongoose library along with Connection type from it
import mongoose, { Connection } from "mongoose";



import { env } from "process";

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

// Function to establish a connection to MongoDB
export async function connectToMongoDB() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    
    const cnx = await mongoose.connect(env.NEXT_PUBLIC_MONGODB_URI ? env.NEXT_PUBLIC_MONGODB_URI :'mongodb+srv://windows_maliek:BdlEsLU3jZ0BM5Ju@cosmicgemsreality.toqr4kq.mongodb.net/maliek-davis?retryWrites=true&w=majority&appName=CosmicGemsReality');
    console.log(env.NEXT_PUBLIC_MONGODB_URI);
    
    // Cache the connection for future use
    cachedConnection = cnx.connection;
    // Log message indicating a new MongoDB connection is established
    console.log("New mongodb connection established");
    // Return the newly established connection
    return cachedConnection;
  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}