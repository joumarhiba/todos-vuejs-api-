// importer la méthode createApp du Vue
import { createApp } from 'vue'
// importer router App componentApp.vue
import App from './App.vue'
import router from './router'
import store from './store'


// calling the  createapp and passing in the main app component & mounted in the div with the id #app
createApp(App).use(store).use(router).mount('#app')
