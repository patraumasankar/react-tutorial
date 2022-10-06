import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Kanha</h1>
    //     </div>
    // );
    return React.createElement('div',
    {id:'hello',className:'dummyClass'},
    React.createElement('h3',null, 'Hello Kanha')
    );
}

export default Hello;
