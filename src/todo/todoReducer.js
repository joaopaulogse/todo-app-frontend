const INITIAL_STATE = { description:'', list:[] }

export default (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case 'DESCRIPTION_CHANDED':
            return {...state, description:action.payload }
        case 'TODO_SEARCHED':
            return {...state, list:action.payload.data }
        case 'TODO_CLEAR':
            return {... state, description:''}
        default:
            return state
    }
}