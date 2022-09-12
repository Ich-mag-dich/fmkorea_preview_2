import { createApp } from "vue";
import App from './App.vue'

createApp(App).mount('#app')
function vueMount() {
  console.log("hello world??")
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onLoaded(this: Window, _event: Event): void {
  vueMount()
}












window.addEventListener('load', onLoaded, false)