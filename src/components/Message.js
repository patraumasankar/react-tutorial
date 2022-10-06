import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitors'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Message received from react'
        })
    }

    render() {
        return (
            <>
            <h3>{this.state.message}</h3>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </>            
        )
    }
}

export default Message;