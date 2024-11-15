import { createApp } from 'vue';
import App from './App.vue';
import { createMetaManager } from 'vue-meta'; // 引入 createMetaManager
import 'normalize.css';

const app = createApp(App);
const metaManager = createMetaManager(); // 創建 meta 管理器

app.use(metaManager); // 使用 meta 管理器
app.mount('#app');