import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set,push, onValue,remove, update  } from "firebase/database";

const Todo = () => {
    let [text, setText] = useState('')
    let [taskArr, settaskArr] = useState([])
    let [btnHider, setBtnHider] = useState(true)
    let [editId, setEditId]= useState('')
    const db = getDatabase();
    const pat = /^\S/
     let err = pat.test(text)
    // ==================Button Start==================
    let handleSubmit = ()=>{
      if(err){
        set(push(ref(db, 'todo/')), {
          task: text,
        });
        setText('')
      }
    }

    let handleUpdate = (id)=>{
     update(ref(db,'todo/'+id),{
      task: text
     })
    
    }

    let handleDel = (id)=>{
      remove(ref(db, 'todo/'+id))
    }

    let handleEdit =(item)=>{
      setText(item.task)
      setBtnHider(false)
      setEditId(item.id)
    }
    // ==================Button End====================

    useEffect(()=>{
      const starCountRef = ref(db, 'todo/');
      onValue(starCountRef, (snapshot) => {
        let Arr = []
      snapshot.forEach((item)=>{
          Arr.push({...item.val(), id: item.key})
        })
        settaskArr(Arr)
      });
    },[])

  return (
    <>
        <input onChange={(e)=> setText(e.target.value)} value={text}/>
        {
          btnHider
            ?
        <button onClick={handleSubmit}>Submit</button>
            :
    <>
      <button onClick={()=>handleUpdate(editId)}>Update</button>
      <button onClick={()=>setBtnHider(true) || setText('')}>Cancel</button>
    </>
        }
        {
          taskArr.map((tasks, index)=>(
            <li key={index}>{tasks.task}
            <button onClick={()=>handleDel(tasks.id)}>Del</button>
            <button onClick={()=>handleEdit(tasks)}>Edit</button>
            
            </li>
          ))
        }
    </>
  )
}

export default Todo