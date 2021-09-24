import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";

import { FiChevronLeft } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';

import { database } from "../../services/api";
import Input from "../../components/InputComponent";

import { DeleteContact, Form, Header, RepositoryInfo } from "./styles";

interface IContact {
    0:{
        name: String;
        phone: String;
        email: String;
        address: String;
        social: String;
    }
}

interface IContactParams {
    id: string;
}

interface IContactData{
    name: String;
        phone: String;
        email: String;
        address: String;
        social: String;

}

const Update = () =>{
    const [contact, setContact] = useState<IContact | null>(null)
    const { params } = useRouteMatch<IContactParams>()
    let history = useHistory();

    
    function deleteContact() {
        database.ref('contacts').child(params.id).remove((error) => {
            if (error) {
              console.log(error);
              
            } else {
              console.log(params.id);
                history.push("/");
            }
          });
    }

    async function handleUpdateContact(contactData: IContactData, {reset}: any) {
        
        database.ref('contacts').child(params.id).update({
            name: contactData.name,
            phone: contactData.phone,
            email: contactData.email,
            address: contactData.address,
        });
        reset()
        history.push(`/contact/${params.id}`);

    }
    
    useEffect(() => {
        const fetchData = async () => {
            const dbRef = database.ref();
            dbRef.child("contacts").get().then((snapshot) => {
    
            if (snapshot.exists()) {
                const contactObj = snapshot.val()
                const contactHolder:any = []
                for(let contactId in contactObj){
                    if (contactId == params.id) {
                        
                        contactHolder.push(contactObj[params.id])
                    }
    
                }
                setContact(contactHolder)
    
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
                console.error(error);
            });
            console.log(contact);
            
            
            
            
        }
        fetchData()
        
    }, [])

   
    
    


return(
    <>
    <Header>
            <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
            </Link>
        </Header>

    { contact && (
        <RepositoryInfo>
        <header>
            <div>
                <strong>Atualizar contato</strong>
                    <p>{params.id}</p>
            </div>

        </header>
        <Form onSubmit={handleUpdateContact}>
            <Input name="name" type="text" placeholder="Nome" defaultValue={contact[0].name} />
            <Input name="phone" type="text"  placeholder="Telefone" defaultValue={contact[0].phone}/>
            <Input name="email" type="text" placeholder="Email"  defaultValue={contact[0].email}/>
            <Input name="address" type="text"  placeholder="Endereço" defaultValue={contact[0].address}/>
            <button type="submit">Atualizar</button>
        </Form>
            <DeleteContact >
                
                <button onClick={deleteContact}>
                Deletar Contato
                </button>
            </DeleteContact>
        
    </RepositoryInfo>
    ) }
    </>
)
}

export default Update