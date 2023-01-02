import React from 'react'

const DemoOutput = (props) => {
    console.log('demo output running')
  return (
    <div>
        <h3>{props.show} </h3>
        <h3>true </h3>
    </div>
  )
}

export default DemoOutput;