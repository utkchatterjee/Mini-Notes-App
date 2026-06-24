import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import NoteID from './pages/NoteID.jsx';
import {useState} from 'react';
import Navbar from './Components/Navbar.jsx';

function App() {
    const [items,setItems]=useState([]);
    const router=createBrowserRouter([
        {
            path:'/',
            element: <><Navbar/><Home/></>
        },
        {
            path:'/home',
            element: <><Navbar/><Home/></>
        },
        {
            path:'/new',
            element: <><Navbar/><New items={items} setItems={setItems}/></>
        },
        {
            path:'/note/:id',
            element: <><Navbar/><NoteID items={items} setItems={setItems}/></>
        },
    ])
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App