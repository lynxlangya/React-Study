import React, { Component } from 'react'
import CommentInput from './pages/CommentInput'
import CommentList from './pages/CommentList'
import Cycle from './pages/Cycle'
import { Button, message } from "antd";
import './pages/index.css'

class App extends Component<any, any> {
    constructor(T: any) {
        console.log('初始化');
        super(T)
        this.state = {
            comments: [],
            isShow: true
        }
    }

    componentDidMount() {
        console.log('DidMound');
    }
    /**
     * @func 接受父组件传递过来的事件和数据
     * @param {Object} row - 用户名和输入内容
     * @description ✨ 
     */
    handleSubmit(row: any) {
        if (!row) return
        if (!row.userName) return message.error('请输入用户名')
        if (!row.content) return message.error('请输入内容')
        this.state.comments.push(row)
        this.setState({
            comments: this.state.comments
        })
    }

    handleClick() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log('render');
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmit.bind(this)}
                />
                <CommentList comments={this.state.comments} />
                <h1>
                    {this.state.isShow ? <Cycle /> : null}
                    <Button onClick={this.handleClick.bind(this)}>切换</Button>
                </h1>
            </div>
        )
    }
}

export default App