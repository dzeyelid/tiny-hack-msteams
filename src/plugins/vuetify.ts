import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faList, faUser } from '@fortawesome/free-solid-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faBars, faList, faUser)

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'faSvg',
    values: {
      menu: {
        component: FontAwesomeIcon,
        props: {
          icon: ['fas', 'bars'],
        },
      },
    },
  },
})
