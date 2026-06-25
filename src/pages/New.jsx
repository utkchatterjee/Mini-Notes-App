import {useState} from 'react';


function New({items,setItems}) { 
    const [input, setInput]=useState("");
    const AddNew=() => {
        setItems([...items, input]);
        setInput("");
    }
    return (
        <>
            
            <h2 style={{color:'aliceblue', padding:'5px'}}>New Note</h2>
            <input style={{color:'white',height:'500px',width:'400px', paddingLeft:'20px',backgroundColor:'rgba(0,0,0,0.05)'}}value={input} onChange={(e)=>setInput(e.target.value)}/>
            <br/>
            <button style={{color:'aliceblue',backgroundColor:'rgb(83, 0, 0)',margin:'0',padding:'0',height:'20px'}} onClick={AddNew}>Add</button>
        </>
    )
}

export default New