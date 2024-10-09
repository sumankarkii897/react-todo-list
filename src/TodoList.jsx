import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImCross } from "react-icons/im";


function TodoList() {
    let [todolist,setTodoList]=useState([])
    let saveToDoList=(event)=>{
        let toname=event.target.toname.value;
        if(!todolist.includes(toname)){
let finalToDoList=[...todolist,toname]
setTodoList(finalToDoList)
toast.success("added sucessfully")
        }
        else{
          
toast.error("already included",{
    autoClose:1000
})
/* alert("already included") */
        }
       
        event.preventDefault();
    }
    let list=todolist.map((el,index)=>{
        return(
      <ToDoListItems key={index} el={el} index={index} todolist={todolist} setTodoList={setTodoList}/>
            
        )
    })
  return (
    <>
    <h1>Todolist</h1>
    <form onSubmit={saveToDoList}>
        <input type="text" name="toname" id="" />
        <button>Save</button>
        
        </form>
        <div className="outerDiv">
        <ul>
            {list}
        </ul>
        </div>
        <ToastContainer/>
    </>
  )
}

export default TodoList
function ToDoListItems({el,index,todolist,setTodoList}){
    let [status,setStatus]=useState(false)
    let deleteData=()=>{
        let finalData=todolist.filter((el,i)=>i !=index)
        console.log(finalData);
        setTodoList(finalData)
        toast.success("deleted successfully...")
        
    }
    let checkStatus=()=>{
setStatus(!status)
    }
    return(
<li onClick={checkStatus} className={status?'completeTodos':""}>{index+1}{el} <span onClick={deleteData}> <ImCross /></span></li>
    )
}