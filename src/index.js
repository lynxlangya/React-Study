import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

/**创建了名为 Header 的组件, 继承自 Component 类 */
class Header extends Component {
    render () {
        const  word = 'is good'
        return (
            <div>
                <h1 style={{'color': 'red'}}>
                    React 小书 {word}
                </h1>
            </div>
        )
    }
}

/**挂载到界面 */
ReactDOM.render(
    <Header></Header>,
    document.getElementById('root')
)