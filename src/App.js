import {useState} from 'react'
function App(){
  const[name,setname]=useState("pooji")
  const[Count,setCount]=useState(0)
  return(
    <div>
      <h1>{Count}</h1>
      <button onClick={function(){
      setCount(Count+1)
      }}>plus 1</button>
      <h1>{Count}</h1>
      <button onClick={function(){
        setCount(Count-1)
      }}>plus 1</button>
      <h1>{Count}</h1>
      <button onClick={function(){
        setCount(Count-1)
      }}>minus 1</button>
    </div>
 );
}
export default App;
