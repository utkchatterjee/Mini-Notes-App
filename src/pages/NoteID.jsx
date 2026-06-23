import { useParams} from 'react-router-dom';
function NoteID() {
    const {id}=useParams();
    return (
        <h2>NoteID: {id}</h2>
    )
}

export default NoteID