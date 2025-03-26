const express = require("express");
const cors = require("cors");
const fs = require("fs");
const ExcelJS = require("exceljs");

const app = express();
app.use(express.json());
app.use(cors());

const FILE_PATH = "customer_data.xlsx";

app.post("/submit-form", async (req, res) => {
    console.log("✅ Received form submission");
    console.log("📩 Received data:", req.body);

    const { name, email, phone, message } = req.body;

    try {
        let workbook = new ExcelJS.Workbook();
        let worksheet;

        if (fs.existsSync(FILE_PATH)) {
            console.log("📂 File exists. Loading...");
            await workbook.xlsx.readFile(FILE_PATH);
            worksheet = workbook.getWorksheet("Customers");
        }

        if (!worksheet) {
            console.log("⚠️ Worksheet 'Customers' not found. Creating a new one.");
            worksheet = workbook.addWorksheet("Customers");
            worksheet.columns = [
                { header: "Name", key: "name", width: 20 },
                { header: "Email", key: "email", width: 30 },
                { header: "Phone", key: "phone", width: 15 },
                { header: "Message", key: "message", width: 50 },
            ];
        }

        // Append new row
        worksheet.addRow({ name, email, phone, message });

        console.log(`📄 Total rows in sheet after adding: ${worksheet.rowCount}`);

        // Ensure proper file writing to avoid locking issues
        await workbook.xlsx.writeFile(FILE_PATH);
        console.log("✅ Data written successfully!");

        res.status(200).json({ success: true, message: "Data saved successfully!" });
    } catch (error) {
        console.error("❌ Error writing to Excel:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

app.get("/", (req, res) => {
    res.send("LuxuryTravel Backend is Running!");
});

app.listen(5001, () => console.log("🚀 LuxuryTravel backend is running on port 5001"));
