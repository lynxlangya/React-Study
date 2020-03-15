import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input, } from "antd";
import 'antd/dist/antd.css'
import './index.css'

const { TextArea } = Input

class CommentInput extends Component<any, any> {
    textarea: any

    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor(T: any) {
        super(T)
        this.state = {
            userName: null,
            content: null
        }
    }

    componentDidMount() {
        this._loadUsername()
        this.textarea.focus()
    }

    /**
     * @func 保存username
     * @description ✨ 
     */
    _saveUsername(v: string) {
        console.log(v);
        localStorage.setItem('username', v)
    }
    /**
     * @func 读取username
     * @description ✨ 在constructor中读取有什么问题?
     */
    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) this.setState({ userName: username })
    }

    /**
     * @func 输入框change事件
     * @description ✨ 上下两个方法有待优化
     * todo 优化点
     */
    handleUserNameChange(e: any) {
        this.setState({
            userName: e.target.value
        })
    }

    handleContentChange(e: any): void {
        this.setState({
            content: e.target.value
        })
    }

    /**
     * @func 传递参数以及按钮点击事件
     * @description ✨ 同时将content清空
     */
    handleSubmit() {
        const { userName, content } = this.state
        this.props.onSubmit({ userName, content, createdTime: +new Date() })
        this.setState({ content: null })
    }
    /**
     * @func 监听用户名输入框失去焦点
     * @description ✨ 失去焦点之后将用户名存储到 LocalStorage 中
     */
    handleUsernameBlue(event: any) {
        console.log(this);
        this._saveUsername(event.target.value)
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div>
                        <Input
                            placeholder="请输入用户名"
                            value={this.state.userName}
                            maxLength={66}
                            onBlur={this.handleUsernameBlue.bind(this)}
                            onChange={this.handleUserNameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <TextArea
                            ref={(textarea) => this.textarea = textarea}
                            placeholder="请输入留言内容"
                            value={this.state.content}
                            maxLength={666}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                        发布
                    </Button>
                </div>
            </div>
        )
    }
}

export default CommentInput