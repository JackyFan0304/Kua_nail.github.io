<template>
    <div id="gallery" class="gallery">
        <h1>Instagram Gallery</h1>
        <div class="images">
            <div class="square" v-for="(image, index) in images" :key="index">
                <a :href="image.link" target="_blank"> <!-- 使用 image.link -->
                    <img :src="image.url" alt="Instagram Image" /> <!-- 使用 image.url -->
                </a>
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
            error: null, // 新增錯誤屬性
            localImages: [], // 本地圖片路徑
            localLinks: [ // 本地圖片對應的 Instagram 貼文鏈接
                { url: '1_ig.jpg', link: 'https://www.instagram.com/p/DA-s5-zyJEn/' },
                { url: '2_ig.jpg', link: 'https://www.instagram.com/p/C3H8-izyGHc/' },
                { url: '3_ig.jpg', link: 'https://www.instagram.com/p/C8GpWX9Snu0/' },
                { url: '4_ig.jpg', link: 'https://www.instagram.com/p/C8GpWX9Snu0/' },
                { url: '5_ig.jpg', link: 'https://www.instagram.com/p/DBQuepKy2hh/' },
                { url: '6_ig.jpg', link: 'https://www.instagram.com/p/C2U1lwuSQK_/' },
                { url: '7_ig.jpg', link: 'https://www.instagram.com/p/C2U1lwuSQK_/' },
                { url: '8_ig.jpg', link: 'https://www.instagram.com/p/C9b_DzsyYH1/' },
                { url: '9_ig.jpg', link: 'https://www.instagram.com/p/C0ZMBrihdQg/' },
                { url: '10_ig.jpg', link: 'https://www.instagram.com/p/C1fEviVS2Ve/' }
            ]
        };
    },
    created() {
        this.loadLocalImages(); // 加載本地圖
        this.fetchInstagramPosts();
    },
    methods: {
        loadLocalImages() {
            const requireContext = require.context('@/assets/images/ig_default', false, /\.(png|jpe?g|gif)$/);
            const images = requireContext.keys().map(key => requireContext(key).default); // 獲取所有圖片的路徑            
            this.localImages = images.slice(0, 10); // 取前 10 張圖片
        },

        async fetchInstagramPosts() {            
            const url = 'http://localhost:5000/api/instagram';  
            try {
                const response = await axios.get(url);
                this.images = response.data.map(post => ({
                    url: post.media_url, // 使用 media_url
                    link: post.permalink // 使用 permalink
                }));
            } catch (error) {
                console.error('Error fetching Instagram posts:', error);                
                // 當無法加載 Instagram 貼文時，使用本地圖片和鏈接
                this.images = this.localLinks.map(link => ({
                    url: require(`@/assets/images/ig_default/${link.url}`).default, // 獲取本地圖片路徑
                    link: link.link // 使用對應的 Instagram 貼文鏈接
                }));
                this.error = '無法加載 Instagram 貼文，已使用本地圖片'; // 更新錯誤信息
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

    a {
        display: block;
        width: 100%;
        height: 100%;
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