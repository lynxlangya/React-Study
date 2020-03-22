// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

function createStore(stateChanger: any) {
    let state: any = null
    const listeners:any = []
    const subscribe = (listener: any) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action: any) => {
        state = stateChanger(state, action)
        listeners.forEach((listener:any) => listener())
    }
    dispatch({})
    return { getState, dispatch, subscribe }
}

function renderApp(newAppState: any, oldAppState:any = {}) {
    if (newAppState === oldAppState) return
    // debugger
    // eslint-disable-next-line no-useless-concat
    console.log('%c' + 'render app', 'color: #2ecc71; font-size: 20px;')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle: any, oldTitle = {}) {
    if (newTitle === oldTitle) return
    // eslint-disable-next-line no-useless-concat
    console.log('%c' + 'render title', 'color: #2ecc71; font-size: 20px;')
    const titleDOM: any = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent: any, oldContent = {}) {
    if (newContent === oldContent) return
    // eslint-disable-next-line no-useless-concat
    console.log('%c' + 'render content', 'color: #2ecc71; font-size: 20px;')
    const contentDOM: any = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

function stateChanger(state: any, action: any) {
    if (!state) {
        return {
            title: {
                text: 'React.js 小书',
                color: 'red',
            },
            content: {
                text: 'React.js 小书内容',
                color: 'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state
    }
}

const store = createStore(stateChanger)
/**缓存旧的 state */
let oldState = store.getState()
store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
}) // 监听数据变化

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改