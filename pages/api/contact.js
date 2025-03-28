import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body;

  try {
    // ✅ Connect to MongoDB
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();
    await db.collection("contacts").insertOne({ name, email, phone, message, createdAt: new Date() });
    client.close();

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
