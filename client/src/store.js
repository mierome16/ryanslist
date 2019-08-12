import { createStore } from 'redux'

import ryanslistReducer from './reducers/ryanslist.reducer'

const store = createStore(ryanslistReducer)

export default store