import React from 'react'

class Counter extends React.Component {
    render() {
        return (
            <div>
                My awesome counter: {this.props.value}
                <div>
                    <button>Add</button>
                    <button>Sub</button>
                </div>
            </div>
        )
    }
}

export default Counter;
