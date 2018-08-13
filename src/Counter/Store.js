
const ADD = 'ADD'
const SUB = 'SUB'
const ADD10 = 'ADD10'

export const add = () => (
    {
        type: 'ADD'
    }
)

export const sub = () => (
    {
        type: 'SUB'
    }
)

export const add10 = () => (
    {
        type: 'ADD10'
    }
)

const INITIAL_STATE = {
    counterValue: 99,
    open: false,
    list: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case SUB:
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        case ADD10:
            return {
                ...state,
                counterValue: state.counterValue + 10
            }
        default:
            return state
    }
}

export default reducer
