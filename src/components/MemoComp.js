import React from 'react'

function MemoComp({name}) {
    console.log('MemoComp is rendered')
  return (
    <div>
        {name}
    </div>
  )
}

export default React.memo(MemoComp)