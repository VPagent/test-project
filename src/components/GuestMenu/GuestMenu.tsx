import { NavLink } from 'react-router-dom'
import s from './guestMenu.module.scss'



const GuestMenu = ():JSX.Element => {

    return(
        <ul className={s.guest_list}>
            <li className={s.guest_list_item}><NavLink className={s.guest_list_link} end to={"/"}>Home</NavLink></li>
            <li className={s.guest_list_item}><NavLink className={s.guest_list_link} to={"/notes"}>Notes</NavLink></li>
            <li className={s.guest_list_item}><NavLink className={s.guest_list_link} to={"/login"}>Login</NavLink></li>
        </ul>
    )
}

export default GuestMenu