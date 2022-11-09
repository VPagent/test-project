import s from '../Container/container.module.scss'

type Props = {
    children: React.ReactNode
}

const Container = ({children}:Props):JSX.Element => {

    return(
        <div className={s.container}>
            {children}
        </div>
    )
}


export default Container