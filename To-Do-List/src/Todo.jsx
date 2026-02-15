import { useState } from "react"
import './Todo.css'

function Todo(){

    const [todo , setTodo] = useState();
    const [newTodo, setNewTodo] = useState([])


    let getTask = (event) =>{
        setTodo(event.target.value)
    }


    let getList = () =>{
        let store = [...newTodo, todo]
        setNewTodo(store)
        setTodo("")
    }


    let deleteTask = (index) =>{
        let filterdata = newTodo.filter((currElem, id) =>{
            return id != index
        })
        setNewTodo(filterdata)
    }


    return(
        <>
        <div className="container">
            <div className="taskInput">
                <input type="text" placeholder="Type Your Task" value={todo} onChange={getTask}/>
                <button onClick={getList}>Add</button>
            </div>
            <div className="TaskList">
                {newTodo.map((currVal, index) => {
                    return(
                        <>
                            <div className="list">
                                <p>{currVal}</p>
                                <i id="deleteIcon" class="fa-regular fa-trash-can" onClick={ () => deleteTask(index)}></i>
                                

                            </div>
                        </>
                    )
                })}
            </div>

        </div>
        </>
    )
}

export default Todo