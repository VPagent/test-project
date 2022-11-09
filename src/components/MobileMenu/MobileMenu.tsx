import { createPortal } from "react-dom"
import GuestMenu from "../GuestMenu/GuestMenu"
import s from './mobileMenu.module.scss'
import { CgClose } from 'react-icons/cg';
import React from "react";


const portal = document.getElementById("portal")!
console.log(portal)

type Props = {
    onClose: Function
}

const MobileMenu:React.FC<Props> = ({onClose}:Props):JSX.Element => {

    const hadnleClickToWrapper = (event:React.SyntheticEvent):void => {
        if(event.currentTarget === event.target){
            onClose()
        }
    }
    return createPortal(
        <>
        <div className={s.menuWrapper} onClick={hadnleClickToWrapper}>
        </div>
        <menu className={s.menu}>
            <button type="button" onClick={() => onClose()} className={s.menu_button}><CgClose size={20} color="#808080"/></button>
            <GuestMenu/>
        </menu>
        </>
    , portal)
}


export default MobileMenu