import './App.css';
import { useState } from 'react';
var con = 0
//name of the state is List 
function App() {
const [list, setList] = useState([])
 const [current,setCurrent] = useState ("")

 function newTask(){
   setList([...list,{index: con, task: current}])
   con+=1;
   // use ... before to spread lists or objects
 } 
// filter = net : series of true/false
 function deleteTask(index:string){
  setList(list.filter 
    (el => { 
      console.log(index, prompte, con)
      return el.index.toString() !== index
  }));
}
const [prompte,setPrompte] = useState("")
 // it's up to a browser to choose how they display the text
 return (
   <div className="App">
       <h1>The To do list</h1>
       <input type= "text" onChange = {e=>setCurrent(e.target.value) }></input>
       <button onClick={newTask} > + add + </button>
     {list.map(el => { return <li>{el.task + el.index} <button onClick={ ()=>{deleteTask(el.index)}} >check</button></li> })}
      <button onClick={()=> {setPrompte(prompt("What line do you want to delete?"))  ; deleteTask(prompte)} }>prompt</button>
      
     </div>
 //dynamic html: introduce {}
);
}
// look for the many ways ot use prompt()  !!!
//convert the file to ts


// IF it helps: use useState on con, but it feels stupid cause it's only used in one function
// .json 
export default App;