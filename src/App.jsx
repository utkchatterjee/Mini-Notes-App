import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import New from './pages/New.jsx';
import NoteID from './pages/NoteID.jsx';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/new" element={<New/>}/>
                <Route path="/note/:id" element={<NoteID/>}/>
            </Routes>
        </Router>
    )
}

export default App