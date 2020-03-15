import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component<any, any> {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }


    /**
     * @func 接受到子组件传递的
     * @description ✨ 接受到index之后继续向上传递
     */
    handleDeleteComment(index: number) {
        console.log(index);
        // eslint-disable-next-line no-useless-concat
        console.log('%c' + '接受到index之后继续向上传递', 'color: #2ecc71; font-size: 20px;')
        // if (this.props.onDeleteComment) 
        this.props.onDeleteComment(index)
    }

    render() {
        return (
            <div>
                {/* 父组件接受<Comment /> 传递过来的index */}
                {this.props.comments.map((item: any, i: number) =>
                    <Comment row={item} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />)
                }
            </div>
        )
    }
}

export default CommentList