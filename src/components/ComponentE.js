import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from './userContext'
export class ComponentE extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
                <h3>Component E value = {this.context}</h3>
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE