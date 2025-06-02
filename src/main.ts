/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */




// Plugins
import { registerPlugins } from '@/plugins'
import Swal from "sweetalert2";


// Components
import App from './App.vue'


// Composables
import { createApp } from 'vue'


// Styles
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
