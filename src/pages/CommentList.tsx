import React, { Component } from 'react'
import Comment from './Comment'



class CommentList extends Component<any, any> {
    static defaultProps = {
        comments: []
    }

    render() {
        // sessionStorage.setItem('this.props', JSON.stringify(this.props))
        return (
            <div>
                {this.props.comments.map((item: any, i: number) => <Comment row={item} key={i} />)}
            </div>
        )
    }
}

export default CommentList