import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('Uma')}>
            Greet Parent
        </button>
    </div>
  )
}

export default ChildComponent