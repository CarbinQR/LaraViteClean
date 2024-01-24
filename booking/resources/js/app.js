// import './bootstrap';
import {createApp} from 'vue'
import App from "./src/App.vue";
// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure your project is capable of handling css files
import { aliases, md } from 'vuetify/iconsets/md'


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'md',
        aliases: {
            ...aliases,
            product: 'md-dropbox', //<v-icon icon="$product" />
            support: 'md-lifebuoy',
        },
        sets: {
            md,
        },
    },
})

createApp(App)
    .use(vuetify)
    .mount('#app')
