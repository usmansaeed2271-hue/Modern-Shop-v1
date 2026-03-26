export default async function handler(req, res) {
    const { id } = req.query; // Look for an ID in the URL
    const BASE_ID = "appuADRVfEmJxfzuV";
    const TABLE_NAME = "Table 1";
    const TOKEN = "patFIMfP2SvLFGMZq.af21e464ff19d9f6882b831d2413ab24b76c54eed29085e5812cec74a5a16cd3"; 

    // If there is an ID, fetch one product. If not, fetch all.
    const airtableUrl = id 
        ? `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}/${id}`
        : `https://api.airtable.com/v0/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`;

    try {
        const response = await fetch(airtableUrl, {
            headers: { "Authorization": `Bearer ${TOKEN}` }
        });
        const data = await response.json();

        res.setHeader('Access-Control-Allow-Origin', '*');
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch from Airtable" });
    }
}