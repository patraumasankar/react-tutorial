import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Umasankar'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Umasankar'
            })
        }, 2000)
    }

render() {
    console.log(' ParentComp is rendered')
    return (
        <div>
            Parent Component
            <MemoComp name = {this.state.name} />
            {/* <RegComp name = {this.state.name} /> */}
            {/* <PureComp name = {this.state.name} /> */}
        </div>
    )
}
}

export default ParentComp