import React from 'react'

class Counter extends React.Component {
    render() {
        return (
            <div>
                My awesome counter: {this.props.value}
            </div>
        )
    }
}

export default Counter;
