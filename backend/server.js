const express = require('express');
const cors = require('cors');
const instagramRoutes = require('./routes/instagram');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api/instagram', instagramRoutes); // 設置 Instagram 路由

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});