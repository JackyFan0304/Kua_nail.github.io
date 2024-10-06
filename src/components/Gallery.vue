<template>
    <div class="gallery">
        <h1>Instagram Gallery</h1>
        <div class="images">
            <div class="square" v-for="(image, index) in images" :key="index">
                <img :src="image" alt="Instagram Image" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            images: [], // 用來存儲圖片 URL
        };
    },
    created() {
        this.fetchInstagramPosts();
    },
    methods: {
        async fetchInstagramPosts() {
            const url = 'http://localhost:5000/api/instagram'; // 使用本地地址

            try {
                const response = await axios.get(url);
                this.images = response.data; // 獲取圖片 URL
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.gallery {
    position: relative; // 確保有定位
    z-index: 4; // 設置較高的 z-index
    text-align: center;
    font-family: 'Noto Sans TC', sans-serif; /* 使用繁黑體字體 */
    padding: 20px; // 添加內邊距
    background: linear-gradient(45deg, #ff6b6b, #f7d94c, #6bc8ff, #6bff6b); // 初始漸變背景
    background-size: 400% 400%; // 擴大漸層範圍
    animation: gradient-animation 15s ease infinite; // 添加動畫
}

@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.images {
    display: flex;
    flex-wrap: wrap; // 允許換行
    justify-content: center; // 中央對齊
}

.square {
    width: 300px; // 桌面版固定寬度
    height: 300px; // 桌面版固定高度
    overflow: hidden; // 隱藏超出部分
    margin: 10px; // 圖片之間的間距
    border-radius: 15px; // 圓角設置，根據需要調整大小

    img {
        width: 100%; // 寬度100%
        height: 100%; // 高度100%
        object-fit: cover; // 確保圖片填滿容器且不變形
        object-position: center; // 圖片居中顯示
    }
}

/* 移動裝置 */
@media (max-width: 768px) { 
    .square {
        width: 150px; // 移動裝置時固定寬度
        height: 150px; // 移動裝置時固定高度
    }

    .images {
        max-width: calc(150px * 3 + 20px); // 最多顯示3張，每張150px，加上間距
        margin: 0 auto; // 中央對齊
    }

    /* 隱藏多餘的圖片 */
    .square:nth-child(n+7) { 
        display: none; // 隱藏第7張及以後的圖片
    }
}

@media (max-width: 349px) { 
    .images {
        max-width: calc(150px * 2 + 20px); // 更小屏幕時最多顯示2張，每張150px，加上間距
    }
}
</style>