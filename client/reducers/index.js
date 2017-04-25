import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import common from "./commonReducer"
import twitter from "./twitterReducer"

export default combineReducers({
    routing: routerReducer,
    common,
    twitter
})
