import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // Increment will not effect on UI
        // this.state.count += 1;
        // console.log(this.state.count);
        //   this.setState({
        //     count: this.state.count + 1
        //   },
        //   () => {
        //     console.log('Callback value',this.state.count);
        //   });
        this.setState(prevState => ({
            count: prevState.count + 1
        }))

        console.log('Synchronous value', this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <>
                <div>Counte - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </>
        )
    }
}

export default Counter