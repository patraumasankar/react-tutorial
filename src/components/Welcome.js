import React, {Component} from 'react';

class Welcome extends Component {

    render() {
        const {name, heroName} = this.props;
        return (
            // <h3>Welcome {this.props.name} a.k.a {this.props.heroName}</h3>
            <h3>Welcome {name} a.k.a {heroName}</h3>
        )
    }
}

export default Welcome;