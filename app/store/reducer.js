import { combineReducers } from 'redux'

import session from './session'
import chat from './chat'
import transaction from './transaction'

export default combineReducers({
  session,
  chat,
  transaction
})
