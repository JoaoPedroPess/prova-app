import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/usuarios" element={<UserList />} />
        <Route path="/dados/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

/*
Isso define que:

Quando acessar /usuarios, será exibido o componente <UserList />

Quando acessar /dados/1, será exibido o componente <UserDetail /> com o id como parâmetro.
*/

export default App;
