const express = require('express');
const app = express();
const PORT = 5000;

app.get('/data', (req, res) => {
    res.json({ message: "Hello from Backend!", timestamp: new Date() });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
