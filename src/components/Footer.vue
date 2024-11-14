<template>
    <footer class="footer">
        <p>© {{ currentYear }} Jacky Fan & Kua nail. All rights reserved.</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear() // 獲取當前年份
        };
    }
};
</script>

<style scoped>
.footer {
    position: relative; 
    text-align: center; /* 中央對齊 */
    padding: 5px; /* 添加內邊距 */
    background-color: #f1f1f1; /* 背景顏色 */
    z-index: 6;
}
</style>