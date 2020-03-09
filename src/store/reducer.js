const defaultState = {
    inputValue: '输入点东西...',
    list: ['爱看仓库内', '啊是的哇曹张新村', '达娃大撒大苏打阿萨大我']
}

export default (state = defaultState, action) => {
    if (action.type === 'changeInput') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    // ?增加事件
    if (action.type === 'addItem') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    return state
}