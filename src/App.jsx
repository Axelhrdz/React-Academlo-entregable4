
import { useEffect, useState } from 'react';
import './App.css'
import useCrud from "./hooks/useCrud";
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';

function App() {


  const urlBase = "https://users-crud.academlo.tech/";

  const [users, getUsers, createUser, deleteUser, editUser] = useCrud(urlBase);
  const [updateUser, setUpdateUser] = useState(); //para que se crea este estado? -- Investigar...
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const path = "users";
    getUsers(path);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  }

  // console.log(users);

  return (
    
      <div className='app'>
        <header className='app__header'>
          <h1 className='app__title'>Crud Users</h1>
          <button className='app__create_user' onClick={handleOpen}><ion-icon name="add-outline"></ion-icon>Create user</button>
        </header>
        
          <UserForm 
            createUser={createUser}
            updateUser={updateUser}
            editUser={editUser}
            setUpdateUser={setUpdateUser}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        
        <div className='app__container'>
          {
            users?.map((user)=>(
              <UserCard 
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUpdateUser={setUpdateUser}
              />
            ))
          }
        </div>
      </div>
    
  )
}

export default App
