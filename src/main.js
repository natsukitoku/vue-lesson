import { createApp } from "vue";
import App from "./App.vue";
import Example from "./Example.vue";
const app = createApp(App);
const exampleApp = createApp(Example);
app.mount('#app');
exampleApp.mount('#example');
