import React, { Component } from 'react';
import { message, Button, List, Card } from 'antd';

class Title extends Component {
    handleClickTitle(e: any): void {
        console.log(e);
        console.log('Click on Title');
        console.log(e.target.innerHTML);
        console.log(this);
    }
    render(): any {
        const num: number = 123
        return (
            <div>
                <h1 onClick={this.handleClickTitle.bind(this)}>React 小书{num}</h1>
                <LikeButton
                    wordings={{ likedText: "赞赞", unLikedText: "墨迹" }}
                    onClick={() => message.success('点击了父组件传递的事件!')}
                />
                <UserList />
            </div>
        )
    }
}

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tom', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
]
class UserList extends Component<any, any> {
    render() {
        return (
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={users}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <Card hoverable={true} title={item.username}>
                            <h3>{item.age}</h3>
                            <h4>{item.gender}</h4>
                        </Card>
                    </List.Item>
                )}
            />
        )
    }
}

/**button */
class LikeButton extends Component<any, any> {
    /**默认配置 */
    static defaultProps = {
        likedText: '点赞',
        unLikedText: '取消'
    }

    constructor(T: any) {
        super(T)
        console.log(this.props);
        this.state = {
            isLiked: true
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLiked: !this.state.isLiked
        })
        // 接受 props 传递的方法
        this.props.onClick()
    }

    render() {
        const text: any = this.props.wordings
        return (
            <div>
                <Button
                    type={this.state.isLiked ? 'primary' : 'danger'}
                    onClick={this.handleClickOnLikeButton.bind(this)}
                >
                    {this.state.isLiked ? `${text.likedText} 👍` : `${text.unLikedText} 👎`}
                </Button>
            </div>
        )
    }
}

export default Title
