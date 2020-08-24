import { getAccessorType } from 'typed-vuex'

import * as auth from '@/store/auth'

export const accessorType = getAccessorType({
  modules: {
    auth,
  },
})
