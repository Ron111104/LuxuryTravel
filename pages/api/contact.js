import { MongoClient } from "mongodb"; 

export default async function handler(req, res) {
  console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debugging
  
  if (!process.env.MONGODB_URI) {
    return res.status(500).json({ message: "MONGODB_URI is not set" });
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    await db.collection("contacts").insertOne({ ...req.body, createdAt: new Date() });
    client.close();
    
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    return res.status(500).json({ message: "Database Connection Failed" });
  }
}
