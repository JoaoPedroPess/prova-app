import { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/usuarios')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>Lista de Usuários</Typography>
      {users.map(user => (
        <Card
          key={user.id}
          sx={{ mb: 2, cursor: 'pointer', '&:hover': { boxShadow: 6 } }}
          onClick={() => window.open(`/dados/${user.id}`, '_blank')}
        >
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
            <Typography color="text.secondary">{user.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
