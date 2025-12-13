require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = "8229688155:AAFGOL61nBlTGp05CGhxjwVUxhoC9MQeiyM"
const CHAT_ID = 8229688155

app.post('/api/send', async (req, res) => {
    try {
        const { sunush, maalymat, dattan, idea } = req.body;
        const text = `📌 Жаңы билдирүү:
Сунуш: ${sunush}
Маалымат: ${maalymat}
Даттануу: ${dattan}
Идея: ${idea}`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        const resp = await axios.post(url, {
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'HTML',
        });

        res.json({ ok: true, telegram: resp.data });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ ok: false, error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
