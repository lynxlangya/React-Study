import React, { Component } from 'react'
import { Button, Input, } from "antd";
import 'antd/dist/antd.css'
import './index.css'

const { TextArea } = Input

class CommentInput extends Component<any, any> {
    constructor(T: any) {
        super(T)
        this.state = {
            userName: null,
            content: null
        }
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
        this.props.onSubmit({ userName, content })
        this.setState({ content: null })
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
                            onChange={this.handleUserNameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <TextArea
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