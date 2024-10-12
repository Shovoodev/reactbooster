import React, { useState } from 'react'

const NewTasks = ({onAdd , onDelete}) => {
  const [enterTask , setEnterTask] = useState("")

  function handleChange (e) {
    setEnterTask(e.target.value)
  }

  function handleClick (){
    onAdd(enterTask);
    setEnterTask("")
  }
  return (
    <div className='flex items-center gap-4 '>
        <input className='w-64 px-2 py-1 rounded-sm bg-stone-200' 
        onChange={handleChange}
        value={enterTask}
        type='text'></input>
        <button className='text-stone-700 hover:text-stone-950 '
        onClick={handleClick}> Add Task</button>    
     </div>
  )
}

export default NewTasks