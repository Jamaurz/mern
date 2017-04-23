import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import common from "./commonReducer"

export default combineReducers({
    routing: routerReducer,
    common
})
