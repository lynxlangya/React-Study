// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

function createStore(state: any, stateChanger: any) {
    const listeners:any = []
    const subscribe = (listener: any) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action: any) => {
        stateChanger(state, action)
        listeners.forEach((listener:any) => listener())
    }
    return { getState, dispatch, subscribe }
}

function renderApp(appState: any) {
    // debugger
    // eslint-disable-next-line no-useless-concat
    console.log('%c' + 'render app', 'color: #2ecc71; font-size: 20px;')
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(title: any) {
    // eslint-disable-next-line no-useless-concat
    console.log('%c' + 'render title', 'color: #2ecc71; font-size: 20px;')
    const titleDOM: any = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content: any) {
    // eslint-disable-next-line no-useless-concat
    console.log('%c' + 'render content', 'color: #2ecc71; font-size: 20px;')
    const contentDOM: any = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

let appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}

function stateChanger(state: any, action: any) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color
            break
        default:
            break
    }
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState())) // 监听数据变化

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改