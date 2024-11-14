<template>
    <div id="contact" class="contact">
        <h1>Contact Us</h1>
        <p>If you need more info, please contact us.</p>
        <div class="social-links">
            <a :href="lineUrl" target="_blank" class="social-button line-button">
                <img src="@/assets/images/LINE_logo.png" alt="LINE" />
            </a>
            <a :href="instagramUrl" target="_blank" class="social-button ig-button">
                <img src="@/assets/images/Instagram_logo.png" alt="Instagram" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lineUrl: 'https://linevoom.line.me/user/_dbfa0-_LGz9p875secJNqB1BG7608-DDMP3SwE4',
            instagramUrl: 'https://www.instagram.com/kua_nail/'
        };
    }
};
</script>

<style lang="scss" scoped>
.contact {
    position: relative; 
    text-align: center;
    padding: 20px;
    z-index: 5;
    font-family: 'Noto Sans TC', sans-serif; /* 使用繁黑體字體 */
    background-color: rgba(255, 255, 224, 0.8); /* 淺黃色背景，帶透明度 */
    backdrop-filter: blur(10px); /* 添加毛玻璃效果 */ 
}

.social-links {
    margin-top: 20px;
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 中央對齊 */
}

.social-button {
    width: 300px; /* 固定寬度 */
    height: 300px; /* 固定高度 */
    overflow: hidden; /* 隱藏超出部分 */
    margin: 10px; /* 圖片之間的間距 */
    border-radius: 15px; /* 圓角設置 */
    display: flex; /* 使用 Flexbox 使圖片居中 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
}

.social-button img {
    width: 100%; /* 圖片寬度自適應按鈕大小 */
    height: auto; /* 高度自適應，保持比例 */
}
</style>