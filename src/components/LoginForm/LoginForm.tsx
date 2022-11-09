import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import s from './loginForm.module.scss'



const LoginForm:React.FC = ():JSX.Element => {

    return(
        <Form className={s.form}>
            <Form.Item
                className={s.label}
                label="Email"
                name="Email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                className={s.label}
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <div className={s.formFooter}>
            <Link to="/register">You are not registered?</Link>
            <Button type='primary'>Login</Button>
            </div>
        </Form>
    )
}

export default LoginForm