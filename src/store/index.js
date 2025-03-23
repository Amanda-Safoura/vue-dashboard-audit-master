import { createStore } from 'vuex'
import auth from './modules/auth'
import audit from './modules/audit'

const store = createStore({
  modules: {
    auth,
    audit
  }
})

export default store
