import React from "react"

 

const Two = ({mark}) => {

     console.log('Mark Component')
  return (
    <div>
      <h2>Marks: {mark}</h2>
    </div>
  )
}

export default React.memo (Two)
