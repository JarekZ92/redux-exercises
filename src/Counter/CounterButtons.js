import React from 'react'
import { connect } from 'react-redux'

import { add, sub, add10 } from './Store'


const mapDispatchToProps = (dispatch) => ({
    isaAdd: () => dispatch(add()),
    isaSub: () => dispatch(sub()),
    isaAdd10: () => dispatch(add10())
})


class CounterButtons extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.isaAdd}>Add</button>
                <button onClick={this.props.isaSub}>Sub</button>
                <button onClick={this.props.isaAdd10}>Add 10</button>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(CounterButtons)