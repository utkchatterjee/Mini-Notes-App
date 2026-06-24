import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav>
            <Link to="/"><li>Home</li></Link>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/new"><li>New</li></Link>
            <Link to="/note/Utk"><li>NoteID default</li></Link>
        </nav>
        </div>
    )
}

export default Navbar