<template>
  <div>
    <nav class="navbar" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave" :class="{ 'visible': showNavbar }">
      <div class="social_media_icon">
        <!-- <a href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
          <img :src="fbIcon" alt="Facebook" />
        </a> -->
        <!-- <a href="https://twitter.com/" target="_blank" aria-label="X (Twitter)">
          <img :src="xIcon" alt="X (Twitter)" />
        </a> -->
        <a href="https://www.instagram.com/kua_nail/" target="_blank" aria-label="Instagram">
          <img :src="igIcon" alt="Instagram" />
        </a>
        <a href="https://linevoom.line.me/user/_dbfa0-_LGz9p875secJNqB1BG7608-DDMP3SwE4" target="_blank" aria-label="LINE">
          <img :src="lineIcon" alt="LINE" />
        </a>
        <!-- <a href="https://www.youtube.com/" target="_blank" aria-label="YouTube">
          <img :src="ytIcon" alt="YouTube" />
        </a> -->
      </div>
      <div class="navigation">
        <ul>
          <li><a href="#app">Home</a></li>        
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- 返回頂部按鈕 -->
    <button class="scroll-to-top" @click="scrollToTop" v-if="showScrollButton">↑</button>
  </div>
</template> 
  
<script>
import fbIcon from '../assets/icon/fb.webp'; // 導入 Facebook 圖標
import xIcon from '../assets/icon/x.webp'; // 導入 X 圖標
import igIcon from '../assets/icon/ig.webp'; // 導入 Instagram 圖標
import lineIcon from '../assets/icon/LINE.svg'; // 導入 LINE 圖標
import ytIcon from '../assets/icon/yt.webp'; // 導入 Youtube 圖標

export default {
  name: 'Navbar',
  data() {
    return {
      igIcon, // 存儲 Instagram 圖標
      lineIcon, // 存儲 LINE 圖標
      fbIcon, // 存儲 Facebook 圖標
      xIcon, // 存儲 X 圖標
      ytIcon, // 存儲 YouTube 圖標
      showNavbar: true, // 控制導航欄顯示狀態
      lastScrollY: 0, // 用於記錄最後的滾動位置
      showScrollButton: false // 控制返回頂部按鈕的顯示
    };
  },
  methods: {
    handleMouseOver() {
      this.showNavbar = true; // 懸停時顯示導航欄
    },
    handleMouseLeave() {
      this.showNavbar = false; // 離開時隱藏導航欄
    },
    handleScroll() {
      const currentScrollY = window.scrollY;// 判斷滾動方向
      if (currentScrollY > this.lastScrollY) {
        // 向下滾動，隱藏導航欄
        this.showNavbar = false;
      } else {
        // 向上滾動，顯示導航欄
        this.showNavbar = true;
      }

      // 控制返回頂部按鈕的顯示
      this.showScrollButton = currentScrollY > 20; // 滾動超過20px時顯示返回頂部按鈕

      // 更新最後的滾動位置
      this.lastScrollY = currentScrollY;        
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 平滑滾動到頂部
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
  
<style scoped lang="scss">
.navbar {
  display: flex; /* 使用 Flexbox 排版 */
  justify-content: center; /* 靠中對齊 */
  align-items: center; /* 垂直居中 */
  position: fixed; /* 固定在頁面最上方 */
  top: 0; /* 初始位置顯示 */
  left: 0; /* 距離左邊為 0 */
  right: 0; /* 距離右邊為 0 */
  width: 100%; /* 寬度為100% */
  padding: 10px; /* 調整內邊距 */
  background-color: #fff; /* 背景顏色 */
  box-shadow: 0px 2px 5px rgba(0,0,0,0.1); /* 添加陰影效果 */
  z-index: 1000; /* 確保在最上層顯示 */
  flex-wrap: wrap; /* 當空間不足時自動換行 */
  transition: opacity 0.3s, visibility 0.3s; /* 平滑過渡效果 */

  &.visible {
    opacity: 1; /* 懸停時顯示 */
    visibility: visible;
    pointer-events: auto; /* 確保可以接收事件 */
  }

  &:not(.visible) {
    opacity: 0; /* 隱藏時透明度設置為0 */
  }

  .social_media_icon {
    display: flex; /* 使用 Flexbox 排版圖標 */
    
    a {      
      margin-right: clamp(10px, 5vw + 1rem, 20px); // 根據畫面寬度調整間距，並設定最小值和最大值
      img {
        width: 24px; /* 調整圖標大小 */
      }
    }
  }

    .navigation {
    display: flex; // 使用 Flexbox 排版
    justify-content: center; // 水平置中
    align-items: center; // 垂直居中（可選）

    ul {
      list-style-type: none; // 去掉列表項的圓點
      padding: 0; // 去掉內邊距
      display: flex; // 使用 Flexbox 排版以保持橫向排列

      li {        
        margin-right: clamp(10px, 5vw + 1rem, 20px); // 根據畫面寬度調整間距，並設定最小值和最大值

        a {
          text-decoration: none; // 去掉下劃線
          color: #333; // 字體顏色
          letter-spacing: 1px; // 增加字母間距
          font-family: 'Noto Sans TC', 'Microsoft JhengHei', sans-serif; // 設置字體
        }
      }
    }
  }
}

.scroll-to-top {
  z-index: 1000;
  position: fixed;
  bottom: 30px; /* 距離底部30px */
  right: 30px; /* 距離右邊30px */
  
  background-color: #007bff; /* 按鈕背景色 */
  color: white; /* 字體顏色 */
  font-size: x-large;
  
  border: none; /* 去掉邊框 */
  
  border-radius: 50% 50% 5% 5%; /* 上半部分圓角，下半部分方角 */
  
  width: 50px; /* 按鈕寬度 */
  height: 60px; /* 按鈕高度 */
  
  padding: 10px; /* 增加內邊距 */

  cursor: pointer; /* 鼠標懸停變為手型 */

  // display: none; /* 初始隱藏 */

   &.visible {
     display: block; /* 顯示按鈕 */
   }

   &:hover {
     background-color: #0056b3; /* 懸停時變色 */
   }
}
</style>