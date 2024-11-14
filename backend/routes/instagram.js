const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config(); // 導入 dotenv 並加載環境變數

router.get('/', async (req, res) => {
    const accessToken = process.env.ACCESS_TOKEN; // 從環境變數中獲取訪問令牌
    const userId = process.env.USER_ID; // 從環境變數中獲取用戶 ID
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink&limit=10&access_token=${accessToken}`;

    try {
        const response = await axios.get(url);
        const posts = response.data.data;

        // 返回圖片 URL 和貼文 URL
        const images = posts.map(post => ({
            media_url: post.media_url,
            permalink: post.permalink // 獲取貼文 URL
        }));

        res.json(images);
    } catch (error) {
        console.error('Error fetching Instagram posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

module.exports = router;