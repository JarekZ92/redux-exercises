import React from 'react'

import { add, sub } from './Store'

class CounterButtons extends React.Component {
    addHandler = () => {
    }

    subHandler = () => {
    }

    render() {
        return (
            <div>
                <button onClick={() => this.dispatch(add)}>Add</button>
                <button onClick={() => this.dispatch(sub)}>Sub</button>
            </div>
        )
    }
}

export default CounterButtons