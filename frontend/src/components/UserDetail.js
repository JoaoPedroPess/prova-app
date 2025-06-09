import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/dados/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      {user ? (
        <>
          <Typography variant="h3" gutterBottom>{user.name}</Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>Email: {user.email}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{user.bio}</Typography>
        </>
      ) : (
        <Typography>Carregando...</Typography>
      )}
    </Container>
  );
}
