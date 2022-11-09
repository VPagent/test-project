
import { loadPlugin } from "immer/dist/internal";
import s from  './notesList.module.scss'
import {Object} from '../../Pages/NotesPage/NotesPage'
import NotesCard from "../NotesCard/NotesCard";


type Props = {
    notes: Object[] | [],
    onInputChange: Function,
    onDelete:Function
}

const NotesList:React.FC<Props> = ({notes, onInputChange, onDelete}:Props):JSX.Element => {

    
    return(
        <ul className={s.list}>
            {notes && notes.map((elem:Object) => {
                return <NotesCard elem={elem} notes={notes} onInputChange={onInputChange} onDelete={onDelete}/>
            }
                
            )}
        </ul>
    )
}

export default NotesList