import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Card extends Component<any, any> {
    static propTypes = {
        comment: PropTypes.array
    }

    render() {
        const comment = this.props
        console.log(comment);
        return (
            <div>
                <div className="card-content">{comment.children}</div>
            </div>
        )
    }
}

ReactDOM.render(
    <Card>
        <h2>React.js 小书</h2>
        <div>开源、免费、专业、简单</div>
        订阅：<input />
    </Card>,
    document.getElementById('root')
)