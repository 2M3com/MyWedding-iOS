import { combineReducers } from 'redux'

import routes from 'src/reducers/routes.js'
import weddings from 'src/reducers/weddings.js'

export default combineReducers({
  routes,
  weddings
})
