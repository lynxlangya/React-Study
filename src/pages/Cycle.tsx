import React, { Component } from 'react'

class Cycle extends Component<any, any> {
    constructor(T: any) {
        super(T)
        console.log(T);
        this.state = ({
            date: new Date()
        })
    }

    static getDerivedStateFromProps (nextProps: any, prevState: any) {
        // console.log(nextProps);
        // console.log(prevState);

        return null
    }

    timer: any
    componentDidMount(): void {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }


    componentWillUnmount(): void {
        console.log('组件销毁');
        clearInterval(this.timer)
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default Cycle