import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Container, Typography } from "@mui/material";

export default function UserList() {
    const [users, setUsers] = useState([]);



    useEffect(() => {
        fetch("http://localhost:3001/usuarios")
        .then(res => res.json())
        .then(data => setUsers(data));
    }, []);


    return (
        <Container>
            <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
            <List>
                {users.map(user => (
                    <ListItem 
                    button 
                    key={user.id} 
                    onClick={() => window.open(`/dados/${user.id}`, '_blank')}
                    >
                    <ListItemText primary={user.name} secondary={user.email} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

/*

Busca a lista de usuários da API quando o componente for carregado.

Exibe uma lista do Material UI.

Ao clicar num usuário, abre /dados/:id em uma nova aba.


*/