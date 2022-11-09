import {Object} from '../../Pages/NotesPage/NotesPage'
import s from './notesCard.module.scss'
import { Switch } from 'antd';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';


type Props = {
    elem: Object,
    notes: Object[],
    onInputChange: Function,
    onDelete: Function
}

const NotesCard:React.FC<Props> =({elem, notes, onInputChange, onDelete}:Props):JSX.Element => {

    const {name, text, done, id} = elem

    return(
        <li key={name} className={s.item}>
            <div className={s.headerCard}>
                <h3>{name}</h3>
                <div>{done && <p><BsFillCheckCircleFill color='green' /></p>}</div>
            </div>
            <p className={s.text}>{text}</p>
            <div className={s.footerCard}>
                <Switch checked={done} onChange={() => onInputChange(notes, name)} />
                <button type="button" onClick={() => onDelete(notes, id)} className={s.button}><MdDelete color='grey' size={25}/></button>
            </div>
        </li>
    )

}

export default NotesCard