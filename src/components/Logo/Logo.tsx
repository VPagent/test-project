import s from './logo.module.scss'
import { Triangle } from 'react-loader-spinner'



const Logo = ():JSX.Element => {

    return(
        <div className={s.logo_box}>
            <Triangle height="20" width="20" color="#000000"/>
            <p className={s.logo_text}>VPagent13</p>
        </div>
    )
}

export default Logo