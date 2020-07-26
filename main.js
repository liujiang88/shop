import Vue from 'vue'
import App from './App'
import apiReq from 'util/api.js'
Vue.prototype.$apiReq=apiReq

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
