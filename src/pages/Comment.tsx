import React, { Component } from 'react'

class Comment extends Component<any, any> {
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.row.userName} </span>：
                </div>
                <p>{this.props.row.content}</p>
            </div>
        )
    }
}

export default Comment