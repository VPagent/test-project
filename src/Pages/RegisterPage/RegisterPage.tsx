import Container from '../../components/Container/Container'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import s from './registerPage.module.scss'


const RegisterPage:React.FC = ():JSX.Element => {


    return(
        <section className='section'>
            <Container>
                <RegisterForm />
            </Container>
        </section>
    )
}

export default RegisterPage