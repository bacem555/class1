
import {useState} from './React'
function State() {
    const [value,setValue]= useState(0)
    function update(){
        setValue(value+1)
    }
  return (
    <div>
      <button onClick={update}>add</button>
    </div>
  )
}

export default State()