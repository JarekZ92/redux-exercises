
const add = () => (
    {
        type: 'ADD'
    }
)

const sub = () => (
    {
        type: 'SUB'
    }
)

const INITIAL_STATE = {
    counterValue: 99,
    open: false,
    list: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action, type) {
        case 'ADD':
            return {
                counterValue: state.counterValue + 1,
                open: false,
                list: []
            }
            return Object.assign(
                {}, state, { counterValue: state.counterValue + 1 })
            return { ...state, counterValue: state.counterValue + 1 }
        case 'SUB':
            return {}
        default:
            return state

    }
}
