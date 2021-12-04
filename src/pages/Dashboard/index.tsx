import React, {useState, FormEvent, useEffect, useRef} from 'react';

import {  FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from '../../components/InputComponent';
import { notifyError, notifySuccess } from '../../components/toasts';

import {database} from '../../services/api'
import addContatToList from '../../services/handleSubmitData';

import { Title, Form, Contacts, Error, ContactHolder } from './styles'



const Dashboard = () => {
    const [inputError, setInputError] = useState('')
    const [contactList, setContactList] = useState<any[]>([])


    useEffect(()=> {
        const fetchData = async () => {
            
            const dbRef = database.ref();
            dbRef.child("contacts").get().then((snapshot) => {
            if (snapshot.exists()) {
                const contactObj = snapshot.val()
                const contactHolder:any = []
                for(let id in contactObj){
                    contactHolder.push({id, ...contactObj[id]})

                }
                setContactList(contactHolder)

            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });

        }
    
        fetchData()
    },[contactList])

    async function handleAddContact(contactData: any, {reset}: any) {
        addContatToList(contactData).then(res => {
            
            if(!!res){
                console.log(res);
                res.forEach(error => {
                    notifyError(error)
                })
                return
            }

            const contactsRef = database.ref('contacts')        
            contactsRef.push(contactData)
            setContactList([...contactList, contactData])
            setInputError('')
            notifySuccess('Contato Adicionado')
            reset()
    

        })

      
    }

    return (
    <>
        <Title>Lista de Contatos</Title>

        <Form hasError={Boolean(!!inputError)} onSubmit={handleAddContact}>
            <Input name="name" type="text" placeholder="Nome do contato" />
            <Input name="phone" type="text" placeholder="Telefone do contato"/>
            <button type="submit">Adicionar</button>
        </Form>

        {/* { inputError && <Error>{inputError}</Error> } */}

        <Contacts>
            {contactList.map(contact => (
                <ContactHolder to={`contact/${contact.id}`} >


                    <div>
                        <strong>{contact.name}</strong>
                        <p>{contact.phone}</p>
                    </div>
                    <Link key={contact.id} to={`update/${contact.id}`}>

                    <FiEdit size={20} />

                </Link>
                </ContactHolder>
            ))}
        </Contacts>
        <ToastContainer />
    </>
    )
}

export default Dashboard;
