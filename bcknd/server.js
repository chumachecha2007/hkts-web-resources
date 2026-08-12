const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let currplrs = 0;
const SECRET_KEY = "ldfewbi423$n7FBFJHDB2Mljkng";

app.post('/api/roblox-stats', (req, res) => {
    const { secret, players } = req.body;

    if (!secret || secret !== SECRET_KEY) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    currplrs = Number(players);
    console.log(`updated online: ${currplrs}`);

    res.status(200).json({ status: "success" });
});

app.get('/', (req, res) => {
    res.send(`
        <style>
            body { font-family: sans-serif; text-align: center; margin-top: 50px; background: #f4f4f9; }
            .card { background: white; padding: 30px; display: inline-block; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            h1 { color: #333; }
            .online { font-size: 48px; color: #00bcd4; font-weight: bold; }
        </style>
        <div class="card">
            <h1>hkts stats</h1>
            <p>curr online:</p>
            <div class="online">${currentPlayers}</div>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
});
