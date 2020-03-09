import React, { Component } from 'react';

class Title extends Component {
    handleClickTitle(e) {
        console.log('Click on Title');
        console.log(e.target.innerHTML);
        console.log(this);
    }
    render () {
        return (
            <h1 onClick={this.handleClickTitle.bind(this)}>React 小书</h1>
        )
    }
}
export default Title