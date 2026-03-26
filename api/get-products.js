// api/get-products.js
export default async function handler(req, res) {
    // 1. Your private credentials (Replace these with your actual strings)
    const BASE_ID = "appuADRVfEmJxfzuV";
    const TABLE_NAME = "Table%201";
    const TOKEN = "YOUR_ACTUAL_AIRTABLE_TOKEN"; 

    const airtableUrl = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

    try {
        const response = await fetch(airtableUrl, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        // 2. Add CORS headers so your website can talk to this API
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch from Airtable" });
    }
}