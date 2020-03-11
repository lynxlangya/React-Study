import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import Title from './Title'
import Main from './Main'
import Footer from './Footer'


/**创建了名为 Header 的组件, 继承自 Component 类 */
class Header extends Component {
    render() {
        // const word: string = 'is good'
        const word = 'is Goooood'
        // const isGoodWord = true
        return (
            <div>
                <h1 style={{ 'color': 'red' }}>
                    React 小书 {word}
                </h1>
                <Title />
            </div>
        )
    }
}


class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
                {/* <LikeButton /> */}
            </div>
        )
    }
}



/**挂载到界面 */
ReactDOM.render(
    <Index />,
    document.getElementById('root')
)