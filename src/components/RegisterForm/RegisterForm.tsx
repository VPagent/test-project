import s from './registerForm.module.scss'
import { Button, Form, Input } from 'antd';


const RegisterForm:React.FC = ():JSX.Element => {

    const handleSubmit = (values:object):void => {
        
    }

    return(
        <Form className={s.form} onFinish={(values) => handleSubmit(values)}>
            <Form.Item
                className={s.label}
                label="Name"
                name="Name"
                rules={[{ required: true, message: 'Please input your Name' }]}
            >
                <Input />
            </Form.Item>
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
            <Button type='primary'>Register</Button>
            </div>
        </Form>

    )
}

export default RegisterForm