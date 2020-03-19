import React from 'react'

function createStore (state:any, stateChanger:any):object {
    const getState = () => state
    const dispatch = (action: any) => stateChanger(state, action)
    return {getState, dispatch}
}

export default createStore