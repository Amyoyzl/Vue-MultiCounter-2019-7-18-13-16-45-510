import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        countSum: 0
    },
    mutations: {
        add(state) {
            state.countSum++;
        },
        sub(state) {
            state.countSum--;
        },
        subNumber(state, number) {
            state.countSum -= number;
        }
    }
})

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')