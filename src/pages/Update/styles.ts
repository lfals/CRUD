import { shade } from 'polished';
import styled from 'styled-components'
import {Form as Unform} from '@unform/web'

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666
        }

        svg {
            margin-right: 4px
        }
    }
`

export const RepositoryInfo = styled.section`
    margin-top:80px;

    header {
        display:flex;
        align-items: center;
        img {
            width: 120px;
            height:120px;
            border-radius: 50%;
        }
        div{
            margin-left: 24px;
            strong{
                font-size:36px;
                color: #3d3d4d
            }
            p{
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }
    ul{
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }
            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }
        }
    }
`
export const DeleteContact = styled.div`
   
    margin: 50px auto;
    width: 100%;
    button{
        width: 150px;
        height: 50px;
        background: none ;
        border: none;
        border-radius: 25px;
        color: #c53030;
        transition: background-color 0.2s;
        margin: 0 auto;
        &:hover {
            color: white;
            background-color: ${shade(0.2,'#c53030')}
        }
    }
`

export const Issues = styled.div `
    margin-top: 80px;

    a{
        background: #fff;
        border-radius: 5px;
        width: 100%auto;
        padding: 24px;
        display:block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        
        & + a {
            margin-top:16px;
        }

        &:hover {
            transform: translateX(10px)
        }
    } 

    
    div {
        margin-left:16px;
        flex: 1;

        strong {
            font-size:20px;
            color: #3d3d4d;
        }
        p{
            font-size: 16px;
            color: #a8a8b3;
            margin-top: 4px;
        }
    }
    svg {
        margin-left: auto;
        color: #cbcbd6;
    }

    

`;

export const Form = styled(Unform)`
    margin-top:40px;
    max-width: 700px;
    flex-direction: column;
    display: flex;
   
    
    input{
        height: 70px;
        width: 100%;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;
        margin-top: 20px;

        &::placeholder {
            color: #a8a8b3
        }
    }
    button {
        margin-top: 20px;
        width:210px;
        height: 70px;
        background: #04d361;
        border-radius:0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2,'#04d361')}
        }


    }
`