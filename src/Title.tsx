import React, { Component } from 'react';

class Title extends Component {
    handleClickTitle(e: any):void {
        console.log(e);
        console.log('Click on Title');
        console.log(e.target.innerHTML);
        console.log(this);
    }
    render():any {
        const num: number = 123
        return (
            <div>
                <h1 onClick={this.handleClickTitle.bind(this)}>React 小书{num}</h1>
                <LikeButton />
            </div>
        )
    }
}
class LikeButton extends Component<any, any> {
    constructor(T: any) {
        super(T)
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton() {
        console.log(this.state.isLiked);
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked);
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消 👎' : '点赞 👍'}
            </button>
        )
    }
}
export default Title