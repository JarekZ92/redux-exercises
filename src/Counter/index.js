import React from 'react'

class Counter extends React.Component {
    state = {
        value: 7
    }

    addHandler = () => {
        this.setState({
            value: 2
        })
    }

    subHandler = () => {
        this.setState({
            value: 3
        })
    }




    render() {
        return (
            <div>
                My awesome counter: {this.state.value}
                <div>
                    <button onClick={this.addHandler}>Add</button>
                    <button onClick={this.subHandler}>Sub</button>
                </div>
            </div>
        )
    }
}

export default Counter;
