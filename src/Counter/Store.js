
const ADD = 'ADD'
const SUB = 'SUB'
const RESET = 'RESET'
// const ADD10 = 'ADD10'

export const add = (number) => (
    {
        type: 'ADD',
        number
    }
)

export const sub = (number) => (
    {
        type: 'SUB',
        number
    }
)

export const reset = (number) => (
    {
        type: 'RESET'
    }
)

// export const add10 = () => (
//     {
//         type: 'ADD10'
//     }
// )

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
                counterValue: state.counterValue + action.number
            }
        case SUB:
            return {
                ...state,
                counterValue: state.counterValue - action.number
            }
            case RESET:
            return {
                ...state,
                counterValue: 0
            }
        // case ADD10:
        //     return {
        //         ...state,
        //         counterValue: state.counterValue + 10
        //     }
        default:
            return state
    }
}

export default reducer
