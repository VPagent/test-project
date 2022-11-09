import { current } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import Container from "../../components/Container/Container"
import NotesForm from "../../components/NotesForm/NotesForm"
import NotesList from "../../components/NotesList/NotesList"
import {nanoid} from 'nanoid'
import s from './notesPage.module.scss'
import { toast, ToastContainer } from 'react-toastify';

export type Object = {
    name: string,
    text: string,
    done: boolean,
    id: string | number
}

const NotesPage = ():JSX.Element => {

    const [notes, setNotes] = useState<[] | Object[]>([])
    console.log(notes)
    
    // @ts-ignore
    const parse = JSON.parse(localStorage.getItem("notes"))

        useEffect(()=> {
            if(parse?.length > 0){
                setNotes(parse)
            }
        }, [])

        useEffect(() => {
            if(notes.length > 0){
                localStorage.setItem("notes", JSON.stringify(notes))
            }
        }, [notes])

        const handleSubmit = (values:Object):void  => {
            const {name} = values
            const inspect = notes.some(elem => elem.name === name)
            if(inspect){
             toast.warning('there is already a note with the same name')
             return
            }
            const obj = {...values, done: false, id: nanoid(2)}
            setNotes(prev => [...prev, obj])
        }

        const handleCompleted = (notes:[], name: string):void =>{
            const currentArr = notes.map((elem:Object) => {
                if(elem.name === name){
                elem.done = !elem.done
                }
                return elem
            })
            setNotes(currentArr)
        }

        const handleDelete = (notes: [], id:Object["id"]):void => {
            const deletedNotes = notes.filter((elem:Object) => elem.id !== id)
            setNotes(deletedNotes)
        }

    return(
        <section className="section">
            <Container>
                <div>
                    <h1 className={s.title}>Welcome to Notes page</h1>
                    <p className={s.text}>In this page you can add your notes, there are save in localStorage, you dont using backend</p>
                </div>
                <div>
                    <NotesForm onFormSubmit={handleSubmit}/>
                </div>
                <div>
                    <NotesList notes={notes} onInputChange={handleCompleted} onDelete={handleDelete}/>
                </div>
            </Container>
        </section>
    )
}


export default NotesPage