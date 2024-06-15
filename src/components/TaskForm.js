import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTaskToList } from '../slices/taskSlice';

function TaskForm() {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const dispatch=useDispatch();

    const addTask=(e)=>{
        e.preventDefault()
        console.log({title,description});
        dispatch(addTaskToList({title,description}));
        setTitle('');
        setDescription('');
    }
  return (
    <div className='in-center'>
        <form className='in-center'>
            <h2 className='in-center'>Task Form</h2>
            <div className='same_row getin'>
                <p>Title :</p>
                <input placeholder='title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
            </div>
            <div className='same_row getin'>
                <p>Description :</p> 
                <input placeholder='description' value={description} onChange={(e)=> setDescription(e.target.value)}/>
            </div>
            <div className='in-center'>
                <button className='but' onClick={(e)=>addTask(e)}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default TaskForm