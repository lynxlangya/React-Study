import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component<any, any> {
    static propTypes = {
        row: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor(props: any) {
        super(props)
        this.state = {
            timeStr: null
        }
    }

    timer: any
    componentDidMount() {
        this._updateTimeStr()
        this.timer = setInterval(
            this._updateTimeStr.bind(this), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    _updateTimeStr() {
        const comment = this.props.row
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeStr: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    /**
     * @func 将输入内容处理为html
     * @description ✨ 
     */
    _getProcessedContent(content: any) {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    /**
     * @func 删除
     * @description ✨ 点击删除按钮, 获取下标传递到父组件 <CommentList/> 中
     */
    handleDeleteComment() {
        console.log(this.props);
        // eslint-disable-next-line no-useless-concat
        console.log('%c' + '点击删除按钮, 获取下标传递到父组件 <CommentList/>', 'color: #2ecc71; font-size: 20px;')
        this.props.onDeleteComment(this.props.index)
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.row.userName} </span>：
                </div>
                {/* <p>{this.props.row.content}</p> */}
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.row.content)
                }} />
                <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#ccc' }}>
                    {this.state.timeStr}
                </span>
                <span
                    style={{ marginLeft: '20px', fontSize: '12px', color: 'rgb(231, 76, 60)', cursor: 'pointer' }}
                    onClick={this.handleDeleteComment.bind(this)}
                >Delete</span>
            </div>
        )
    }
}

export default Comment