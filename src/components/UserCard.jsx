import React from 'react';
import './styles/userCard.css';


const UserCard = ({user, deleteUser, setUpdateUser}) => {

console.log(user);

const handleDelete = () => {
    deleteUser("users", user.id);
}

const handleEdit = () => {
    setUpdateUser(user);
}

  return (
    <section className='user'>
        <h2 className='user__name'>{user.first_name} {user.last_name}</h2>
        <hr className='user__line' />
        <ul className='user__list'>
            <li className='user__item'><span>Email: </span><span>{user.email}</span></li>
            <li className='user__item'><span>Birthday: </span><span><img src="../gift-regular-24.png" alt="gift icon" width={'15px'} /> {user.birthday}</span></li>
        </ul>
        <hr className='user__line' />
        <div className='user__buttons'>
            <button className='user__btn btn__trash' onClick={handleDelete}><img src="../trash-regular-24.png" alt="trash icon" width={'14px'} /></button>
            <button className='user__btn btn__edit' onClick={handleEdit}><img src="../pencil-solid-24.png" alt="pencil icon" width={'15px'} /></button>
        </div>
    </section>
  )
}

export default UserCard;
