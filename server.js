const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());


app.get('/api/topstories', async (req, res) => {
    try {
        const response = await axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=004Jn7TyRAKAdaWF3uNZ8Y8i2v6shDhH');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
