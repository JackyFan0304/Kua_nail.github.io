<template>
    <Navbar /> <!-- 引用 Navbar 組件 -->   
    <HeroSection /> <!-- 引用 Hero 組件 -->
    <AboutMe /> <!-- 引用 AboutMe 組件 -->
    <Gallery /> <!-- 引用 Gallery 組件 -->        
    <Contact /> <!-- 引用 Contact 組件 -->
    <Footer /> <!-- 引入 Footer 組件 -->
</template>

<script>
import Navbar from './components/Navbar.vue'; // 導入 Navbar 組件
import HeroSection from './components/Hero.vue'; // 導入 Hero 組件
import AboutMe from './components/About.vue'; // 導入 AboutMe 組件
import Gallery from './components/Gallery.vue'; // 導入 Gallery 組件
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import { useMeta } from 'vue-meta';

export default {
    name: 'App',
    metaInfo: {
        title: 'kua nail',
        meta: [
            { 
                name: 'description', 
                content: 'Kua Nail專注於提供專業的美甲服務，位於台灣台北西門町。我們致力於為客戶打造獨特而美麗的美甲設計。Kua Nail specializes in professional nail services located in Ximending, Taipei, Taiwan, dedicated to creating unique and beautiful nail designs.' 
            },
            { 
                name: 'keywords', 
                content: '美甲, 台北美甲, 西門町, 西門町美甲 , 小蝸, Kua Nail, nail art, Taipei nails' 
            }
        ],
        link: [
            { rel: 'alternate', href: 'https://www.kuanail.com/zh', hreflang: 'zh-TW' },
            { rel: 'alternate', href: 'https://www.kuanail.com/en', hreflang: 'en' },
            { rel: 'alternate', href: 'https://www.kuanail.com/', hreflang: 'x-default' } // 可選的預設版本
        ]
    },
    components: {
        Navbar, // 註冊 Navbar 組件
        HeroSection, // 註冊 Hero 組件
        AboutMe, // 註冊 AboutMe 組件
        Gallery, // 註冊 Gallery 組件
        Contact, 
        Footer, 
    }
}
</script>

<style>
</style>