import { DisplayActionTypes } from './displayActions'

const INITIAL = {
    sidebar: false
}

const DisplayReducer = (state = INITIAL, action) => {
    switch(action.type){
        case DisplayActionTypes.SET_SIDEBAR_DISPLAY:
            return {
                ...state,
                sidebar: !state.sidebar
            }
        
        default:
            return state
    }

}


export default DisplayReducer