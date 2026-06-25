import { useParams} from 'react-router-dom';



function NoteID({items,setItems}) {
    const {id}=useParams();
    const deleteitem = (index)=>{
        setItems(items.filter((_,i)=>i!==index))
    };
    const updateitem = (index)=>{
        const newValue=prompt("Enter alter.");
        if(!newValue) return;
        const updated=[...items];
        updated[index]=newValue;
        setItems(updated);
    }
    return (
        <>
        
            <h2>NoteID: {id}</h2>
            <ul style={{color:'white'}}>
                {items.map((item,index)=>(
                    <li key:index>{item} 
                <button onClick={()=>deleteitem(index)}>Delete</button>
                <button onClick={()=>updateitem(index)}>Edit</button>
                </li>
                    ))
                }
            </ul>
        </>
    )
}

export default NoteID