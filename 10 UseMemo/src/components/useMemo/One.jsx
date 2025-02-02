import { useMemo } from "react"

 

const One = ({marks ,subject}) => {

    const percentageMarks = useMemo(()=>{
  console.log('inside usememo')
        return( (marks*100)/100)

    },[marks])
            
  return (
    <div>
      <h2>Marks:{marks}</h2>
      <h2>percentage is:{percentageMarks}%</h2>
      <h2>Subject:{subject}</h2>
    </div>
  )
} 

export default One
