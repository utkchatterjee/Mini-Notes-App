import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav style={{display:'flex', gap:'30px', height:'30px', width:'1fr', backgroundColor:' rgb(11, 0, 0)', justifyContent:'left', alignContent:'center', padding:'3px'}}>
            <Link to="/"><li style={{height:'20px',color:'white',padding:'5px', backgroundColor:'rgb(64, 27, 27)',borderRadius:'20%',}}>Home</li></Link>
            <Link to="/new"><li style={{height:'20px',color:'white',padding:'5px', backgroundColor:'rgb(64, 27, 27)',borderRadius:'10%',}}>New</li></Link>
            <Link to="/note/Utk"><li style={{height:'20px',color:'white',padding:'5px', backgroundColor:'rgb(64, 27, 27)',borderRadius:'10%',}}>NoteID-Utk</li></Link>
        </nav>
        </div>
    )
}

export default Navbar