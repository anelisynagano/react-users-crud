import "./App.css";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };
  useEffect(getUsers, []);

  function handleClick(clickedId) {
    let filteredUsers = users.filter((user) => user.id !== clickedId);
    setUsers(filteredUsers);
  }

  const handleChange = (e) => {
    setNewUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prevState) => {
      return [newUser, ...prevState];
    });
    setNewUser({ name: "", phone:"", email:""})
  };

  return (
    <div className='App'>
      <form>
        <label htmlFor='user-name'>Name: </label>
        <input
          type='text'
          id='user-name'
          value={newUser.name}
          onChange={handleChange}
          name='name'
        />
        <label htmlFor='user-email'>Email: </label>
        <input
          type='text'
          id='user-email'
          value={newUser.email}
          onChange={handleChange}
          name='email'
        />
        <label htmlFor='user-phone'>Phone:</label>
        <input
          type='text'
          id='user-phone'
          value={newUser.phone}
          onChange={handleChange}
          name='phone'
        />
        <input type='button' value='Add new user' onClick={handleSubmit} />
      </form>

      {users.map((user, index) => (
        <UserCard key={index} {...user} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;

//when we click on the button, trigger a function handleSubmit
//handleSubmit will then take newUser from the state and add to user state.
