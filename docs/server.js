const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const allowedUsers = ['user1', 'user2', 'user3']; // Список допустимых ников

app.post('/login', (req, res) => {
    const { nickname } = req.body;
    if (allowedUsers.includes(nickname)) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});