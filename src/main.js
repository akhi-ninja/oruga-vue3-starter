import { createApp } from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga-next'
import VueApexCharts from "vue3-apexcharts";
import { bulmaConfig } from '@oruga-ui/theme-bulma'
// import '@oruga-ui/theme-bulma/dist/bulma.css'
createApp(App).use(Oruga, bulmaConfig).use(VueApexCharts).mount('#app')