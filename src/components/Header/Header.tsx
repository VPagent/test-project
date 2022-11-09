import Container from "../Container/Container"
import s from "../Header/header.module.scss"
import Logo from "../Logo/Logo"
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";





const Header = ():JSX.Element => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleClickOpenMenu = ():void =>{
        setIsModalOpen(prev => !prev)
    }

    return(
        <header className={s.header}>
            <Container>
                <div className={s.header_box}>
                <Logo/>
                <button type="button" className={s.header_box_button} onClick={handleClickOpenMenu}><FiMenu size={20}/></button>
                {isModalOpen && <MobileMenu onClose={handleClickOpenMenu}/>}
                </div>
            </Container>
        </header>
    )
}

export default Header