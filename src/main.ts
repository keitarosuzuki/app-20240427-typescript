import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'; // BootstrapのCSSファイルをインポート
import 'bootstrap'; // BootstrapのJavaScriptをインポート

// .ts拡張子でのインポートは、TypeScriptの設定で
// allowImportingTsExtensionsが有効にされている場合にのみ許可されるということを示しています。
// 解決するためには、.ts拡張子をインポートパスから削除する。
import { firebasePlugin } from './firebasePlugin';

createApp(App).use(router).use(firebasePlugin).mount('#app')
