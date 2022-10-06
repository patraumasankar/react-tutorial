import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        // General approach to display
        // return (
        //     <>
        //         <div>Welcome Umasankar</div>
        //         <div>Welcome Guest</div>
        //     </>
        // )

        // if-else approach to display 
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Umasankar</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // Using variable approach to display
        // let message;
        // if(this.state.isLoggedIn){
        //     message= <div>Welcome Umasankar</div>
        // }else{
        //     message= <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        //conditional operator approach to display
        // return this.state.isLoggedIn ? <div>Welcome Umasankar</div> : <div>Welcome Guest</div>

        //short circuit approach to display
        return this.state.isLoggedIn && <div>Welcome Umasankar</div>
    }
}

export default UserGreeting