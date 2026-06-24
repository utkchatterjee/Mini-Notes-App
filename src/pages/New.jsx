import {useState} from 'react';


function New({items,setItems}) { 
    const [input, setInput]=useState("");
    const AddNew=() => {
        setItems([...items, input]);
        setInput("");
    }
    return (
        <>
            
            <h2>New</h2>
            <input value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={AddNew}>Add</button>
        </>
    )
}

export default New