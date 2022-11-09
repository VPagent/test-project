// import 'react/react-dom/moment'
import 'antd/dist/antd.css';
import { Button, Form, Input } from 'antd';
import s from './notesForm.module.scss'
import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid'

type Props = {
    onFormSubmit: Function
}




const NotesForm:React.FC<Props> = ({onFormSubmit}:Props):JSX.Element => {
  
    return(
        <Form action="" className={s.form} onFinish={(values) => onFormSubmit(values)}>
            <h2>Add Note<br/></h2>
            
            <Form.Item
                label="Note name"
                name="name"
                rules={[{ required: true, message: 'Please enter note name' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Note text"
                name="text"
                rules={[{ required: true, message: 'Please enter note text' }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit"> Submit </Button>
        </Form>
    )
}

export default NotesForm