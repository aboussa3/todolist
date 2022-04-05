import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//name of the state is List 
function App() {
const [list, setList] = useState([])
const [current,setCurrent] = useState ("")

function newTask(){
  setList([list,current])
}
console.log(current,list)
return (
  <div className="App">
      <h1>The To do list</h1>
      <input type= "text" onChange = {e=>setCurrent(e.target.value) }></input>
    <button onClick={newTask} >
          + 
        </button>
    {list.map(e => { return <li>{e}</li> })}
    
    </div>
//dynamic html: introduce {}
);
}
export default App;
