import React, { useEffect, useState } from 'react'
import { updateTaskInList } from "../../slices/taskSlice";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const PopupModel = ({setpopUp}) => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [id,setId]=useState('');
    const dispatch=useDispatch();
    const {selectedTask}=useSelector((sate)=>sate.tasks);

    const addTask=(e)=>{
        e.preventDefault()
        console.log({title,description});
        dispatch(updateTaskInList({id,title,description}));
        setpopUp(false);
    }
    useEffect(()=>{
        setTitle(selectedTask.title);
        setDescription(selectedTask.description);
        setId(selectedTask.id);
    },[selectedTask])
  return (
    <div className='popup'>
        <div className='box'>
            <form className='in-center '>
                <div className='in-corner'>
                    <h2 className='in-center'> Edit Task {id}</h2>
                    <button onClick={()=>setpopUp(false)}><span class="material-symbols-outlined">close</span></button>
                </div>
                <div className='same_row getin'>
                    <p>Title :</p>
                    <input value={title}  onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className='same_row getin'>
                    <p>Description :</p> 
                    <input value={description}  onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <div className='in-center'>
                    <button className='but' onClick={(e)=>addTask(e)}>updated</button>
                </div>
            </form>
        </div>
    </div>
  )
}
