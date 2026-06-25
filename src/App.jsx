import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import NoteID from './pages/NoteID.jsx';
import {useState} from 'react';
import Navbar from './Components/Navbar.jsx';
import './index.css'

function App() {
    const [items,setItems]=useState([]);
    const router=createBrowserRouter([
        {
            path:'/',
            element: <div className="Wrapper"><Navbar/><Home/></div>
        },
        {
            path:'/new',
            element: <div className="Wrapper"><Navbar/><New items={items} setItems={setItems}/></div>
        },
        {
            path:'/note/:id',
            element: <div className="Wrapper"><Navbar/><NoteID items={items} setItems={setItems}/></div>
        },
    ])
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App