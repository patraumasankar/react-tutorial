import React from 'react';

// Normal js function
// function Greet() {
//     return <h1>Hello Umasankar</h1>;
// }

// Arrow functions
const Greet = (props) => {
    console.log(props);
    const {name, heroName} = props;
    return(
        <>
        {/* <h3>Hello {props.name} a.k.a {props.heroName}</h3>{props.children} */}
        <h3>Hello {name} a.k.a {heroName}</h3>
        </>
    ); 
} 

export default Greet;