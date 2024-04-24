import React, { useRef, useState } from 'react'
import Do from './Do'

const DoList = () => {
      const inputRef=useRef();
      const [data,setData]=useState([]);
     const addToDo =()=>{
        if(inputRef.current.value!=""){
            setData([...data,{"value":inputRef.current.value,"status":false} ]);
            console.log(data);
        }
 }
  return (
    <div className='ToDoList'>
        <div className='inputBar'>
            <input type="text" ref={inputRef} placeholder='Enter Todo '/>
            <input type="submit" onClick={addToDo} value="ToDo"/>
        </div>
       {
        data.map((item,id)=>{
        return <Do key={id} item={item}  setData={setData} data={data}  />
        })
       }
    </div>
  )
}

export default DoList