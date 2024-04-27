// vueパッケージからPlugin型をインポートしています。
// Vue.jsプラグインはこの型を満たす必要があります。
import { Plugin } from 'vue';
import { initializeApp } from 'firebase/app';

export const firebasePlugin: Plugin = {
  install(app) {
    const firebaseConfig = {
      apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VUE_APP_FIREBASE_APP_ID,
      measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
    };
    const firebaseApp = initializeApp(firebaseConfig);
    // console.log(firebaseApp);
    
    // Vue.jsアプリケーションのglobalPropertiesに$firebaseプロパティを追加し、
    // Firebaseアプリケーションのインスタンスを格納しています。
    // これにより、Vue.jsアプリケーション内のすべてのコンポーネントでFirebaseを使用できるようになります。
    app.config.globalProperties.$firebase = firebaseApp;
  }
};