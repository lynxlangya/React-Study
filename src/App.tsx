import React, { Component } from 'react'
import CommentInput from './pages/CommentInput'
import CommentList from './pages/CommentList'
import { message } from "antd";
import './pages/index.css'

class App extends Component<any, any> {
    constructor(T: any) {
        super(T)
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this._loadComments()
    }

    /**
     * @func 存储留言信息
     * @description ✨ 往localStorage
     */
    _saveComments(row: object[]) {
        console.log(row);
        localStorage.setItem('comments', JSON.stringify(row))
    }
    /**
     * @func 读取留言
     * @description ✨ 
     */
    _loadComments() {
        let comments = localStorage.getItem('comments')
        console.log(comments);
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
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
        const comments = this.state.comments
        comments.push(row)
        this.setState({ comments })
        this._saveComments(comments)
    }

    handleClick() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    /**
     * @func 根据index删除评论
     * @description ✨ 最外层组件接受到index之后, 找到对应index的数据,进行删除. 然后重新储存到localStorage之中
     */
    handleDeleteComment(index: number) {
        // eslint-disable-next-line no-useless-concat
        console.log('%c' + '最外层组件接受index', 'color: #2ecc71; font-size: 20px;')
        console.log(index);
        const comments = this.state.comments
        console.log(comments);
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }

    render() {
        console.log('render');
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmit.bind(this)}
                />
                {/* 最外层组件接受到<CommentList />传递过来的index */}
                <CommentList
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)}
                />
            </div>
        )
    }
}

export default App