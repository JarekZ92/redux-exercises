import React from 'react'


class Counter extends React.Component {
    state = {
        value: 7
    }



    render() {
        return (
            <div>
                My great counter:{this.state.value}
            </div>
        )
    }
}

export default Counter