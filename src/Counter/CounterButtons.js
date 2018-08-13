import React from 'react'

class CounterButtons extends React.Component {
    addHandler = () => {

    }

    subHandler = () => {

    }

    render() {
        return (
            <div>
                <button onClick={this.addHandler}>Add</button>
                <button onClick={this.subHandler}>Sub</button>
            </div>
        )
    }
}

export default CounterButtons