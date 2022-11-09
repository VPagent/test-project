import Container from "../../components/Container/Container"
import LoginForm from "../../components/LoginForm/LoginForm"



const LoginPage:React.FC = ():JSX.Element =>{

    return(
        <section className="section" >
            <Container>
                <LoginForm />
            </Container>
        </section>
        
    )
}


export default LoginPage