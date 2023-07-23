import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faTableColumns, faGaugeHigh, faCartShopping, faEye, faQuestion, faExclamation, faMoneyCheckDollar, faPhoneFlip, faRightFromBracket, faBars ,faXmark} from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret, faTableColumns, faGaugeHigh, faCartShopping, faEye, faQuestion, faExclamation, faMoneyCheckDollar, faPhoneFlip, faRightFromBracket, faBars , faXmark);


createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')