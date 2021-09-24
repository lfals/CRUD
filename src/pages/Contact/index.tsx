import React, { useEffect, useState } from "react";
import { FiChevronLeft, FiEdit } from "react-icons/fi";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { database } from "../../services/api";

import {  Header, RepositoryInfo } from "./styles";

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

const Update = () =>{
    const [contact, setContact] = useState<IContact | null>(null)
    const { params } = useRouteMatch<IContactParams>()
    const updateLink = `/update/${params.id}`
    let history = useHistory();


    
    
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
            </Link><Link to={updateLink}>
                Atualizar contato 
                <FiEdit size={16} />
            </Link>
        </Header>

    { contact && (
        <RepositoryInfo>
        <header>
            <div>
                <strong>{contact[0].name}</strong>
                    <p>{contact[0].phone}</p>
                    <p>{contact[0].email}</p>
                    <p>{contact[0].address}</p>
            </div>

        </header>
        
        
    </RepositoryInfo>
    ) }
    </>
)
}

export default Update