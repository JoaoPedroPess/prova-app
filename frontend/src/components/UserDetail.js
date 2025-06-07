import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';


export default function UserDetail() {
    const { id } = useParams(); // Pega o id da URL
    const [user, setUser] = useState(null);

    // Busca os dados do usuário ao abrir uma página
    useEffect(() => {
        fetch(`http://localhost:3001/dados/${id}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);

    return (
        <Container>
            {user ? (
                <>
                    <Typography variant="h4">{user.name}</Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Typography>Bio: {user.bio}</Typography> 
                </>
            ) : (
                <Typography>Carregando...</Typography>
            )}
        </Container>
    );
}

/*Este componente faz:

Lê o id da URL (como /dados/2);

Busca os dados detalhados da API;

Exibe as informações do usuário.
*/