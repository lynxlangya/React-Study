import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }

  render() {
    return (
      <div>
        <div style={{ width: '250px', margin: '50px' }}>
          <Input
            placeholder={this.state.inputValue}
            onChange={this.changeInputValue.bind(this)}
            style={{ width: '150px', marginRight: '10px' }}
          ></Input>
          <Button type="primary" onClick={this.clickBtn}>
            click
          </Button>
        </div>
        <div style={{ margin: 'auto 50px', width: '300px' }}>
          <List bordered dataSource={this.state.list} renderItem={item => <List.Item>{item}</List.Item>}></List>
        </div>
      </div>
    )
  }
  clickBtn(e) {
    console.log(e)
    const action = {
      type: 'addItem'
    }
    store.dispatch(action)
  }
  changeInputValue(e) {
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }

  storeChange() {
    this.setState(store.getState())
  }
}

export default App
