import React, { useState } from 'react'
import { PopupModel } from './model/PopupModel'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedTask , removeFromList } from '../slices/taskSlice';


const TasksList = () => {
    const [popUp,setpopUp]=useState(false);
    const {tasksList}=useSelector((sate)=>sate.tasks);
    const dispatch = useDispatch();

    const updateTask=(task)=>{
        setpopUp(true);
        console.log("update task");
        dispatch(setSelectedTask(task));
    }
    const deleteTask=(task)=>{
        dispatch(removeFromList(task));
        console.log("delete task");
    }
  return (
    <div className='in-center '>
        <h2 className='in-center'>Task List</h2>
        <table className='tablediv'>
            <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            {tasksList && tasksList.map((task,index)=>{
                return(
                    <tr key={task.id}>
                    <td>{index+1}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td className='Actions'>
                        <button onClick={()=>updateTask(task)}><span class="material-symbols-outlined">edit</span></button>
                        <button onClick={()=>deleteTask(task)}><span class="material-symbols-outlined">delete</span></button>
                    </td>
                </tr>
                )
            })}
            
        </table>
        {
            popUp && <PopupModel id='1' name="Task 1"  desc="Task 1 description" setpopUp={setpopUp} />
        }
    </div>
  )
}

export default TasksList