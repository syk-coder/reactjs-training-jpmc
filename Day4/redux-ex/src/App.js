import React from 'react'
import { connect } from 'react-redux'

function App(props) {
    return (
        <>
            <h1>App Component</h1>
            <p>My Name is {props.myName}</p>
            <button type='button' onClick={() => props.changeName('Rahul')} >Change Name</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        myName: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch({ type: 'CHANGE_NAME', payload: name })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
